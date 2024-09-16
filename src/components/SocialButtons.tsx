import Link from "next/link";
import React from "react";

const SocialButtons: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Link href="https://discord.gg/TyubkeGSXj" aria-label="Discord" className="transition-transform duration-300 hover:scale-110">
        <img src="/images/discord-alt.svg" alt="Discord" className="w-8 h-8" />
      </Link>
      <Link href="https://github.com/buaiml" aria-label="GitHub" className="transition-transform duration-300 hover:scale-110">
        <img src="/images/github-alt.svg" alt="GitHub" className="w-8 h-8" />
      </Link>
      <Link href="https://www.instagram.com/buaisociety?igsh=ZG9pd3FhOXhzNnQy" aria-label="Instagram" className="transition-transform duration-300 hover:scale-110">
        <img src="/images/instagram-alt.svg" alt="Instagram" className="w-8 h-8" />
      </Link>
    </div>
  )
}

export default SocialButtons;
