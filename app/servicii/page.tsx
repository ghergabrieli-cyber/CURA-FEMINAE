import Link from "next/link";
import gynecology from "../assets/gynecology";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const services = [
  ["Consultație ginecologică", "Evaluare, discuție medicală, examinare și recomandări explicate clar."],
  ["Obstetrică și monitorizarea sarcinii", "Urmărirea sarcinii într-un parcurs coerent, cu continuitate între vizite."],
  ["Ecografie", "Investigații ecografice integrate în evaluarea ginecologică și obstetricală."],
  ["Preconcepție și prevenție", "Pregătire înaintea unei sarcini și îngrijire preventivă adaptată etapei de viață."],
  ["Control postpartum", "Reevaluare după naștere și orientare pentru recuperare și nevoile ulterioare."],
  ["Educație medicală pentru paciente", "Explicații și resurse pentru decizii informate și o mai bună înțelegere a sănătății proprii."],
] as const;

export default function ServiciiPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero">
        <div className="shell pageHeroGrid">
          <div><p className="kicker">SERVICII</p><h1>Îngrijire ginecologică și obstetricală, organizată clar.</h1></div>
          <p>Fiecare serviciu va avea informații proprii despre rolul lui, cum decurge vizita și cum te pregătești.</p>
        </div>
      </section>

      <section className="shell servicesLead">
        <figure className="serviceHeroPhoto"><img src={gynecology} alt="Cabinet ginecologic CURA FEMINAE" /><figcaption>Vizualizare conceptuală</figcaption></figure>
        <div className="serviceIntro"><h2>Serviciile CURA FEMINAE</h2><p>Structura finală și programarea vor fi publicate odată cu lansarea centrului.</p></div>
      </section>

      <section className="shell serviceGrid">
        {services.map(([title,text],i)=>(
          <article className="serviceCard" key={title}>
            <span>0{i+1}</span><h3>{title}</h3><p>{text}</p>
            {title.includes("sarcinii") && <Link className="textLink" href="/sarcina">Pagina dedicată sarcinii →</Link>}
          </article>
        ))}
      </section>

      <section className="pageCta"><div className="shell"><h2>Ai nevoie de informații despre o primă vizită?</h2><Link className="button filled" href="/programare">Programare și prima vizită</Link></div></section>
      <SiteFooter />
    </main>
  );
}
