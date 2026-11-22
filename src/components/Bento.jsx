import { Link } from "react-router-dom";

/** 대표 성과 타일. "문제 한 줄 → 결과 한 줄"만 보여주고, 누르면 상세 사례로 간다. */
export default function Bento({ items }) {
  return (
    <div className="bento dim-group">
      {items.map((t, i) => (
        <Link key={t.to} to={t.to} className={`bento-tile spot ${t.size === "lg" ? "lg" : ""}`} data-reveal style={{ "--d": `${i * 70}ms` }}>
          <span className="tag">{t.tag}</span>
          {t.value && <b className="bento-value">{t.value}</b>}
          <h3>{t.title}</h3>
          {t.problem && (
            <p className="bento-line">
              <span>문제</span>
              {t.problem}
            </p>
          )}
          <p className="bento-line result">
            <span>결과</span>
            {t.result}
          </p>
          <span className="bento-more" aria-hidden="true">
            사례 보기 <i>→</i>
          </span>
        </Link>
      ))}
    </div>
  );
}
