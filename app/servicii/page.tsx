import Link from "next/link";
import {SiteFooter,SiteHeader} from "../components/SiteChrome";

const services=[
 ["Consultație ginecologică","Evaluare, examinare și recomandări explicate clar."],
 ["Obstetrică","Monitorizarea sarcinii într-un parcurs coerent, cu continuitate între vizite."],
 ["Ecografie","Investigații ecografice integrate în evaluarea ginecologică și obstetricală."],
 ["Preconcepție","Pregătire și evaluare înaintea unei sarcini."],
 ["Prevenție","Controale și îngrijire preventivă adaptate etapei de viață."],
 ["Postpartum","Reevaluare după naștere și orientare pentru recuperare."]
] as const;

export default function Page(){
 return <main><SiteHeader/>
  <section className="pageHero"><div className="shell pageHeroGrid"><div><p className="kicker">SERVICII</p><h1>Un serviciu, o informație clară.</h1></div><p>Serviciile sunt grupate în module. Detaliile se deschid numai când vrei să le citești.</p></div></section>
  <section className="shell serviceGrid">{services.map(([title,text],i)=><details className="serviceModule" key={title}><summary><span>0{i+1}</span><h3>{title}</h3><b>+</b></summary><div><p>{text}</p>{title==="Obstetrică"&&<Link className="textLink" href="/sarcina">Pagina dedicată sarcinii →</Link>}</div></details>)}</section>
  <SiteFooter/>
 </main>
}
