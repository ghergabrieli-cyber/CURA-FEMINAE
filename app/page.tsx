import exterior from "./assets/exterior";
import reception from "./assets/reception";
import waiting from "./assets/waiting";
import gynecology from "./assets/gynecology";
import counselling from "./assets/counselling";
import restroom from "./assets/restroom";
import hallway from "./assets/hallway";

const continuum = [
  ["01", "Prevenție", "Consultații, educație și orientare medicală adaptate etapei de viață."],
  ["02", "Preconcepție", "Pregătire și evaluare înaintea unei sarcini, în limitele competențelor medicale."],
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
  "Colaboratori pentru servicii conexe, după contractare",
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
        <span>Serviciile, echipa și programările vor fi publicate după autorizare și deschidere.</span>
      </div>

      <header className="header">
        <a className="brand" href="#acasa" aria-label="CURA FEMINAE — Acasă">
          <Mark />
          <span>
            <b>CURA FEMINAE</b>
            <small>Centru pentru sănătatea femeii</small>
          </span>
        </a>
        <nav>
          <a href="#concept">Cura Feminae</a>
          <a href="#servicii">Servicii</a>
          <a href="#marc">Marc Anton Cruceanu</a>
          <a href="#spatiu">Spațiul</a>
          <a href="#contact">Programare</a>
        </nav>
        <div className="lang"><b>RO</b><span>EN</span></div>
      </header>

      <section className="hero" id="acasa">
        <img src={exterior} alt="Vizualizare conceptuală a centrului CURA FEMINAE" />
        <div className="heroOverlay" />
        <div className="shell heroCopy">
          <p className="kicker light">CURA FEMINAE · CONSTANȚA</p>
          <h1>Sănătatea ei,<br />în fiecare etapă.</h1>
          <p className="lead">
            Un proiect medical construit în jurul continuității îngrijirii,
            informației clare și unei experiențe respectuoase pentru pacientă.
          </p>
          <div className="actions">
            <a className="button filled" href="#contact">Programare</a>
            <a className="button outline" href="#concept">Descoperă proiectul</a>
          </div>
          <p className="conceptNote">Vizualizare conceptuală. Spațiul final poate diferi.</p>
        </div>
      </section>

      <section className="shell intro" id="concept">
        <div>
          <p className="kicker">O ABORDARE ÎN CONTINUITATE</p>
          <h2>Nu doar o consultație.<br />Un parcurs medical coerent.</h2>
        </div>
        <div className="bodyCopy">
          <p>
            CURA FEMINAE este gândit ca un centru pentru sănătatea femeii în care
            prevenția, sarcina, perioada postpartum și nevoile medicale din
            diferite etape ale vieții sunt privite într-o logică de continuitate.
          </p>
          <p>
            Proiectul este în dezvoltare. Fiecare serviciu va fi publicat numai
            după confirmarea cadrului profesional, a autorizărilor și a resurselor necesare.
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
          <p className="kicker">DIRECȚII MEDICALE PLANIFICATE</p>
          <h2>Servicii construite în jurul pacientei.</h2>
          <p>
            Lista finală va fi publicată la deschidere, după confirmarea exactă
            a competențelor, echipamentelor, autorizațiilor și fluxurilor medicale.
          </p>
          <ul>
            {services.map((service) => <li key={service}>{service}</li>)}
          </ul>
        </div>
      </section>

      <section className="doctor" id="marc">
        <div className="shell doctorGrid">
          <div>
            <p className="kicker light">NUCLEUL MEDICAL AL PROIECTULUI</p>
            <h2>Marc Anton Cruceanu</h2>
            <p className="role">Obstetrică-Ginecologie</p>
          </div>
          <div className="doctorText">
            <p>
              CURA FEMINAE este conceput ca o practică în care Marc Anton Cruceanu
              va fi singurul medic obstetrician-ginecolog al centrului.
            </p>
            <p>
              Profilul profesional complet — formare, statut profesional,
              competențe și certificări — va fi publicat pe baza documentelor
              actualizate înainte de lansarea serviciilor.
            </p>
          </div>
        </div>
      </section>

      <section className="shell team">
        <div className="sectionHeading">
          <p className="kicker">STRUCTURA PLANIFICATĂ</p>
          <h2>O echipă care se construiește etapizat.</h2>
          <p>
            În prezent, CURA FEMINAE nu are angajați sau colaboratori oficiali.
            Rolurile de mai jos reprezintă structura planificată după finanțare,
            autorizare și recrutare.
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
            <div><b>Pregătire</b><p>Informații clare despre documente și pregătirea necesară.</p></div>
            <div><b>Consultație</b><p>Discuție, evaluare și explicații, cu accent pe consimțământ și confidențialitate.</p></div>
            <div><b>Continuitate</b><p>Pașii următori și follow-up-ul sunt explicate înainte de încheierea vizitei.</p></div>
          </div>
        </div>
      </section>

      <section className="shell accessibility">
        <div className="accessCard">
          <div>
            <p className="kicker">ACCESIBILITATE</p>
            <h2>Accesul nu este un detaliu de design.</h2>
          </div>
          <p>
            Proiectarea spațiului urmărește circulație clară, intimitate,
            soluții pentru mobilitate redusă și opțiuni de comunicare accesibile.
            Specificațiile finale vor fi publicate după amenajarea spațiului real.
          </p>
        </div>
      </section>

      <section className="gallery" id="spatiu">
        <div className="shell">
          <div className="sectionHeading">
            <p className="kicker">SPAȚIUL CURA FEMINAE</p>
            <h2>Clinic, calm și discret.</h2>
            <p>
              Imaginile sunt vizualizări conceptuale ale proiectului și nu
              reprezintă fotografii ale unui centru deja deschis.
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
          <p className="kicker">DEZVOLTARE ȘI COLABORĂRI</p>
          <h2>Un centru pregătit să crească responsabil.</h2>
          <p>
            Digitalizarea, colaborările cu specialiști, recuperarea postpartum
            și eventuale proiecte de cercetare sau FemTech pot fi dezvoltate
            etapizat. Nicio colaborare și nicio capacitate nu este prezentată
            ca existentă înainte de a fi contractată și autorizată.
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
              Adresa, programul, telefonul și formularul de programare vor fi
              publicate după stabilirea spațiului și finalizarea autorizărilor.
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
