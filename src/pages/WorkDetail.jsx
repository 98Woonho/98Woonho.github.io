import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Screenshot from "../components/Screenshot.jsx";
import { workProjects } from "../data/profile.js";

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

  return (
    <main className="detail">
      <section className="wrap detail-hero">
        <Link to="/#projects" className="back">
          ← 프로젝트 목록
        </Link>
        <p className="eyebrow">
          {p.kind} · {p.period} <span className={`badge ${p.status === "진행 중" ? "live" : ""}`}>{p.status}</span>
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

      <section className="wrap section">
        <h2>화면</h2>
        <p className="muted section-note">개인정보와 업무 데이터는 가리거나 예시 데이터로 바꾼 화면입니다.</p>
        <div className="gallery">
          {p.images.map((img) => (
            <Screenshot key={img.caption} image={img} />
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>기술 스택</h2>
        <ul className="tags big">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <p className="muted section-note note-private">사내에서 운영하는 프로젝트라 소스코드와 서비스 주소는 공개하지 않습니다.</p>
      </section>
    </main>
  );
}
