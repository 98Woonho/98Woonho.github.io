import { useState } from "react";

const systemTheme = () => (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
const currentTheme = () => document.documentElement.dataset.theme || systemTheme();

/** 라이트/다크 전환. 고른 값은 localStorage 에 남기고, index.html 의 스크립트가 다음 방문 때 먼저 적용한다. */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme);
  const next = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* 저장이 막힌 환경에서는 이번 방문에만 적용 */
    }
    setTheme(next);
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={next === "light" ? "라이트 모드로 전환" : "다크 모드로 전환"} title={next === "light" ? "라이트 모드" : "다크 모드"}>
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
