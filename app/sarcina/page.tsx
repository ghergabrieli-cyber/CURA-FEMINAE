import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const stages=[
 ["Consultații","Evaluare și discuții pe parcursul sarcinii."],
 ["Ecografie","Investigații integrate firesc în monitorizare."],
 ["Continuitate","Pașii următori sunt explicați între vizite."],
 ["Întrebări","Timp pentru informație clară și decizii informate."],
 ["Postpartum","Control după naștere și orientare pentru recuperare."],
] as const;

export default function SarcinaPage(){
 return <main><SiteHeader/>
  <section className="pageHero shortPageHero"><div className="shell pageHeroGrid"><div><p className="kicker">SARCINĂ</p><h1>Urmărire, explicații și continuitate.</h1></div><p>Monitorizarea sarcinii este gândită ca un parcurs coerent, nu ca o succesiune de vizite fără legătură între ele.</p></div></section>
  <section className="shell stageStrip">{stages.map(([title,text],i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3><p>{text}</p></article>)}</section>
  <section className="softBand"><div className="shell bandGrid"><div><p className="kicker">INFORMAȚII PRACTICE</p><h2>Tot ce trebuie să știi înainte de o vizită.</h2></div><p>Programul, pregătirea pentru consultații și ecografii și informațiile utile pentru fiecare etapă vor fi publicate aici înainte de lansare.</p></div></section>
  <SiteFooter/>
 </main>
}
