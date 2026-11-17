import { Link } from "react-router-dom";
import Demo from "../components/Demo.jsx";
import { experience, profile, skills, webProjects } from "../data/profile.js";
import showcase from "../generated/showcase.json";
import portrait from "../assets/profile.jpg";

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
      <img className="portrait" src={portrait} alt={`${profile.name} 사진`} />
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
