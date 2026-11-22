import useActiveSection from "../hooks/useActiveSection.js";

/** 상세 페이지 상단에 붙는 목차와 읽기 진행 막대. items = [[id, 라벨], ...] (실제로 있는 섹션만) */
export default function DetailToc({ items }) {
  const active = useActiveSection(items.map(([id]) => id));
  const go = (e, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
    history.replaceState(history.state, "", `#${id}`);
  };
  return (
    <div className="toc">
      <nav className="wrap toc-inner" aria-label="이 페이지 목차">
        {items.map(([id, label]) => (
          <a key={id} href={`#${id}`} className={active === id ? "active" : undefined} onClick={(e) => go(e, id)}>
            {label}
          </a>
        ))}
      </nav>
      <span className="toc-progress" aria-hidden="true" />
    </div>
  );
}
