import Link from "next/link";
import reception from "../assets/reception";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function ProgramarePage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero">
        <div className="shell pageHeroGrid">
          <div><p className="kicker">PROGRAMARE</p><h1>Tot ce ai nevoie înainte de prima vizită.</h1></div>
          <p>Programările nu sunt încă deschise. Aici vor apărea telefonul, formularul online, adresa și programul centrului.</p>
        </div>
      </section>

      <section className="shell visitPageGrid">
        <figure className="visitPhoto"><img src={reception} alt="Recepție CURA FEMINAE" /><figcaption>Vizualizare conceptuală</figcaption></figure>
        <div className="visitPageCopy">
          <p className="kicker">PRIMA VIZITĂ</p>
          <div className="infoRows">
            <div><b>01 · Programare</b><p>Online sau asistată, după lansarea centrului.</p></div>
            <div><b>02 · Pregătire</b><p>Informații simple despre documente și pregătirea necesară.</p></div>
            <div><b>03 · Consultație</b><p>Discuție, evaluare și explicații într-un cadru discret și respectuos.</p></div>
            <div><b>04 · Continuitate</b><p>Pașii următori și follow-up-ul sunt explicate înainte de încheierea vizitei.</p></div>
          </div>
        </div>
      </section>

      <section className="contactPanel"><div className="shell contactPanelGrid"><div><p className="kicker light">CURA FEMINAE · CONSTANȚA</p><h2>Programările vor fi deschise odată cu lansarea centrului.</h2></div><div><button disabled>Programări — în curând</button><p>Între timp poți explora serviciile planificate și spațiul clinicii.</p><Link className="textLink lightLink" href="/servicii">Vezi serviciile →</Link></div></div></section>
      <SiteFooter />
    </main>
  );
}
