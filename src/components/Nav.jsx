import { Link } from "react-router-dom";
import { profile } from "../data/profile.js";

const links = [
  ["projects", "프로젝트"],
  ["experience", "경력"],
  ["skills", "기술"],
  ["contact", "연락"],
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link to="/" className="brand">
          {profile.name}
          <span>{profile.nameEn}</span>
        </Link>
        <nav aria-label="주요 메뉴">
          {links.map(([id, label]) => (
            <Link key={id} to={`/#${id}`}>
              {label}
            </Link>
          ))}
          <a href={profile.github} className="nav-gh">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
