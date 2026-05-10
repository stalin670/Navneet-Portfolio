import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollProgress from './components/ScrollProgress'
import { useLenis } from './hooks/useLenis'

const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Mentorship = lazy(() => import('./components/Mentorship'))
const Resume = lazy(() => import('./components/Resume'))
const Education = lazy(() => import('./components/Education'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const Fallback = () => <div className="min-h-[40vh]" aria-hidden />

export default function App() {
  useLenis()
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Fallback />}>
          <About />
          <Experience />
          <Mentorship />
          <Resume />
          <Education />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </>
  )
}
