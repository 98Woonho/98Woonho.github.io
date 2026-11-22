import BeforeAfter from "./BeforeAfter.jsx";

/**
 * 문제 해결·구축 사례 한 건. rows 의 라벨은 사례마다 다르게 쓴다 (증상·원인·조치·결과 / 배경·구성·결과 등).
 * summary 는 훑어보는 사람을 위한 결과 한 줄, compare 가 있으면 전후 비교를 그린다.
 * id 는 항상 case-n 으로 달아 대표 성과·흐름도 배지에서 바로 올 수 있게 한다.
 */
export default function CaseCard({ c, n, showNo = true, active = false, onHover }) {
  return (
    <article
      id={`case-${n}`}
      className={`card case ${active ? "is-active" : ""}`}
      data-reveal
      onMouseEnter={onHover && (() => onHover(n))}
      onMouseLeave={onHover && (() => onHover(null))}
      onFocus={onHover && (() => onHover(n))}
      onBlur={onHover && (() => onHover(null))}
    >
      <header>
        {showNo && <span className="case-no">{n}</span>}
        <span className="tag">{c.tag}</span>
      </header>
      <h3>{c.title}</h3>
      {c.summary && <p className="case-summary">{c.summary}</p>}
      {c.compare && <BeforeAfter compare={c.compare} />}
      <dl>
        {c.rows.map((r) => (
          <div key={r.label} className="case-row">
            <dt>{r.label}</dt>
            <dd>{r.text}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
