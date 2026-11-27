import { Link } from "react-router-dom";
import Bento from "../components/Bento.jsx";
import Demo from "../components/Demo.jsx";
import { experience, featured, heroStats, isLive, profile, skills, webProjects, workProjects } from "../data/profile.js";
import showcase from "../generated/showcase.json";

/** 첫 화면: 누구인지(이름·직무·소속·분야) → 증거 수치 → 행동 버튼. 채용 검토의 첫 몇 초에 필요한 것만 둔다. */
function Hero() {
  return (
    <section id="top" className="hero wrap">
      <div className="hero-glow" aria-hidden="true" />
      <p className="eyebrow hero-meta" data-reveal>
        <span>
          {profile.name} · {profile.role}
        </span>
        <span className="hero-now">
          <i aria-hidden="true" />
          {profile.current.org} · {profile.current.since} ~ 현재
        </span>
      </p>
      <h1 data-reveal style={{ "--d": "80ms" }}>
        {profile.headline.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>
      <ul className="focus" data-reveal style={{ "--d": "160ms" }}>
        {profile.focus.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      {profile.intro.map((p) => (
        <p key={p} className="lead" data-reveal style={{ "--d": "220ms" }}>
          {p}
        </p>
      ))}
      <div className="cta" data-reveal style={{ "--d": "280ms" }}>
        <Link className="btn primary" to="/#featured">
          대표 성과 보기
        </Link>
        {profile.resume && (
          <a className="btn" href={profile.resume} target="_blank" rel="noopener">
            이력서 PDF
          </a>
        )}
        <a className="btn" href={`mailto:${profile.email}`}>
          연락하기
        </a>
      </div>
      <ul className="stats dim-group">
        {heroStats.map((s, i) => (
          <li key={s.label} data-reveal style={{ "--d": `${340 + i * 70}ms` }}>
            <Link to={s.to} className="spot">
              <b>{s.value}</b>
              <span className="stat-label">{s.label}</span>
              <span className="stat-note">{s.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** 섹션 제목. 번호로 읽는 순서를 보여준다. */
function SectionTitle({ no, children, note }) {
  return (
    <header className="section-head" data-reveal>
      <h2>
        <span className="section-no">{no}</span>
        {children}
      </h2>
      {note && <p className="muted section-note">{note}</p>}
    </header>
  );
}

function GroupTitle({ id, children, note }) {
  return (
    <div id={id} className="group-head" data-reveal>
      <h3 className="sub">{children}</h3>
      {note && <p className="muted section-note">{note}</p>}
    </div>
  );
}

function FeaturedProject({ p }) {
  const demo = p.demos[0];
  return (
    <article className="featured" data-reveal>
      <div className="featured-head">
        <p className="kind">
          {p.kind} · {p.period}
        </p>
        <h3 style={{ viewTransitionName: `project-${p.id}` }}>{p.name}</h3>
        <p className="tagline">{p.tagline}</p>
        <p className="muted">{p.summary}</p>
        <ul className="tags">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="cta">
          <Link className="btn primary" to={`/projects/${p.id}`} viewTransition>
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
      {demo && (
        <div className="featured-demo window">
          <div className="window-bar" aria-hidden="true">
            <i />
            <i />
            <i />
            <span>{demo.title} · 실제 실행 기록</span>
          </div>
          <Demo demo={demo} compact />
        </div>
      )}
    </article>
  );
}

/** 카드 상단의 미니 구조도. 스크린샷 대신 flows[0] 을 세로 레일로 그린다. */
function ArchMini({ flows }) {
  const [main, ...rest] = flows;
  return (
    <figure className="arch" aria-label={main.title}>
      <figcaption className="arch-title">{main.title}</figcaption>
      <ol className="arch-steps">
        {main.steps.map((s) => (
          <li key={s.label}>
            <b>{s.label}</b>
            {s.sub && (
              <span className="arch-sub" title={s.sub}>
                {s.sub}
              </span>
            )}
          </li>
        ))}
      </ol>
      {rest.length > 0 && <p className="arch-more">+ {rest.map((f) => f.title).join(", ")} 구조</p>}
    </figure>
  );
}

const TAG_LIMIT = 5;

function WorkCard({ p, i }) {
  // 하나만 넘치면 "+1" 대신 그냥 다 보여준다
  const limit = p.tech.length - TAG_LIMIT > 1 ? TAG_LIMIT : p.tech.length;
  const extra = p.tech.length - limit;
  return (
    <article className="work spot" data-reveal style={{ "--d": `${(i % 3) * 80}ms` }}>
      {p.flows?.length > 0 ? <ArchMini flows={p.flows} /> : <div />}
      <p className="work-meta">
        <span className="kind">{p.kind}</span>
        {p.period && <span className="period">{p.period}</span>}
      </p>
      <h3 className="work-title">
        <Link to={`/work/${p.id}`} viewTransition style={{ viewTransitionName: `work-${p.id}` }}>
          {p.name}
        </Link>
        <span className={`badge ${isLive(p.status) ? "live" : ""}`}>{p.status}</span>
      </h3>
      <p className="muted work-tagline">{p.tagline}</p>
      <p className="work-role">
        <span>역할</span>
        {p.role}
      </p>
      <ul className="work-metrics">
        {(p.metrics || []).slice(0, 2).map((m) => (
          <li key={m.label}>
            <b>{m.value}</b>
            <span>{m.label}</span>
          </li>
        ))}
      </ul>
      <ul className="tags">
        {p.tech.slice(0, limit).map((t) => (
          <li key={t}>{t}</li>
        ))}
        {extra > 0 && <li className="more">+{extra}</li>}
      </ul>
      <p className="work-link" aria-hidden="true">
        자세히 보기 <span>→</span>
      </p>
    </article>
  );
}

function WebProject({ p }) {
  return (
    <li className="web-item" data-reveal>
      <span className="period">{p.period}</span>
      <div>
        <h3>{p.name}</h3>
        <p className="muted">{p.description}</p>
        <p className="web-tech">{p.tech.join(" · ")}</p>
      </div>
      <p className="links">
        {p.links.map((l) => (
          <a key={l.url} href={l.url}>
            {l.label} ↗
          </a>
        ))}
      </p>
    </li>
  );
}

export default function Home() {
  const apps = workProjects.filter((p) => p.group === "app");
  const ops = workProjects.filter((p) => p.group === "ops");
  return (
    <main>
      <Hero />

      <section id="featured" className="wrap section">
        <SectionTitle no="01" note="문제와 결과만 추렸습니다. 누르면 원인 분석과 조치 과정이 있는 상세 사례로 이동합니다.">
          대표 성과
        </SectionTitle>
        <Bento items={featured} />
      </section>

      <section id="projects" className="section projects">
        <div className="wrap">
          <SectionTitle no="02">프로젝트</SectionTitle>
          <GroupTitle id="work-app" note="현재 회사에서 맡은 사내 시스템입니다.">
            실무 프로젝트
          </GroupTitle>
          <div className="grid-3 work-grid dim-group">
            {apps.map((p, i) => (
              <WorkCard key={p.id} p={p} i={i} />
            ))}
          </div>
        </div>

        <div className="band">
          <div className="wrap">
            <GroupTitle
              id="work-ops"
              note="현장 장비에서 올라오는 데이터와 사내 서버를 운영하며 겪은 장애와 구축 작업입니다. 원인을 분석해 해결한 과정을 일지로 남겼고, 그중 대표 사례를 정리했습니다."
            >
              운영 · 인프라
            </GroupTitle>
            <div className="grid-2 work-grid dim-group">
              {ops.map((p, i) => (
                <WorkCard key={p.id} p={p} i={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="wrap">
          <GroupTitle
            id="ai-tools"
            note="AI 에이전트(Claude 등)가 실제 데이터를 조회하고 판단할 수 있게 만드는 MCP 서버와 Skill입니다. 서버는 LLM을 호출하지 않아 운영 비용이 들지 않습니다."
          >
            AI 에이전트 도구
          </GroupTitle>
          {showcase.projects.map((p) => (
            <FeaturedProject key={p.id} p={p} />
          ))}
        </div>
      </section>

      <section id="experience" className="wrap section">
        <SectionTitle no="03">경력 · 교육</SectionTitle>
        <ol className="timeline">
          {experience.map((e) => (
            <li key={e.title} data-reveal>
              <span className="period">{e.period}</span>
              <div>
                <h3>
                  {e.title} <span className="muted">· {[e.org, e.rank].filter(Boolean).join(" · ")}</span>
                </h3>
                <p className="muted">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="skills" className="wrap section">
        <SectionTitle no="04">기술</SectionTitle>
        <div className="skills">
          {skills.map((s, i) => (
            <div key={s.group} className="card" data-reveal style={{ "--d": `${(i % 2) * 70}ms` }}>
              <h3>{s.group}</h3>
              <ul className="tags">
                {s.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="web" className="wrap section">
        <SectionTitle no="05" note="교육 과정과 개인 시간에 만든 웹 서비스입니다.">
          이전 웹 프로젝트
        </SectionTitle>
        <ul className="web-list dim-group">
          {webProjects.map((p) => (
            <WebProject key={p.name} p={p} />
          ))}
        </ul>
      </section>

      <section id="contact" className="wrap section contact" data-reveal>
        <h2>함께 이야기해요</h2>
        <p className="muted">프로젝트나 협업 제안, 궁금한 점이 있다면 편하게 연락 주세요.</p>
        <div className="cta">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          {profile.resume && (
            <a className="btn" href={profile.resume} target="_blank" rel="noopener">
              이력서 PDF
            </a>
          )}
          <a className="btn" href={profile.github}>
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
