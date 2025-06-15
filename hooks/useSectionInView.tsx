
import { useEffect, useState } from "react";

export default function useSectionInView(sectionId: string) {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5, // 50% visible
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [sectionId]);

  return isInView;
}
