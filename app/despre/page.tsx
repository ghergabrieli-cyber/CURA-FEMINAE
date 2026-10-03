import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const items=[
  ["Medicul centrului","Dr. Marc Anton Cruceanu","Obstetrică-Ginecologie. CURA FEMINAE este construit în jurul practicii lui medicale și al unei relații cu pacienta bazate pe claritate, respect și continuitate."],
  ["Echipa","Un centru care crește etapizat","Marc va fi singurul medic obstetrician-ginecolog. După finanțare și recrutare, echipa va include recepție, specialiști în recuperare și sănătatea planșeului pelvin, personal administrativ și colaboratori pentru servicii conexe."],
  ["Filosofia","Claritate înainte de toate","Pacienta trebuie să știe ce se întâmplă, de ce, care sunt pașii următori și unde poate găsi sprijinul potrivit."],
  ["Continuitatea","De la prevenție la postpartum","Prevenția, preconcepția, sarcina, perioada postpartum și sănătatea femeii sunt privite ca părți ale aceluiași parcurs."],
] as const;

export default function DesprePage(){
 return <main><SiteHeader/>
  <section className="pageHero shortPageHero"><div className="shell pageHeroGrid"><div><p className="kicker">DESPRE</p><h1>CURA FEMINAE, pe scurt și clar.</h1></div><p>Conceptul centrului, medicul, echipa viitoare și modul în care vrem să arate experiența pacientei.</p></div></section>
  <section className="shell moduleGrid twoCols">
   {items.map(([eyebrow,title,text])=><article className="moduleCard" key={eyebrow}><p className="kicker">{eyebrow}</p><h2>{title}</h2><p>{text}</p></article>)}
  </section>
  <SiteFooter/>
 </main>
}
