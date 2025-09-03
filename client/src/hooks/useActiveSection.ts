import { useEffect, useState } from "react";

export default function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] || "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const options = { root: null, rootMargin: "0px 0px -70% 0px", threshold: 0 };

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(id);
        });
      }, options);

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids.join(",")]);

  return active;
}
