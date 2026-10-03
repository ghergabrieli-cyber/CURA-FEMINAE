import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const services=[
 ["Consultație ginecologică","Evaluare, examinare și recomandări explicate clar."],
 ["Obstetrică","Monitorizarea sarcinii într-un parcurs coerent."],
 ["Ecografie","Investigații ecografice integrate în evaluarea ginecologică și obstetricală."],
 ["Preconcepție","Pregătire și evaluare înaintea unei sarcini."],
 ["Prevenție","Controale și îngrijire preventivă adaptate etapei de viață."],
 ["Postpartum","Reevaluare după naștere și orientare pentru recuperare."],
] as const;

export default function ServiciiPage(){
 return <main><SiteHeader/>
  <section className="pageHero shortPageHero"><div className="shell pageHeroGrid"><div><p className="kicker">SERVICII</p><h1>Servicii organizate pe nevoile pacientei.</h1></div><p>Fără listă interminabilă: fiecare serviciu are propriul card, iar informațiile detaliate vor fi adăugate în pagini individuale pe măsură ce centrul se apropie de lansare.</p></div></section>
  <section className="shell serviceTiles">
   {services.map(([title,text],i)=><article className="serviceTile" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p>{title==="Obstetrică"&&<Link className="textLink" href="/sarcina">Vezi pagina Sarcină →</Link>}</article>)}
  </section>
  <SiteFooter/>
 </main>
}
