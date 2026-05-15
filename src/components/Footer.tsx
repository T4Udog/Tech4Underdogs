import Image from "next/image";
import Link from "next/link";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function ThreadsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068c0-3.51.85-6.37 2.495-8.424C5.844 1.212 8.598.027 12.18 0h.014c2.746.018 5.143.8 7.122 2.317 1.875 1.445 3.202 3.494 3.946 6.09l-2.898.817c-.568-2.017-1.573-3.623-2.99-4.769-1.477-1.196-3.342-1.822-5.54-1.836h-.01c-2.74.017-4.926.893-6.496 2.605C3.748 6.86 2.998 9.284 2.998 12.068c0 2.795.75 5.219 2.33 7.007 1.57 1.713 3.755 2.585 6.495 2.605h.007c2.407-.016 4.19-.65 5.6-1.956 1.576-1.458 2.385-3.567 2.405-6.256h-8.234v-2.5h11.22c-.012 3.857-1.187 6.862-3.39 8.876-1.886 1.737-4.34 2.624-7.265 2.624z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
    </svg>
  );
}

const socials = [
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: ThreadsIcon, label: "Threads" },
  { Icon: TwitterIcon, label: "Twitter / X" },
  { Icon: YouTubeIcon, label: "YouTube" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "IT Support & Security", href: "/services/it-support" },
  { label: "Web Design & Hosting", href: "/services/web-design" },
  { label: "Online Marketing", href: "/services/marketing" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-eurostile text-navy text-[0.8rem] uppercase tracking-[0.18em] mb-5">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="font-exo font-medium text-navy/65 text-[0.9rem] hover:text-orange transition-colors flex items-center gap-2.5 leading-snug cursor-pointer"
            >
              <span className="text-orange text-[8px]" aria-hidden="true">■</span>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-navy/10">
      <div className="section-container pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 items-start">

          {/* Brand column */}
          <div>
            <Image
              src="/images/Tech-4-Underdogs-logo.png"
              alt="Tech 4 Underdogs"
              width={180}
              height={58}
              className="h-auto w-40 mb-4"
            />
            <p className="font-exo font-medium text-navy/70 text-[0.9rem] leading-[1.7] max-w-[320px] mb-6">
              Reliable, affordable IT, websites, and online marketing — built
              for the small businesses doing serious work.
            </p>

            <div className="flex gap-2">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded border border-navy/20 flex items-center justify-center text-navy/50 hover:text-orange hover:border-orange transition-colors cursor-pointer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Navigate" links={navLinks} />
          <FooterColumn title="Services" links={serviceLinks} />

          {/* Contact column */}
          <div>
            <h3 className="font-eurostile text-navy text-[0.8rem] uppercase tracking-[0.18em] mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+15555550199"
                  className="font-exo font-medium text-navy/65 text-[0.9rem] hover:text-orange transition-colors flex items-center gap-3 leading-snug cursor-pointer"
                >
                  <span className="text-orange flex-shrink-0" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  (555) 555-0199
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@tech4underdogs.com"
                  className="font-exo font-medium text-navy/65 text-[0.9rem] hover:text-orange transition-colors flex items-center gap-3 leading-snug cursor-pointer break-all"
                >
                  <span className="text-orange flex-shrink-0" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  contact@tech4underdogs.com
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="font-exo font-extrabold text-orange text-xs tracking-[0.18em] uppercase mt-2 inline-flex items-center gap-2 hover:text-navy transition-colors cursor-pointer"
                >
                  Send us a message <span aria-hidden="true">→</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-navy/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-exo font-medium text-navy/55 text-[0.8rem] tracking-wide uppercase">
            Tech 4 Underdogs © {new Date().getFullYear()} · All rights reserved
          </p>
          <p className="font-exo font-medium text-navy/40 text-[0.75rem] tracking-wide uppercase">
            Built for the underdogs.
          </p>
        </div>
      </div>
    </footer>
  );
}
