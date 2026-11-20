/** 단계가 이어지는 흐름도. marks = { 단계번호: [사례번호, ...] } 이면 해당 단계에 번호 배지를 붙인다. */
export default function Flow({ flow, marks = {} }) {
  return (
    <figure className="flow">
      {flow.title && <figcaption className="flow-title">{flow.title}</figcaption>}
      <ol className="flow-steps">
        {flow.steps.map((s, i) => (
          <li key={s.label} className="flow-step">
            <div className="flow-node">
              {(marks[i] || []).length > 0 && (
                <span className="flow-marks">
                  {marks[i].map((n) => (
                    <span key={n} className="flow-mark" title={`사례 ${n}`}>
                      {n}
                    </span>
                  ))}
                </span>
              )}
              <b>{s.label}</b>
              {s.sub && <span className="flow-sub">{s.sub}</span>}
            </div>
            {i < flow.steps.length - 1 && (
              <span className="flow-arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      {flow.note && <p className="muted flow-note">{flow.note}</p>}
    </figure>
  );
}
