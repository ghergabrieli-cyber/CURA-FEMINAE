import Link from "next/link";

export function Mark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="mark">
      <path d="M32 53C22 45 16 35 18 22c8 3 14 9 14 18 0-12 6-23 16-30 3 15-1 28-16 43Z" />
      <path d="M31 52C25 42 25 31 28 20" />
      <path d="M33 52c3-10 9-18 18-24" />
    </svg>
  );
}

const nav = [
  ["/", "Acasă"],
  ["/despre", "Despre"],
  ["/servicii", "Servicii"],
  ["/sarcina", "Sarcină"],
  ["/spatiu", "Spațiul clinicii"],
] as const;

export function SiteHeader() {
  return (
    <>
      <div className="development">
        <strong>PROIECT ÎN DEZVOLTARE</strong>
        <span>CURA FEMINAE · Constanța</span>
      </div>
      <header className="header">
        <Link className="brand" href="/" aria-label="CURA FEMINAE — Acasă">
          <Mark />
          <span>
            <b>CURA FEMINAE</b>
            <small>Centru pentru sănătatea femeii</small>
          </span>
        </Link>
        <nav className="mainNav" aria-label="Navigație principală">
          {nav.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
          <Link className="navCta" href="/programare">Programare</Link>
        </nav>
        <div className="lang"><b>RO</b><span>EN</span></div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <div className="shell footerGrid">
        <div className="brand footerBrand">
          <Mark />
          <span><b>CURA FEMINAE</b><small>Centru pentru sănătatea femeii</small></span>
        </div>
        <div className="footerLinks">
          <Link href="/despre">Despre</Link>
          <Link href="/servicii">Servicii</Link>
          <Link href="/spatiu">Spațiul clinicii</Link>
          <Link href="/programare">Programare</Link>
        </div>
        <p>© 2026 CURA FEMINAE</p>
      </div>
    </footer>
  );
}
