/** 흐름도별 사례 번호와 이동할 앵커를 모은다. 사례를 줄여도 기존 링크는 유지한다. */
export function marksByFlow(p) {
  const out = (p.flows || []).map(() => ({}));
  (p.cases || []).forEach((c, i) => {
    if (!c.at || !out[c.at.flow]) return;
    (out[c.at.flow][c.at.step] ||= []).push({ n: i + 1, anchor: c.anchor || `case-${i + 1}` });
  });
  return out;
}
