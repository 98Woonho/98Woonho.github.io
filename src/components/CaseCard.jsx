/** 문제 해결·구축 사례 한 건. rows 의 라벨은 사례마다 다르게 쓴다 (증상·원인·조치·결과 / 배경·구성·결과 등). */
export default function CaseCard({ c, index }) {
  return (
    <article className="card case">
      <header>
        {index != null && <span className="case-no">{index}</span>}
        <span className="tag">{c.tag}</span>
      </header>
      <h3>{c.title}</h3>
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
