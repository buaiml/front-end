import Link from "next/link";

const SocialButtons: React.FC = () => {
  return (
    <div className="flex space-x-4 absolute top-4 right-4">
      <Link href="https://discord.gg/TyubkeGSXj" aria-label="Discord">
        <img src="/images/discord-icon.svg" alt="Discord" className="w-8 h-8" />
      </Link>
      <Link href="https://github.com/buaiml" aria-label="GitHub">
        <img src="/images/github-icon.svg" alt="GitHub" className="w-8 h-8" />
      </Link>
    </div>
  )
}

export default SocialButtons;
