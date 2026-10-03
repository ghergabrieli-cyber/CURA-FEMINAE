import Link from "next/link";
import exterior from "./assets/exterior";
import gynecology from "./assets/gynecology";
import waiting from "./assets/waiting";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const continuum = [
  ["01", "Prevenție", "Îngrijire atentă și controale adaptate fiecărei etape."],
  ["02", "Preconcepție", "Pregătire și evaluare înaintea unei sarcini."],
  ["03", "Sarcină", "Urmărire, ecografie, explicații și continuitate."],
  ["04", "După naștere", "Control postpartum și orientare pentru pașii următori."],
] as const;

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <img src={exterior} alt="Vizualizare conceptuală a centrului CURA FEMINAE" />
        <div className="heroOverlay" />
        <div className="shell heroCopy">
          <p className="kicker">CURA FEMINAE · CONSTANȚA</p>
          <h1>Sănătatea ei,<br />în fiecare etapă.</h1>
          <p className="lead">
            Ginecologie și obstetrică într-un centru construit în jurul continuității,
            explicațiilor clare și unei experiențe medicale calme și respectuoase.
          </p>
          <div className="actions">
            <Link className="button filled" href="/programare">Programare</Link>
            <Link className="button outline" href="/despre">Descoperă Cura Feminae</Link>
          </div>
          <p className="conceptNote">Vizualizare conceptuală. Spațiul final poate diferi.</p>
        </div>
      </section>

      <section className="shell homeIntro">
        <div>
          <p className="kicker">CURA FEMINAE</p>
          <h2>Un parcurs medical coerent, nu doar o consultație.</h2>
        </div>
        <div className="bodyCopy">
          <p>
            Prevenția, sarcina, perioada postpartum și sănătatea femeii de-a lungul vieții
            sunt privite ca părți ale aceluiași parcurs.
          </p>
          <Link className="textLink" href="/despre">Despre centru și echipă →</Link>
        </div>
      </section>

      <section className="continuum">
        <div className="shell">
          <p className="kicker">CONTINUITATEA ÎNGRIJIRII</p>
          <div className="steps">
            {continuum.map(([nr,title,text]) => (
              <article key={nr}><span>{nr}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell feature">
        <figure className="featurePhoto">
          <img src={gynecology} alt="Vizualizare conceptuală a cabinetului ginecologic" />
          <figcaption>Vizualizare conceptuală</figcaption>
        </figure>
        <div className="featureText">
          <p className="kicker">SERVICII</p>
          <h2>Informația de care ai nevoie, într-un loc clar.</h2>
          <p>
            Consultație ginecologică, obstetrică, monitorizarea sarcinii, ecografie,
            prevenție, preconcepție și control postpartum.
          </p>
          <Link className="button filled" href="/servicii">Vezi serviciile</Link>
        </div>
      </section>

      <section className="homeSplit">
        <div className="shell splitGrid">
          <div className="splitCopy">
            <p className="kicker">SARCINĂ</p>
            <h2>Urmărire, explicații și continuitate.</h2>
            <p>
              O pagină dedicată monitorizării sarcinii, consultațiilor, ecografiilor
              și modului în care este gândit parcursul obstetrical.
            </p>
            <Link className="textLink" href="/sarcina">Descoperă parcursul →</Link>
          </div>
          <figure className="splitPhoto"><img src={waiting} alt="Spațiu CURA FEMINAE" /></figure>
        </div>
      </section>

      <section className="shell homeCards">
        <Link href="/despre" className="portalCard"><span>01</span><h3>Despre CURA FEMINAE</h3><p>Concept, medic, echipa viitoare și filosofia centrului.</p><b>Explorează →</b></Link>
        <Link href="/spatiu" className="portalCard"><span>02</span><h3>Spațiul clinicii</h3><p>Cabinet, recepție, zonele pentru paciente și accesibilitate.</p><b>Vezi spațiul →</b></Link>
        <Link href="/programare" className="portalCard"><span>03</span><h3>Prima vizită</h3><p>Programare, pregătire, consultație și pașii următori.</p><b>Află mai mult →</b></Link>
      </section>

      <SiteFooter />
    </main>
  );
}
