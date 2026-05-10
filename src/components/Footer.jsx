import { memo } from 'react'
import { profile } from '../data'

function FooterBase() {
  return (
    <footer className="border-t hairline">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-8 sm:py-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-sm">
        <p className="text-paper/55">
          © {new Date().getFullYear()} {profile.name}. Crafted in {profile.location}.
        </p>
        <div className="flex items-center gap-5 text-paper/65 flex-wrap">
          <a href={`mailto:${profile.email}`} className="hover:text-gold transition-colors">Email</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">LinkedIn</a>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">Resume</a>
          <a href="#home" className="hover:text-gold transition-colors">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}

export default memo(FooterBase)
