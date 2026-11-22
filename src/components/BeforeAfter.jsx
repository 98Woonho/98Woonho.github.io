/**
 * 사례의 전후 비교 (compare). 화면에 들어오면 막대가 늘어나고 점이 찍힌다 (data-revealed 기준, CSS).
 * kind: "bar"      → 값의 크기를 막대로 (before 가 100%)
 *       "interval" → 1시간(60분) 축에 value 분 간격으로 점
 *       "text"     → 저장되는 값의 모양을 글자로
 */
function Visual({ kind, side, max, unit }) {
  if (kind === "bar") {
    return (
      <span className="ba-track">
        <span className="ba-fill" style={{ "--w": side.value / max }} />
      </span>
    );
  }
  if (kind === "interval") {
    const n = Math.floor(60 / side.value);
    return (
      <span className="ba-track ba-dots" aria-hidden="true">
        {Array.from({ length: n }, (_, i) => (
          <i key={i} style={{ left: `${(i / n) * 100}%`, "--i": i }} />
        ))}
      </span>
    );
  }
  return <code className="ba-code">{side.text}</code>;
}

function valueText(kind, side, unit) {
  if (kind === "bar") return `${side.value}${unit || ""} · ${side.text}`;
  if (kind === "text") return side.note;
  return side.text;
}

export default function BeforeAfter({ compare }) {
  const { kind, label, before, after, unit } = compare;
  const max = Math.max(before.value || 0, after.value || 0);
  return (
    <figure className={`ba ba-${kind}`} data-reveal>
      <figcaption>{label}</figcaption>
      {[
        ["전", "before", before],
        ["후", "after", after],
      ].map(([k, cls, side]) => (
        <div key={cls} className={`ba-row ${cls}`}>
          <span className="ba-k">{k}</span>
          <Visual kind={kind} side={side} max={max} unit={unit} />
          <span className="ba-v">{valueText(kind, side, unit)}</span>
        </div>
      ))}
    </figure>
  );
}
