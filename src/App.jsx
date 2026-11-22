import { useLayoutEffect } from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import useReveal from "./hooks/useReveal.js";
import useSpotlight from "./hooks/useSpotlight.js";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import WorkDetail from "./pages/WorkDetail.jsx";

/**
 * 페이지가 바뀌면 맨 위로, #해시가 있으면 그 섹션으로 스크롤.
 * layout effect 라서 화면 전환(View Transition)의 새 화면을 찍기 전에 위치가 정해진다.
 * key 를 넣어 같은 #해시를 다시 눌러도 다시 스크롤한다.
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useLayoutEffect(() => {
    const el = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    // scrollIntoView 는 최신 브라우저에서 Promise 를 돌려주므로 effect 에서 return 하면 안 된다 (React 가 cleanup 으로 호출함)
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, key]);
  return null;
}

function Root() {
  const { pathname } = useLocation();
  useReveal(pathname);
  useSpotlight();
  return (
    <>
      <ScrollManager />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

// data router 를 써야 <Link viewTransition> 이 동작한다 (BrowserRouter 는 지원하지 않음)
const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects/:id", element: <ProjectDetail /> },
      { path: "/work/:id", element: <WorkDetail /> },
      // 이전 사이트 주소 호환
      { path: "/about", element: <Navigate to="/#experience" replace /> },
      { path: "/projects", element: <Navigate to="/#projects" replace /> },
      // 인프라 카드를 작업별로 나누기 전 주소
      { path: "/work/infra-security", element: <Navigate to="/#projects" replace /> },
      { path: "*", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
