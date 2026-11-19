import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import WorkDetail from "./pages/WorkDetail.jsx";

/** 페이지가 바뀌면 맨 위로, #해시가 있으면 그 섹션으로 스크롤 */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) return el.scrollIntoView({ behavior: "smooth" });
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/work/:id" element={<WorkDetail />} />
        {/* 이전 사이트 주소 호환 */}
        <Route path="/about" element={<Navigate to="/#experience" replace />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
