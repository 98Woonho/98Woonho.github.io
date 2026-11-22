import { useEffect } from "react";

/** .spot 카드 위에서 마우스 위치를 --mx/--my 로 넘겨 테두리 하이라이트가 따라오게 한다. 리스너는 문서에 하나만 둔다. */
export default function useSpotlight() {
  useEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const onMove = (e) => {
      const el = e.target.closest?.(".spot");
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);
}
