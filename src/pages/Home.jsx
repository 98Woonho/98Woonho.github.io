import { Link } from "react-router-dom";
import Demo from "../components/Demo.jsx";
import { experience, isLive, profile, skills, webProjects, workProjects } from "../data/profile.js";
import showcase from "../generated/showcase.json";

function Hero() {
  return (
    <section className="hero wrap">
      <div className="hero-text">
        <p className="eyebrow">{profile.role}</p>
        <h1>
          {profile.headline.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        {profile.intro.map((p) => (
          <p key={p} className="lead">
            {p}
          </p>
        ))}
        <div className="cta">
          <Link className="btn primary" to="/#projects">
            프로젝트 보기
          </Link>
          <a className="btn" href={`mailto:${profile.email}`}>
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ p }) {
  return (
    <article className="featured">
      <div className="featured-head">
        <p className="kind">
          {p.kind} · {p.period}
        </p>
        <h3>{p.name}</h3>
        <p className="tagline">{p.tagline}</p>
        <p className="muted">{p.summary}</p>
        <ul className="tags">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="cta">
          <Link className="btn primary" to={`/projects/${p.id}`}>
            자세히 보기 · 데모
          </Link>
          {p.links.slice(0, 1).map((l) => (
            <a key={l.url} className="btn" href={l.url}>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <ul className="metrics">
        {p.highlights.map((h) => (
          <li key={h.label}>
            <b>{h.value}</b>
            <span>{h.label}</span>
          </li>
        ))}
      </ul>
      {p.demos[0] && (
        <div className="featured-demo">
          <Demo demo={p.demos[0]} compact />
        </div>
      )}
    </article>
  );
}

function WorkCard({ p }) {
  return (
    <article className="card work">
      <div className="work-head">
        <span className="kind">{p.kind}</span>
        <span className="period">
          {p.period} <span className={`badge ${isLive(p.status) ? "live" : ""}`}>{p.status}</span>
        </span>
      </div>
      <h3 className="work-title">
        <Link to={`/work/${p.id}`}>{p.name}</Link>
      </h3>
      <p className="muted work-tagline">{p.tagline}</p>

      <div className="work-meta-list">
        {p.role && (
          <div className="work-role">
            <span className="role-label">역할</span>
            <span className="role-val">{p.role}</span>
          </div>
        )}

        {p.cover && (
          <div className="work-arch" title="시스템 구조">
            <span className="arch-label">구조</span>
            <span className="arch-val">{p.cover}</span>
          </div>
        )}
      </div>

      {p.metrics?.length > 0 && (
        <ul className="work-metrics-mini">
          {p.metrics.slice(0, 2).map((m) => (
            <li key={m.label}>
              <b>{m.value}</b>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
      )}

      <ul className="tags">
        {p.tech.slice(0, 6).map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p className="links">
        <Link to={`/work/${p.id}`}>자세히 보기 →</Link>
      </p>
    </article>
  );
}

function WebProject({ p }) {
  return (
    <article className="card project">
      <p className="kind">{p.period}</p>
      <h3>{p.name}</h3>
      <p className="muted">{p.description}</p>
      <ul className="tags">
        {p.tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <p className="links">
        {p.links.map((l) => (
          <a key={l.url} href={l.url}>
            {l.label} ↗
          </a>
        ))}
      </p>
    </article>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="projects" className="wrap section">
        <h2>프로젝트</h2>
        <h3 className="sub">실무 프로젝트</h3>
        <p className="muted section-note">
          현재 회사에서 맡은 사내 시스템입니다. 소스코드는 공개하지 않고, 역할과 만든 기능 위주로 정리했습니다.
        </p>
        <div className="grid-3 work-grid">
          {workProjects
            .filter((p) => p.group === "app")
            .map((p) => (
              <WorkCard key={p.id} p={p} />
            ))}
        </div>

        <h3 className="sub">운영 · 인프라</h3>
        <p className="muted section-note">
          현장 장비에서 올라오는 데이터와 사내 서버를 운영하며 겪은 장애와 구축 작업입니다. 원인을 분석해 해결한 과정을 일지로 남겼고, 그중 대표 사례를 정리했습니다.
        </p>
        <div className="grid-2 work-grid">
          {workProjects
            .filter((p) => p.group === "ops")
            .map((p) => (
              <WorkCard key={p.id} p={p} />
            ))}
        </div>

        <h3 className="sub">AI 에이전트 도구</h3>
        <p className="muted section-note">
          AI 에이전트(Claude 등)가 실제 데이터를 조회하고 판단할 수 있게 만드는 MCP 서버와 Skill입니다. 서버는 LLM을 호출하지 않아 운영 비용이 들지 않습니다.
        </p>
        {showcase.projects.map((p) => (
          <FeaturedProject key={p.id} p={p} />
        ))}

        <h3 className="sub">웹 프로젝트</h3>
        <div className="grid-2">
          {webProjects.map((p) => (
            <WebProject key={p.name} p={p} />
          ))}
        </div>
      </section>

      <section id="experience" className="wrap section">
        <h2>경력 · 교육</h2>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.title}>
              <span className="period">{e.period}</span>
              <div>
                <h3>
                  {e.title} <span className="muted">· {e.org}</span>
                </h3>
                <p className="muted">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" className="wrap section">
        <h2>기술</h2>
        <div className="skills">
          {skills.map((s) => (
            <div key={s.group} className="card">
              <h3>{s.group}</h3>
              <ul className="tags">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="wrap section contact">
        <h2>함께 이야기해요</h2>
        <p className="muted">프로젝트나 협업 제안, 궁금한 점이 있다면 편하게 연락 주세요.</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="btn" href={profile.github}>
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
