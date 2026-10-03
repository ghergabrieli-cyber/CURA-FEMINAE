import exterior from "./assets/exterior";
import reception from "./assets/reception";
import waiting from "./assets/waiting";
import gynecology from "./assets/gynecology";
import counselling from "./assets/counselling";
import restroom from "./assets/restroom";
import hallway from "./assets/hallway";

const continuum = [
  ["01", "Prevenție", "Consultații, educație și orientare medicală adaptate etapei de viață."],
  ["02", "Preconcepție", "Pregătire și evaluare înaintea unei sarcini."],
  ["03", "Sarcină", "Urmărire structurată, informație clară și continuitate între vizite."],
  ["04", "După naștere", "Control postpartum și orientare către servicii conexe atunci când sunt indicate."],
  ["05", "De-a lungul vieții", "Sănătatea femeii privită dincolo de un singur episod medical."],
] as const;

const services = [
  "Consultație ginecologică",
  "Obstetrică și monitorizarea sarcinii",
  "Ecografie",
  "Preconcepție și prevenție",
  "Control postpartum",
  "Educație medicală pentru paciente",
] as const;

const plannedTeam = [
  "Recepție și suport pentru paciente",
  "Specialiști în recuperare și sănătatea planșeului pelvin",
  "Colaboratori pentru servicii conexe",
  "Personal administrativ și de igienă",
] as const;

const gallery = [
  [reception, "Recepție"],
  [waiting, "Zonă de așteptare"],
  [gynecology, "Cabinet ginecologic"],
  [hallway, "Holul centrului"],
  [counselling, "Spațiu pentru discuții și educație"],
  [restroom, "Grup sanitar accesibil"],
] as const;

