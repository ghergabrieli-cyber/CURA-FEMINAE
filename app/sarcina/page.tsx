import Link from "next/link";
import waiting from "../assets/waiting";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function SarcinaPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero pregnancyHero">
        <div className="shell pageHeroGrid">
          <div><p className="kicker">SARCINĂ</p><h1>Urmărire, explicații și continuitate.</h1></div>
          <p>Monitorizarea sarcinii este gândită ca un parcurs, nu ca o succesiune de vizite fără legătură între ele.</p>
        </div>
      </section>

      <section className="shell pregnancyPageGrid">
        <div className="pregnancyPageCopy">
          <p className="kicker">PARCURSUL OBSTETRICAL</p>
          <h2>Ce găsești aici</h2>
          <div className="infoRows">
            <div><b>Consultații</b><p>Evaluarea și discuțiile necesare pe parcursul sarcinii.</p></div>
            <div><b>Ecografie</b><p>Investigații integrate firesc în monitorizarea sarcinii.</p></div>
            <div><b>Continuitate</b><p>Pașii următori sunt explicați clar între vizite.</p></div>
            <div><b>Întrebări</b><p>Loc pentru nelămuriri și informație ușor de înțeles.</p></div>
            <div><b>După naștere</b><p>Control postpartum și orientare către recuperare atunci când este nevoie.</p></div>
          </div>
        </div>
        <figure className="pregnancyPagePhoto"><img src={waiting} alt="Spațiu CURA FEMINAE" /><figcaption>Vizualizare conceptuală</figcaption></figure>
      </section>

      <section className="softSection"><div className="shell sectionHeading"><p className="kicker">ÎNAINTE DE VIZITĂ</p><h2>Informația practică va avea locul ei.</h2><p>Pe această pagină vor fi adăugate programul, pregătirea pentru consultații și ecografii și informațiile utile pentru fiecare etapă a sarcinii.</p></div></section>
      <section className="pageCta"><div className="shell"><h2>Programările vor fi deschise odată cu lansarea centrului.</h2><Link className="button filled" href="/programare">Vezi programarea</Link></div></section>
      <SiteFooter />
    </main>
  );
}
