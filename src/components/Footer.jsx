import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <span>© {new Date().getFullYear()} {profile.nameEn}</span>
      <span>
        <a href={profile.github}>GitHub</a> · <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </span>
    </footer>
  );
}
