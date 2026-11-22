/** 사례의 at = { flow, step } 을 흐름도별 { 단계: [사례번호] } 로 모은다 */
export function marksByFlow(p) {
  const out = (p.flows || []).map(() => ({}));
  (p.cases || []).forEach((c, i) => {
    if (!c.at || !out[c.at.flow]) return;
    (out[c.at.flow][c.at.step] ||= []).push(i + 1);
  });
  return out;
}
