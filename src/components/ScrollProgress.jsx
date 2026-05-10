import { memo } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgressBase() {
  const { scrollYProgress } = useScroll()
  const x = useSpring(scrollYProgress, { stiffness: 140, damping: 25, mass: 0.4 })
  return (
    <motion.div
      style={{ scaleX: x }}
      className="fixed top-0 left-0 right-0 h-[2px] origin-left bg-gold z-[60]"
    />
  )
}

export default memo(ScrollProgressBase)
