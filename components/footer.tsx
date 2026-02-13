import Link from "next/link"

const footerLinks = {
  Products: [
    { label: "RoomScan AI", href: "/products#roomscan" },
    { label: "VitalsGuard", href: "/products#vitalsguard" },
    { label: "Smart Rounds", href: "/products#smartrounds" },
    { label: "AssistBot", href: "/products#assistbot" },
  ],
  Solutions: [
    { label: "Fall Prevention", href: "/solutions#fall-prevention" },
    { label: "ICU Support", href: "/solutions#icu" },
    { label: "Post-Op Monitoring", href: "/solutions#post-op" },
    { label: "Infection Control", href: "/solutions#infection" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Security", href: "/security" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Request Demo", href: "/demo" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-primary"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg font-semibold text-foreground">
                Aurora <span className="text-primary">MedRobotics</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Robots + AI that watch over every room. Built for clinical reliability.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-sm font-semibold text-foreground">
                {category}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            {"© 2026 Aurora MedRobotics. All rights reserved."}
          </p>
          <div className="flex items-center gap-4">
            {["LinkedIn", "X", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-primary"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
