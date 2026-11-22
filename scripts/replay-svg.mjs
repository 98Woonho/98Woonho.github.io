/**
 * 녹화된 대화(시나리오 JSON)를 터미널 모양의 애니메이션 SVG로 그린다.
 * docs/demo.svg 와 같은 모양이며, LLM 없이 브라우저에서 재생된다(SMIL 애니메이션, JS 없음).
 *
 * 시나리오 형식 (각 프로젝트 저장소의 showcase/demos/*.json):
 *   { id, title, prompt, steps: [{ tool, args, result: [줄...] }], answer: [줄...], caption }
 *   - 결과·답변 줄에서 **굵게** 는 강조색, ++초록++ 은 확인 표시색으로 그린다.
 *   - 별표가 3개 이상 이어진 것(E*** 처럼 개인정보를 가린 값)은 표시가 아니라 글자 그대로 그린다.
 *   - window: 창 제목 (기본 "Claude Code · korea-transit 플러그인")
 */

const W = 860;
const PAD = 28;
const T = {
  prompt: 0.4, // 질문이 뜨는 시각
  toolGap: 1.0, // 이전 줄 다음 도구 호출까지
  resultGap: 0.6, // 도구 호출 다음 결과까지
  lineGap: 0.25, // 결과·답변 여러 줄 사이
  answerGap: 1.0, // 마지막 도구 결과 다음 답변까지
  hold: 6, // 다 보여 준 뒤 멈춰 있는 시간
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** "**강조**", "++확인++" 표시를 tspan 으로. 가린 값의 별표(***)는 먼저 따로 빼 두었다가 그대로 돌려놓는다. */
function rich(line) {
  const stars = [];
  const kept = String(line).replace(/\*{3,}/g, (m) => `\u0000${stars.push(m) - 1}\u0000`);
  return esc(kept)
    .replace(/\*\*(.+?)\*\*/g, '<tspan class="hl">$1</tspan>')
    .replace(/\+\+(.+?)\+\+/g, '<tspan class="ok">$1</tspan>')
    .replace(/\u0000(\d+)\u0000/g, (_, i) => stars[Number(i)]);
}

/** 도구 인자를 한 줄로: (cityCode: 25, name: "시청역") */
function formatArgs(args) {
  if (typeof args === "string") return `(${args})`;
  const parts = Object.entries(args ?? {}).map(([k, v]) => `${k}: ${typeof v === "string" ? `"${v}"` : JSON.stringify(v).replace(/,/g, ", ")}`);
  return `(${parts.join(", ")})`;
}

/** 시각 t초에 나타나는 요소 */
function appear(t, inner) {
  return [
    '  <g opacity="0">',
    '    <set attributeName="opacity" to="0" begin="loop.begin" fill="freeze" />',
    `    <set attributeName="opacity" to="1" begin="loop.begin+${t.toFixed(1)}s" fill="freeze" />`,
    `    ${inner}`,
    "  </g>",
  ].join("\n");
}

export function renderReplaySvg(s) {
  const out = [];
  let y = 76;
  let t = T.prompt;

  out.push(appear(t, `<text x="${PAD}" y="${y}" class="ui prompt">&gt; ${esc(s.prompt)}</text>`));

  for (const step of s.steps) {
    y += 41;
    t += T.toolGap;
    out.push(
      appear(
        t,
        `<circle cx="34" cy="${y - 5}" r="4" class="dot" /><text x="48" y="${y}" class="mono"><tspan class="tool">${esc(step.tool)}</tspan><tspan class="args">${esc(formatArgs(step.args))}</tspan></text>`,
      ),
    );
    t += T.resultGap - T.lineGap;
    (step.result ?? []).forEach((line, i) => {
      y += 22;
      t += T.lineGap;
      out.push(appear(t, `<text x="48" y="${y}" class="mono res">${i === 0 ? "└ " : "  "}${rich(line)}</text>`));
    });
  }

  y += 30;
  t += T.answerGap;
  out.push(appear(t, `<line x1="${PAD}" y1="${y}" x2="${W - PAD}" y2="${y}" stroke="#343844" />`));
  y += 6;
  for (const line of s.answer) {
    y += 30;
    t += T.lineGap * 2;
    out.push(appear(t, `<text x="${PAD}" y="${y}" class="ui t">${rich(line)}</text>`));
  }

  const H = y + 64;
  const dur = Math.ceil(t + T.hold);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(s.title)}: ${esc(s.prompt)}">
  <!-- 데모 시나리오 ${esc(s.id)}.json 에서 생성 (npm run showcase). 직접 고치지 마세요. ${dur}초 주기로 반복된다. -->
  <style>
    .ui { font-family: "Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif; }
    .mono { font-family: "JetBrains Mono", "D2Coding", Consolas, "Noto Sans Mono CJK KR", monospace; }
    .t { fill: #e6e6e6; font-size: 15px; }
    .prompt { fill: #f0a875; font-size: 16px; font-weight: 600; }
    .tool { fill: #8ab4f8; font-size: 14px; }
    .args { fill: #c3c7cf; font-size: 14px; }
    .res { fill: #8f96a3; font-size: 13.5px; }
    .ok { fill: #9ece6a; }
    .dot { fill: #9ece6a; }
    .hl { fill: #ffd479; font-weight: 600; }
    .title { fill: #c3c7cf; font-size: 13px; }
  </style>
  <rect width="0" height="0">
    <animate id="loop" attributeName="x" from="0" to="0" dur="${dur}s" begin="0s;loop.end" />
  </rect>
  <rect x="0" y="0" width="${W}" height="${H}" rx="12" fill="#1b1d23" />
  <rect x="0" y="0" width="${W}" height="36" rx="12" fill="#262932" />
  <rect x="0" y="24" width="${W}" height="12" fill="#262932" />
  <circle cx="20" cy="18" r="6" fill="#ff5f57" />
  <circle cx="40" cy="18" r="6" fill="#febc2e" />
  <circle cx="60" cy="18" r="6" fill="#28c840" />
  <text x="${W / 2}" y="23" text-anchor="middle" class="ui title">${esc(s.window ?? "Claude Code · korea-transit 플러그인")}</text>
${out.join("\n")}
  <text x="${W - PAD}" y="${H - 20}" text-anchor="end" class="ui" fill="#5c6370" font-size="12">${esc(s.caption)}</text>
</svg>
`;
}