function Mark() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="mark">
      <path d="M32 53C22 45 16 35 18 22c8 3 14 9 14 18 0-12 6-23 16-30 3 15-1 28-16 43Z" />
      <path d="M31 52C25 42 25 31 28 20" />
      <path d="M33 52c3-10 9-18 18-24" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <div className="development">
        <strong>PROIECT ÎN DEZVOLTARE</strong>
        <span>CURA FEMINAE · Constanța</span>
      </div>

      <header className="header">
        <a className="brand" href="#acasa" aria-label="CURA FEMINAE — Acasă">
          <Mark />
          <span>
            <b>CURA FEMINAE</b>
            <small>Centru pentru sănătatea femeii</small>
          </span>
        </a>

        <nav className="mainNav" aria-label="Navigație principală">
          <a href="#acasa">Acasă</a>
          <a href="#concept">Cura Feminae</a>
          <a href="#servicii">Servicii</a>
          <a href="#sarcina">Sarcină</a>
          <a href="#marc">Dr. Marc</a>
          <a href="#spatiu">Spațiul clinicii</a>
          <a className="navCta" href="#contact">Programare</a>
        </nav>

        <div className="lang"><b>RO</b><span>EN</span></div>
      </header>

      <section className="hero" id="acasa">
        <img src={exterior} alt="Vizualizare conceptuală a centrului CURA FEMINAE" />
        <div className="heroOverlay" />
        <div className="shell heroCopy">
          <p className="kicker">CURA FEMINAE · CONSTANȚA</p>
          <h1>Sănătatea ei,<br />în fiecare etapă.</h1>
          <p className="lead">
            Un centru pentru sănătatea femeii construit în jurul continuității,
            informației clare și unei experiențe medicale calme, atente și respectuoase.
          </p>
          <div className="actions">
            <a className="button filled" href="#contact">Programare</a>
            <a className="button outline" href="#concept">Descoperă Cura Feminae</a>
          </div>
          <p className="conceptNote">Vizualizare conceptuală. Spațiul final poate diferi.</p>
        </div>
      </section>

      <section className="shell intro" id="concept">
        <div>
          <p className="kicker">CURA FEMINAE</p>
          <h2>Nu doar o consultație.<br />Un parcurs medical coerent.</h2>
        </div>
        <div className="bodyCopy">
          <p>
            CURA FEMINAE este gândit ca un centru în care prevenția, sarcina,
            perioada postpartum și sănătatea femeii de-a lungul vieții sunt privite
            într-o logică de continuitate.
          </p>
          <p>
            Proiectul pornește de la o idee simplă: pacienta trebuie să înțeleagă
            ce se întâmplă, care sunt pașii următori și unde poate găsi sprijinul
            potrivit atunci când are nevoie de el.
          </p>
        </div>
      </section>

      <section className="continuum">
        <div className="shell">
          <p className="kicker">CURA FEMINAE CONTINUUM</p>
          <div className="steps">
            {continuum.map(([nr, title, text]) => (
              <article key={nr}>
                <span>{nr}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell feature" id="servicii">
        <figure className="featurePhoto">
          <img src={gynecology} alt="Vizualizare conceptuală a cabinetului ginecologic CURA FEMINAE" />
          <figcaption>Vizualizare conceptuală</figcaption>
        </figure>
        <div className="featureText">
          <p className="kicker">SERVICII</p>
          <h2>Îngrijire clară, într-un singur parcurs.</h2>
          <p>
            CURA FEMINAE va reuni servicii de ginecologie, obstetrică, ecografie,
            prevenție și urmărire postpartum, cu informații ușor de înțeles pentru pacientă.
          </p>
          <ul>
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
      </section>

      <section className="pregnancy" id="sarcina">
        <div className="shell pregnancyGrid">
          <div className="pregnancyText">
            <p className="kicker">SARCINĂ</p>
            <h2>Urmărire, explicații și continuitate.</h2>
            <p>
              Monitorizarea sarcinii este gândită ca un parcurs, nu ca o succesiune
              de vizite fără legătură între ele. Consultațiile, ecografiile și pașii
              următori sunt explicate clar, cu loc pentru întrebări și decizii informate.
            </p>
            <a className="textLink" href="#contact">Programări — în curând →</a>
          </div>
          <figure className="pregnancyPhoto">
            <img src={waiting} alt="Vizualizare conceptuală CURA FEMINAE" />
            <figcaption>Vizualizare conceptuală</figcaption>
          </figure>
        </div>
      </section>

      <section className="doctor" id="marc">
        <div className="shell doctorGrid">
          <div>
            <p className="kicker light">DR. MARC ANTON CRUCEANU</p>
            <h2>Practica medicală din centrul CURA FEMINAE.</h2>
            <p className="role">Obstetrică-Ginecologie</p>
          </div>
          <div className="doctorText">
            <p>
              Dr. Marc Anton Cruceanu este medicul ginecolog al clinicii CURA FEMINAE.
              Centrul este construit în jurul practicii lui medicale și al unei relații
              cu pacienta bazate pe explicații clare, respect și continuitate.
            </p>
            <p>
              Profilul profesional complet, formarea și certificările vor fi prezentate
              în pagina dedicată înainte de lansarea clinicii.
            </p>
          </div>
        </div>
      </section>

      <section className="shell team">
        <div className="sectionHeading">
          <p className="kicker">ECHIPA CURA FEMINAE</p>
          <h2>Un centru care se construiește etapizat.</h2>
          <p>
            Marc va fi singurul medic obstetrician-ginecolog al centrului. După finanțare,
            autorizare și recrutare, CURA FEMINAE va include și personal de recepție,
            specialiști în recuperare și alți colaboratori relevanți pentru îngrijirea pacientei.
          </p>
        </div>
        <div className="roles">
          {plannedTeam.map((role, i) => (
            <article key={role}>
              <span>0{i + 1}</span>
              <p>{role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visit">
        <div className="shell visitGrid">
          <div>
            <p className="kicker">PRIMA VIZITĂ</p>
            <h2>Claritate înainte să intri în cabinet.</h2>
          </div>
          <div className="visitList">
            <div><b>Programare</b><p>Online sau asistată, după lansarea centrului.</p></div>
            <div><b>Pregătire</b><p>Informații simple despre documente și pregătirea necesară.</p></div>
            <div><b>Consultație</b><p>Discuție, evaluare și explicații într-un cadru discret și respectuos.</p></div>
            <div><b>Continuitate</b><p>Pașii următori și follow-up-ul sunt explicate înainte de încheierea vizitei.</p></div>
          </div>
        </div>
      </section>

      <section className="shell accessibility">
        <div className="accessCard">
          <div>
            <p className="kicker">ACCESIBILITATE</p>
            <h2>Accesul face parte din experiența medicală.</h2>
          </div>
          <p>
            Spațiul este proiectat cu circulație clară, intimitate și soluții pentru
            mobilitate redusă. Detaliile finale de accesibilitate vor fi publicate
            după amenajarea spațiului real.
          </p>
        </div>
      </section>

      <section className="gallery" id="spatiu">
        <div className="shell">
          <div className="sectionHeading">
            <p className="kicker">SPAȚIUL CLINICII</p>
            <h2>Clinic, calm și discret.</h2>
            <p>
              Imaginile sunt vizualizări conceptuale ale proiectului CURA FEMINAE.
            </p>
          </div>
          <div className="galleryGrid">
            {gallery.map(([src, label], i) => (
              <figure key={label} className={i === 2 || i === 3 ? "wide" : ""}>
                <img src={src} alt={label} />
                <figcaption>{label} · vizualizare conceptuală</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="shell innovation">
        <div className="sectionHeading">
          <p className="kicker">DEZVOLTARE</p>
          <h2>Un centru pregătit să crească.</h2>
          <p>
            Pe măsură ce proiectul se dezvoltă, CURA FEMINAE poate integra recuperare
            postpartum, servicii conexe, instrumente digitale și colaborări medicale
            sau academice relevante.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contactGrid">
          <div>
            <p className="kicker light">CURA FEMINAE · CONSTANȚA</p>
            <h2>Programările vor fi deschise odată cu lansarea centrului.</h2>
          </div>
          <div>
            <p>
              Adresa, programul, telefonul și formularul de programare vor apărea aici
              imediat ce spațiul și data deschiderii sunt stabilite.
            </p>
            <button disabled>Programări — în curând</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerGrid">
          <div className="brand footerBrand"><Mark /><span><b>CURA FEMINAE</b><small>Centru pentru sănătatea femeii</small></span></div>
          <p>Proiect medical în dezvoltare · Constanța</p>
          <p>© 2026 CURA FEMINAE</p>
        </div>
      </footer>
    </main>
  );
}
