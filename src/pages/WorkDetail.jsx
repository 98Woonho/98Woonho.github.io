import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import CaseCard from "../components/CaseCard.jsx";
import Flow from "../components/Flow.jsx";
import Screenshot from "../components/Screenshot.jsx";
import { isLive, workProjects } from "../data/profile.js";

/** 사례의 at = { flow, step } 을 흐름도별 { 단계: [사례번호] } 로 모은다 */
function marksByFlow(p) {
  const out = (p.flows || []).map(() => ({}));
  (p.cases || []).forEach((c, i) => {
    if (!c.at || !out[c.at.flow]) return;
    (out[c.at.flow][c.at.step] ||= []).push(i + 1);
  });
  return out;
}

export default function WorkDetail() {
  const { id } = useParams();
  const p = workProjects.find((x) => x.id === id);

  useEffect(() => {
    if (p) document.title = `${p.name} · 이운호`;
    return () => {
      document.title = "이운호 · Software Developer";
    };
  }, [p]);

  if (!p) return <Navigate to="/#projects" replace />;
  const marks = marksByFlow(p);

  return (
    <main className="detail">
      <section className="wrap detail-hero">
        <Link to="/#projects" className="back">
          ← 프로젝트 목록
        </Link>
        <p className="eyebrow">
          {p.kind} · {p.period} <span className={`badge ${isLive(p.status) ? "live" : ""}`}>{p.status}</span>
        </p>
        <h1>{p.name}</h1>
        <p className="tagline">{p.tagline}</p>
        <p className="lead">{p.summary}</p>
        <p className="muted role">
          <b>역할</b> · {p.role}
        </p>
        <ul className="metrics">
          {p.metrics.map((m) => (
            <li key={m.label}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {p.flows?.length > 0 && (
        <section className="wrap section">
          <h2>구조</h2>
          {p.flows.map((f, i) => (
            <Flow key={f.title} flow={f} marks={marks[i]} />
          ))}
        </section>
      )}

      {p.cases?.length > 0 && (
        <section className="wrap section">
          <h2>주요 사례</h2>
          <div className="cases">
            {p.cases.map((c, i) => (
              <CaseCard key={c.title} c={c} index={i + 1} />
            ))}
          </div>
        </section>
      )}

      {p.highlights?.length > 0 && (
        <section className="wrap section">
          <h2>주요 작업</h2>
          <div className="grid-2">
            {p.highlights.map((h) => (
              <article key={h.title} className="card">
                <h3>{h.title}</h3>
                <p className="muted">{h.body}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {p.images?.length > 0 && (
        <section className="wrap section">
          <h2>화면</h2>
          <p className="muted section-note">개인정보와 업무 데이터는 가리거나 예시 데이터로 바꾼 화면입니다.</p>
          <div className="gallery">
            {p.images.map((img) => (
              <Screenshot key={img.caption} image={img} />
            ))}
          </div>
        </section>
      )}

      <section className="wrap section">
        <h2>기술 스택</h2>
        <ul className="tags big">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {p.process && <p className="muted section-note note-private">{p.process}</p>}
        <p className="muted section-note note-private">사내에서 운영하는 시스템이라 소스코드와 서비스 주소, 세부 설정값은 공개하지 않습니다.</p>
      </section>
    </main>
  );
}
