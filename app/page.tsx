import Link from "next/link";
import exterior from "./assets/exterior";
import gynecology from "./assets/gynecology";
import {SiteFooter,SiteHeader} from "./components/SiteChrome";

const sections=[
  ["/despre","01","Despre","Conceptul centrului, Dr. Marc Anton Cruceanu și echipa care va fi construită etapizat."],
  ["/servicii","02","Servicii","Ginecologie, obstetrică, ecografie, prevenție, preconcepție și postpartum."],
  ["/sarcina","03","Sarcină","Monitorizare, ecografii, continuitate și informații pentru fiecare etapă."],
  ["/spatiu","04","Spațiul clinicii","Exterior, recepție, cabinet, hol, spații pentru paciente și accesibilitate."]
] as const;

export default function Home(){
  return <main><SiteHeader/>
    <section className="heroSplit">
      <div className="shell heroSplitGrid">
        <div className="heroText">
          <p className="kicker">CURA FEMINAE · CONSTANȚA</p>
          <h1>Sănătatea ei,<br/>în fiecare etapă.</h1>
          <p className="lead">Ginecologie și obstetrică într-un centru construit în jurul continuității, explicațiilor clare și respectului pentru pacientă.</p>
          <div className="actions"><Link className="button filled" href="/programare">Programare</Link><Link className="button outline" href="/despre">Descoperă centrul</Link></div>
        </div>
        <figure className="heroImage">
          <img src={exterior} alt="Vizualizare conceptuală CURA FEMINAE"/>
          <figcaption>Vizualizare conceptuală</figcaption>
        </figure>
      </div>
    </section>

    <section className="shell hub">
      <div className="hubHeading"><p className="kicker">EXPLOREAZĂ</p><h2>Informația este împărțită clar, pe pagini.</h2></div>
      <div className="hubGrid">{sections.map(([href,nr,title,text])=><Link className="hubCard" href={href} key={href}><span>{nr}</span><div><h3>{title}</h3><p>{text}</p></div><b>→</b></Link>)}</div>
    </section>

    <section className="featureBand">
      <div className="shell featureBandGrid">
        <div><p className="kicker">CABINETUL</p><h2>Un spațiu medical calm, luminos și discret.</h2><p>Vizualizările centrului au propria galerie, fără să transforme homepage-ul într-o pagină interminabilă.</p><Link className="textLink" href="/spatiu">Vezi spațiul clinicii →</Link></div>
        <figure><img src={gynecology} alt="Cabinet ginecologic CURA FEMINAE"/><figcaption>Vizualizare conceptuală</figcaption></figure>
      </div>
    </section>
    <SiteFooter/>
  </main>
}
