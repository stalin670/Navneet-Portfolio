import { useEffect, useState } from 'react'

export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      {
        rootMargin: `-${offset}px 0px -55% 0px`,
        threshold: [0.15, 0.35, 0.6, 0.85],
      }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids, offset])

  return active
}
