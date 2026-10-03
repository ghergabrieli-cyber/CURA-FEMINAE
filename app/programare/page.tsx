import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const steps=[
 ["01","Programare","Online sau asistată, după lansarea centrului."],
 ["02","Pregătire","Documentele și pregătirea necesară, explicate simplu."],
 ["03","Consultație","Discuție, evaluare și explicații într-un cadru discret."],
 ["04","Continuitate","Pașii următori și follow-up-ul, explicate înainte de plecare."],
] as const;

export default function ProgramarePage(){
 return <main><SiteHeader/>
  <section className="pageHero shortPageHero"><div className="shell pageHeroGrid"><div><p className="kicker">PROGRAMARE</p><h1>Prima vizită, fără necunoscute inutile.</h1></div><p>Programările nu sunt încă deschise. Telefonul, formularul online, adresa și programul centrului vor apărea aici.</p></div></section>
  <section className="shell stageStrip four">{steps.map(([nr,title,text])=><article key={nr}><span>{nr}</span><h3>{title}</h3><p>{text}</p></article>)}</section>
  <section className="bookingStatus"><div className="shell"><p className="kicker light">CURA FEMINAE · CONSTANȚA</p><h2>Programările vor fi deschise odată cu lansarea centrului.</h2><button disabled>Programări — în curând</button></div></section>
  <SiteFooter/>
 </main>
}
