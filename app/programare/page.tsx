import {SiteFooter,SiteHeader} from "../components/SiteChrome";

const steps=[
 ["01","Programare","Online sau asistată, după lansarea centrului."],
 ["02","Pregătire","Documentele și pregătirea necesară, explicate simplu."],
 ["03","Consultație","Discuție, evaluare și explicații într-un cadru discret."],
 ["04","Continuitate","Pașii următori și follow-up-ul, explicate înainte de plecare."]
] as const;

export default function Page(){
 return <main><SiteHeader/>
  <section className="pageHero"><div className="shell pageHeroGrid"><div><p className="kicker">PRIMA VIZITĂ</p><h1>Patru pași. Fără necunoscute inutile.</h1></div><p>Programările nu sunt încă deschise. Telefonul, formularul, adresa și programul vor apărea aici.</p></div></section>
  <section className="shell visitGrid">{steps.map(([nr,title,text])=><article key={nr}><span>{nr}</span><h3>{title}</h3><p>{text}</p></article>)}</section>
  <section className="bookingBand"><div className="shell bookingBandInner"><div><p className="kicker">CURA FEMINAE · CONSTANȚA</p><h2>Programările vor fi deschise odată cu lansarea centrului.</h2></div><button disabled>Programări — în curând</button></div></section>
  <SiteFooter/>
 </main>
}
