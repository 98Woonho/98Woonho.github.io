import { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import CopyButton from "../components/CopyButton.jsx";
import CaseCard from "../components/CaseCard.jsx";
import Demo from "../components/Demo.jsx";
import showcase from "../generated/showcase.json";

function CodeBlock({ code }) {
  return (
    <div className="code">
      <pre>{code}</pre>
      <CopyButton text={code} className="on-dark" />
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const p = showcase.projects.find((x) => x.id === id);

  useEffect(() => {
    if (p) document.title = `${p.name} · 이운호`;
    return () => {
      document.title = "이운호 · Software Developer";
    };
  }, [p]);

  if (!p) return <Navigate to="/#projects" replace />;
  const { install, quality } = p;

  return (
    <main className="detail">
      <section className="wrap detail-hero">
        <Link to="/#projects" className="back">
          ← 프로젝트 목록
        </Link>
        <p className="eyebrow">
          {p.kind} · v{p.version} · {p.period}
        </p>
        <h1 style={{ viewTransitionName: `project-${p.id}` }}>{p.name}</h1>
        <p className="tagline">{p.tagline}</p>
        <p className="lead">{p.summary}</p>
        <div className="cta">
          {p.links.map((l, i) => (
            <a key={l.url} className={`btn ${i === 0 ? "primary" : ""}`} href={l.url}>
              {l.label}
            </a>
          ))}
        </div>
        {p.highlights.length > 0 && <ul className="metrics">
          {p.highlights.map((h) => (
            <li key={h.label}>
              <b>{h.value}</b>
              <span>{h.label}</span>
            </li>
          ))}
        </ul>}
      </section>

      <section className="wrap section">
        <h2>설계 원칙</h2>
        <div className={p.principles.length === 2 ? "grid-2" : "grid-3"}>
          {p.principles.map((x, i) => (
            <article key={x.title} className="card" data-reveal style={{ "--d": `${i * 70}ms` }}>
              <h3>{x.title}</h3>
              <p className="muted">{x.body}</p>
            </article>
          ))}
        </div>
      </section>

      {p.demos.length > 0 && (
        <section className="wrap section">
          <h2>데모</h2>
          <p className="muted section-note">
            실제 실행 기록을 재생하는 화면입니다. 이 사이트에서는 LLM을 실행하지 않습니다. 직접 질문해 보려면 <a href="#try">내 Claude에 설치</a>하세요.
          </p>
          {p.demos.map((d) => (
            <Demo key={d.id} demo={d} />
          ))}
        </section>
      )}

      <section className="wrap section">
        <h2>Skill</h2>
        <div className="grid-2">
          {p.skills.map((s) => (
            <article key={s.name} className="card" data-reveal>
              <h3>
                <code>{s.name}</code>
              </h3>
              <p className="muted">{s.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <h2>MCP 도구 {p.toolCount}개</h2>
        <p className="muted section-note">npm에 배포된 서버를 빌드할 때 실행해 받은 실제 목록입니다.</p>
        <div className="table-wrap">
          <table className="tools">
            <thead>
              <tr>
                <th>분류</th>
                <th>도구</th>
                <th>하는 일</th>
              </tr>
            </thead>
            <tbody>
              {p.tools.flatMap((g) =>
                g.items.map((t, i) => (
                  <tr key={t.name}>
                    <td className="group">{i === 0 ? g.group : ""}</td>
                    <td>
                      <code>{t.name}</code>
                      <span className="title">{t.title}</span>
                    </td>
                    <td>{t.summary}</td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </section>

      {quality && (
        <section className="wrap section">
          <h2>품질 검증</h2>
          {quality.conditions && <p className="muted section-note">{quality.conditions}</p>}
          {quality.metrics.length > 0 && <div className="grid-3">
            {quality.metrics.map((m) => (
              <article key={m.value} className="card metric" data-reveal>
                <b>{m.value}</b>
                <p className="muted">{m.body}</p>
              </article>
            ))}
          </div>}
          {quality.comparison && (
            <div style={{ marginTop: 24 }}>
              <div className="table-wrap">
                <table className="evaluation-table" aria-describedby="evaluation-note">
                  <caption>{quality.comparison.title}</caption>
                  <thead>
                    <tr>
                      <th scope="col">지표</th>
                      <th scope="col">Skill 있음</th>
                      <th scope="col">Skill 없음</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quality.comparison.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row">{row.label}</th>
                        <td>{row.withSkills}</td>
                        <td>{row.withoutSkills}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p id="evaluation-note" className="muted section-note">{quality.comparison.note}</p>
            </div>
          )}
          {quality.caseStudy && (
            <div className="cases" style={{ marginTop: 24 }}>
              <CaseCard c={quality.caseStudy} n={1} showNo={false} />
            </div>
          )}
          <p className="muted section-note">
            {quality.note} <a href={quality.link}>{quality.linkLabel || "README에서 보기"}</a>
          </p>
        </section>
      )}

      {install && (
        <section id="try" className="wrap section">
          <h2>직접 써보기</h2>
          <p className="muted section-note">{install.note}</p>
          <ol className="steps">
            {install.key && (
              <li>
                <h3>공공데이터포털 인증키 발급 (무료)</h3>
                <p className="muted">{install.key.body}</p>
                <ul className="chips">
                  {install.key.links.map((l) => (
                    <li key={l.url}>
                      <a href={l.url}>{l.label} ↗</a>
                    </li>
                  ))}
                </ul>
              </li>
            )}
            <li>
              <h3>Claude Code에 플러그인 설치</h3>
              <p className="muted">{install.claudeCode.body}</p>
              <CodeBlock code={install.claudeCode.code} />
              <details>
                <summary>Claude Desktop, Cursor 등 다른 클라이언트</summary>
                <p className="muted">{install.otherClients.body}</p>
                <CodeBlock code={install.otherClients.code} />
              </details>
            </li>
            <li>
              <h3>이렇게 물어보세요</h3>
              <p className="muted">{install.promptsNote}</p>
              <ul className="prompts">
                {install.prompts.map((q) => (
                  <li key={q}>
                    <span>{q}</span>
                    <CopyButton text={q} />
                  </li>
                ))}
              </ul>
            </li>
          </ol>
        </section>
      )}
    </main>
  );
}
