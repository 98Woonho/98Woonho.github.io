import { Link } from "react-router-dom";

/**
 * 단계가 이어지는 흐름도.
 * marks = { 단계번호: [사례번호, ...] } 이면 해당 단계에 번호 배지를 붙이고, 배지를 누르면 그 사례(#case-n)로 간다.
 * activeStep 이면 그 단계를 강조한다 (사례 카드에 마우스를 올렸을 때).
 */
export default function Flow({ flow, marks = {}, activeStep = null }) {
  return (
    <figure className="flow">
      {flow.title && <figcaption className="flow-title">{flow.title}</figcaption>}
      <ol className="flow-steps">
        {flow.steps.map((s, i) => (
          <li key={s.label} className="flow-step" data-reveal style={{ "--d": `${i * 70}ms` }}>
            <div className={`flow-node ${activeStep === i ? "is-active" : ""}`}>
              {(marks[i] || []).length > 0 && (
                <span className="flow-marks">
                  {marks[i].map((n) => (
                    <Link key={n} to={`#case-${n}`} className="flow-mark" title={`사례 ${n}로 이동`} aria-label={`사례 ${n}로 이동`}>
                      {n}
                    </Link>
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
