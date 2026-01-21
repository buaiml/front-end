import Link from "next/link";
import React from "react";
import { SOCIAL_LINKS } from "@/config/constants";

const SocialButtons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Link href={SOCIAL_LINKS.discord} aria-label="Discord" className="transition-transform duration-300 hover:scale-110">
        <img src="/images/discord-alt.svg" alt="Discord" className="w-8 h-8" />
      </Link>
      <Link href={SOCIAL_LINKS.github} aria-label="GitHub" className="transition-transform duration-300 hover:scale-110">
        <img src="/images/github-alt.svg" alt="GitHub" className="w-8 h-8" />
      </Link>
      <Link href={SOCIAL_LINKS.instagram} aria-label="Instagram" className="transition-transform duration-300 hover:scale-110">
        <img src="/images/instagram-alt.svg" alt="Instagram" className="w-8 h-8" />
      </Link>
      <Link href={SOCIAL_LINKS.youtube} aria-label="YouTube" className="transition-transform duration-300 hover:scale-110">
        <img src="/images/youtube-alt.svg" alt="YouTube" className="w-8 h-8" />
      </Link>
      <Link href={SOCIAL_LINKS.linkedin} aria-label="LinkedIn" className="transition-transform duration-300 hover:scale-110">
        <img src="/images/linkedin-alt.svg" alt="LinkedIn" className="w-8 h-8" />
      </Link>
    </div>
  )
}

export default SocialButtons;