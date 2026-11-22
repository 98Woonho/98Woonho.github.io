import { Link, useLocation } from "react-router-dom";
import { profile } from "../data/profile.js";
import useActiveSection from "../hooks/useActiveSection.js";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  ["projects", "프로젝트"],
  ["experience", "경력"],
  ["skills", "기술"],
  ["contact", "연락"],
];
const ids = links.map(([id]) => id);

export default function Nav() {
  const { pathname } = useLocation();
  const active = useActiveSection(ids, pathname === "/");
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand">
          {profile.name}
          <span>{profile.nameEn}</span>
        </Link>
        <nav aria-label="주요 메뉴">
          {links.map(([id, label]) => (
            <Link key={id} to={`/#${id}`} className={active === id ? "active" : undefined} aria-current={active === id ? "true" : undefined}>
              {label}
            </Link>
          ))}
          <a href={profile.github} className="nav-gh">
            GitHub
          </a>
        </nav>
        <div className="nav-actions">
          {profile.resume && (
            <a className="btn small primary" href={profile.resume} target="_blank" rel="noopener">
              이력서
            </a>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
