import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import CaseCard from "../components/CaseCard.jsx";
import DetailToc from "../components/DetailToc.jsx";
import Flow from "../components/Flow.jsx";
import Screenshot from "../components/Screenshot.jsx";
import { isLive, workProjectRedirects, workProjects } from "../data/profile.js";
import { marksByFlow } from "../lib/flow.js";

export default function WorkDetail() {
  const { id } = useParams();
  const { hash } = useLocation();
  const p = workProjects.find((x) => x.id === id);
  // 사례 카드에 마우스를 올리면 흐름도의 해당 단계를 강조한다
  const [hoverCase, setHoverCase] = useState(null);

  useEffect(() => {
    if (p) document.title = `${p.name} · 이운호`;
    return () => {
      document.title = "이운호 · Software Developer";
    };
  }, [p]);

  if (!p) {
    const redirect = workProjectRedirects[id];
    if (redirect) return <Navigate to={{ pathname: `/work/${redirect.id}`, hash: redirect.hashes?.[hash] || hash || redirect.hash || "" }} replace />;
    return <Navigate to="/#projects" replace />;
  }
  // 사례가 1건이면 번호(①)와 흐름도 배지는 의미가 없어 생략한다
  const single = p.cases?.length === 1;
  const marks = single ? [] : marksByFlow(p);
  const hovered = hoverCase != null ? p.cases[hoverCase - 1]?.at : null;
  // 대표 성과·흐름도 배지에서 #case-n 으로 들어오면 그 사례를 잠깐 강조한다
  const targetCase = (p.cases?.findIndex((c, i) => `#${c.anchor || `case-${i + 1}`}` === hash) ?? -1) + 1 || null;
  const images = (p.images || []).filter((img) => img.src);

  const toc = [
    ["overview", "개요"],
    p.flows?.length > 0 && ["structure", "구조"],
    p.cases?.length > 0 && ["cases", single ? "작업 내용" : "주요 사례"],
    p.highlights?.length > 0 && ["highlights", "주요 작업"],
    images.length > 0 && ["gallery", "화면"],
    ["stack", "기술 스택"],
  ].filter(Boolean);

  return (
    <main className="detail">
      <DetailToc key={p.id} items={toc} />

      <section id="overview" className="wrap detail-hero">
        <Link to="/#projects" className="back">
          ← 프로젝트 목록
        </Link>
        <p className="eyebrow">
          {[p.kind, p.period].filter(Boolean).join(" · ")} <span className={`badge ${isLive(p.status) ? "live" : ""}`}>{p.status}</span>
        </p>
        <h1 style={{ viewTransitionName: `work-${p.id}` }}>{p.name}</h1>
        <p className="tagline">{p.tagline}</p>
        <p className="lead">{p.summary}</p>
        <p className="muted role">
          <b>역할</b> · {p.role}
        </p>
        {p.validation && <p className="muted section-note">{p.validation}</p>}
        <ul className="metrics">
          {p.metrics.map((m, i) => (
            <li key={m.label} data-reveal style={{ "--d": `${i * 60}ms` }}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {p.flows?.length > 0 && (
        <section id="structure" className="wrap section">
          <h2>구조</h2>
          {p.flows.map((f, i) => (
            <Flow key={f.title} flow={f} marks={marks[i]} activeStep={hovered?.flow === i ? hovered.step : null} />
          ))}
        </section>
      )}

      {p.cases?.length > 0 && (
        <section id="cases" className="wrap section">
          <h2>{single ? "작업 내용" : "주요 사례"}</h2>
          <div className="cases">
            {p.cases.map((c, i) => (
              <CaseCard key={c.title} c={c} n={i + 1} showNo={!single} active={targetCase === i + 1} onHover={single ? undefined : setHoverCase} />
            ))}
          </div>
        </section>
      )}

      {p.highlights?.length > 0 && (
        <section id="highlights" className="wrap section">
          <h2>주요 작업</h2>
          <div className="grid-2">
            {p.highlights.map((h, i) => (
              <article key={h.title} id={h.anchor} className="card" data-reveal style={{ "--d": `${(i % 2) * 70}ms` }}>
                <h3>{h.title}</h3>
                <p className="muted">{h.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {images.length > 0 && (
        <section id="gallery" className="wrap section">
          <h2>화면</h2>
          <p className="muted section-note">개인정보와 업무 데이터는 가리거나 예시 데이터로 바꾼 화면입니다.</p>
          <div className="gallery">
            {images.map((img) => (
              <Screenshot key={img.caption} image={img} />
            ))}
          </div>
        </section>
      )}

      <section id="stack" className="wrap section">
        <h2>기술 스택</h2>
        <ul className="tags big">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
