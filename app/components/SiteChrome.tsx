import Link from "next/link";

export function Mark(){
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="mark">
      <path d="M32 54C21 45 17 33 20 20c7 3 12 9 12 19"/>
      <path d="M32 54C43 45 47 33 44 20c-7 3-12 9-12 19"/>
      <path d="M32 54C25 42 25 26 32 10c7 10 8 22 4 33"/>
      <path d="M20 20c6 2 10 6 12 12M44 20c-6 2-10 6-12 12"/>
    </svg>
  );
}

const nav=[["/","Acasă"],["/despre","Despre"],["/servicii","Servicii"],["/sarcina","Sarcină"],["/spatiu","Spațiul clinicii"]] as const;

export function SiteHeader(){
  return <>
    <div className="development"><strong>PROIECT ÎN DEZVOLTARE</strong><span>CURA FEMINAE · Constanța</span></div>
    <header className="header">
      <Link className="brand" href="/" aria-label="CURA FEMINAE — Acasă">
        <Mark/><span><b>CURA FEMINAE</b><small>Centru pentru sănătatea femeii</small></span>
      </Link>
      <nav className="mainNav" aria-label="Navigație principală">
        {nav.map(([href,label])=><Link key={href} href={href}>{label}</Link>)}
        <Link className="navCta" href="/programare">Programare</Link>
      </nav>
      <div className="lang"><b>RO</b><span>EN</span></div>
    </header>
  </>
}

export function SiteFooter(){
  return <footer>
    <div className="shell footerGrid">
      <div className="brand footerBrand"><Mark/><span><b>CURA FEMINAE</b><small>Centru pentru sănătatea femeii</small></span></div>
      <div className="footerLinks"><Link href="/despre">Despre</Link><Link href="/servicii">Servicii</Link><Link href="/sarcina">Sarcină</Link><Link href="/spatiu">Spațiul clinicii</Link><Link href="/programare">Programare</Link></div>
      <p>© 2026 CURA FEMINAE</p>
    </div>
  </footer>
}
