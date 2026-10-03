import {SiteFooter,SiteHeader} from "../components/SiteChrome";

const blocks=[
 ["CONCEPT","Ce este CURA FEMINAE","Un centru pentru sănătatea femeii în care prevenția, sarcina, perioada postpartum și sănătatea de-a lungul vieții sunt privite ca părți ale aceluiași parcurs."],
 ["MEDICUL CENTRULUI","Dr. Marc Anton Cruceanu","Obstetrică-Ginecologie. CURA FEMINAE este construit în jurul practicii lui medicale și al unei relații cu pacienta bazate pe explicații clare, respect, confidențialitate și continuitate."],
 ["ECHIPA","Un centru care crește etapizat","Marc va fi singurul medic obstetrician-ginecolog. După finanțare și recrutare, echipa va include recepție, specialiști în recuperare și sănătatea planșeului pelvin, personal administrativ și colaboratori pentru servicii conexe."],
 ["PRINCIPII","Claritate. Continuitate. Respect.","Pacienta trebuie să știe ce se întâmplă, de ce, care sunt pașii următori și unde poate găsi sprijinul potrivit."]
] as const;

export default function Page(){
 return <main><SiteHeader/>
  <section className="pageHero"><div className="shell pageHeroGrid"><div><p className="kicker">DESPRE CURA FEMINAE</p><h1>Conceptul, medicul și echipa.</h1></div><p>Patru subiecte distincte, fără text turnat într-o singură coloană lungă.</p></div></section>
  <section className="shell structuredGrid">{blocks.map(([eyebrow,title,text],i)=><details className="infoPanel" key={title} open={i===0}><summary><span>{eyebrow}</span><h2>{title}</h2><b>+</b></summary><div className="panelBody"><p>{text}</p></div></details>)}</section>
  <SiteFooter/>
 </main>
}
