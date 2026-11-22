import { useEffect } from "react";

/**
 * data-reveal 이 붙은 요소가 화면에 들어오면 data-revealed 를 달아 한 번만 등장시킨다.
 * 감싸는 컴포넌트 없이 속성만 쓰는 이유: 카드 그리드가 subgrid 라 래퍼를 끼우면 정렬이 깨진다.
 * data-revealed 는 React 가 관리하지 않는 속성이라 리렌더돼도 지워지지 않는다.
 */
export default function useReveal(routeKey) {
  useEffect(() => {
    const els = [...document.querySelectorAll("[data-reveal]:not([data-revealed])")];
    if (!els.length) return;
    const show = (el) => el.setAttribute("data-revealed", "");
    if (!("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          show(e.target);
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [routeKey]);
}
