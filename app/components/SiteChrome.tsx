import Link from "next/link";

export function Mark(){
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="mark">
      <path d="M32 55C30 44 29 27 32 11C38 18 42 27 42 36C42 45 38 51 32 55Z"/>
      <path d="M31 55C21 51 15 41 15 27C22 27 28 31 32 37"/>
      <path d="M33 55C43 51 49 41 49 27C42 27 36 31 32 37"/>
      <path d="M23 31C22 40 25 48 32 55"/>
      <path d="M41 31C42 40 39 48 32 55"/>
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
