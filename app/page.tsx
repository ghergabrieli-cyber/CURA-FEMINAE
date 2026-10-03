import Link from "next/link";
import exterior from "./assets/exterior";
import gynecology from "./assets/gynecology";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const portals = [
  ["/despre","Despre centru","Concept, medic și echipa care va crește odată cu proiectul."],
  ["/servicii","Servicii","Ginecologie, obstetrică, ecografie, prevenție și postpartum."],
  ["/sarcina","Sarcină","Parcurs obstetrical, consultații, ecografii și continuitate."],
  ["/spatiu","Spațiul clinicii","Vizualizările aprobate ale centrului și accesibilitatea."],
] as const;

export default function Home(){
  return <main>
    <SiteHeader/>
    <section className="hero compactHero">
      <img src={exterior} alt="Vizualizare conceptuală CURA FEMINAE"/>
      <div className="heroOverlay"/>
      <div className="shell heroCopy">
        <p className="kicker">CURA FEMINAE · CONSTANȚA</p>
        <h1>Sănătatea ei,<br/>în fiecare etapă.</h1>
        <p className="lead">Ginecologie și obstetrică într-un centru construit în jurul continuității, explicațiilor clare și respectului pentru pacientă.</p>
        <div className="actions"><Link className="button filled" href="/programare">Programare</Link><Link className="button outline" href="/despre">Despre centru</Link></div>
      </div>
    </section>

    <section className="shell portalGrid">
      {portals.map(([href,title,text],i)=><Link href={href} className="portalCard" key={href}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p><b>Deschide pagina →</b></Link>)}
    </section>

    <section className="homeFeature">
      <div className="shell homeFeatureGrid">
        <div className="homeFeatureCopy">
          <p className="kicker">CURA FEMINAE</p>
          <h2>Un centru medical, nu un labirint de informații.</h2>
          <p>Fiecare subiect important are propria pagină. Homepage-ul rămâne doar punctul de orientare.</p>
          <div className="miniLinks"><Link href="/servicii">Servicii →</Link><Link href="/sarcina">Sarcină →</Link><Link href="/programare">Prima vizită →</Link></div>
        </div>
        <figure className="homeFeaturePhoto"><img src={gynecology} alt="Cabinet ginecologic CURA FEMINAE"/><figcaption>Vizualizare conceptuală</figcaption></figure>
      </div>
    </section>
    <SiteFooter/>
  </main>
}
