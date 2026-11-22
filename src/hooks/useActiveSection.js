import { useEffect, useState } from "react";

/** ids 중 지금 화면 가운데쯤에 걸친 섹션 id. 메뉴의 현재 위치 표시에 쓴다. */
export default function useActiveSection(ids, enabled = true) {
  const [active, setActive] = useState(null);
  const key = ids.join(",");

  useEffect(() => {
    setActive(null);
    if (!enabled || !("IntersectionObserver" in window)) return;
    const els = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;
    const visible = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        setActive(els.find((el) => visible.has(el.id))?.id ?? null);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [key, enabled]);

  return active;
}
