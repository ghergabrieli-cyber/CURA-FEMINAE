import {SiteFooter,SiteHeader} from "../components/SiteChrome";

const stages=[
 ["01","Consultații","Evaluare și discuții pe parcursul sarcinii."],
 ["02","Ecografie","Investigații integrate firesc în monitorizare."],
 ["03","Continuitate","Pașii următori sunt explicați între vizite."],
 ["04","Întrebări","Timp pentru informație clară și decizii informate."],
 ["05","Postpartum","Control după naștere și orientare pentru recuperare."]
] as const;

export default function Page(){
 return <main><SiteHeader/>
  <section className="pageHero"><div className="shell pageHeroGrid"><div><p className="kicker">SARCINĂ</p><h1>Un parcurs, nu o succesiune de vizite.</h1></div><p>Informația este structurată pe etape, cu loc separat pentru întrebări și pregătirea fiecărei vizite.</p></div></section>
  <section className="shell stageGrid">{stages.map(([nr,title,text])=><article key={nr}><span>{nr}</span><h3>{title}</h3><p>{text}</p></article>)}</section>
  <section className="faqBand"><div className="shell"><p className="kicker">INFORMAȚII PRACTICE</p><div className="faqGrid"><details><summary>Ce informații vor fi publicate înainte de vizită?<b>+</b></summary><p>Pregătirea necesară, documentele utile și informațiile specifice tipului de consultație sau ecografie.</p></details><details><summary>Cum va funcționa programarea?<b>+</b></summary><p>Programarea online și cea asistată vor fi activate odată cu lansarea centrului.</p></details></div></div></section>
  <SiteFooter/>
 </main>
}
