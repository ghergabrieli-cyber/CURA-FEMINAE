import Link from "next/link";
import counselling from "../assets/counselling";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function DesprePage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero">
        <div className="shell pageHeroGrid">
          <div>
            <p className="kicker">DESPRE CURA FEMINAE</p>
            <h1>Un centru pentru sănătatea femeii construit cu continuitate în minte.</h1>
          </div>
          <p>
            CURA FEMINAE pornește de la ideea că o pacientă ar trebui să înțeleagă ce se întâmplă,
            care sunt pașii următori și unde poate găsi sprijinul potrivit.
          </p>
        </div>
      </section>

      <section className="shell aboutGrid">
        <figure className="aboutPhoto"><img src={counselling} alt="Spațiu conceptual CURA FEMINAE" /></figure>
        <div className="aboutCopy">
          <p className="kicker">MEDICUL CENTRULUI</p>
          <h2>Dr. Marc Anton Cruceanu</h2>
          <p className="roleLight">Obstetrică-Ginecologie</p>
          <p>
            Dr. Marc Anton Cruceanu este medicul ginecolog al CURA FEMINAE. Centrul este construit
            în jurul practicii lui medicale și al unei relații cu pacienta bazate pe explicații clare,
            respect, confidențialitate și continuitate.
          </p>
          <p>
            Profilul profesional complet, formarea și certificările vor fi prezentate aici înaintea
            lansării clinicii.
          </p>
        </div>
      </section>

      <section className="softSection">
        <div className="shell sectionHeading">
          <p className="kicker">ECHIPA</p>
          <h2>Un centru care se construiește etapizat.</h2>
          <p>
            Marc va fi singurul medic obstetrician-ginecolog al centrului. După finanțare,
            autorizare și recrutare, echipa va include recepție și suport pentru paciente,
            specialiști în recuperare și sănătatea planșeului pelvin, personal administrativ
            și de igienă, precum și colaboratori pentru servicii conexe.
          </p>
        </div>
      </section>

      <section className="shell valuesGrid">
        <article><span>01</span><h3>Claritate</h3><p>Informații ușor de înțeles și timp pentru întrebări.</p></article>
        <article><span>02</span><h3>Continuitate</h3><p>Fiecare vizită se leagă firesc de următoarea.</p></article>
        <article><span>03</span><h3>Respect</h3><p>Intimitatea și demnitatea pacientei rămân centrale.</p></article>
        <article><span>04</span><h3>Dezvoltare</h3><p>Serviciile pot crește treptat odată cu centrul.</p></article>
      </section>

      <section className="pageCta"><div className="shell"><h2>Vezi ce servicii va reuni CURA FEMINAE.</h2><Link className="button filled" href="/servicii">Servicii</Link></div></section>
      <SiteFooter />
    </main>
  );
}
