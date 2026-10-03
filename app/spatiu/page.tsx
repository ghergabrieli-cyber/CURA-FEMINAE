import reception from "../assets/reception";
import waiting from "../assets/waiting";
import gynecology from "../assets/gynecology";
import counselling from "../assets/counselling";
import restroom from "../assets/restroom";
import hallway from "../assets/hallway";
import exterior from "../assets/exterior";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const gallery = [
  [exterior, "Exterior"],
  [reception, "Recepție"],
  [waiting, "Zonă de așteptare"],
  [gynecology, "Cabinet ginecologic"],
  [hallway, "Holul centrului"],
  [counselling, "Spațiu pentru discuții și educație"],
  [restroom, "Grup sanitar accesibil"],
] as const;

export default function SpatiuPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero">
        <div className="shell pageHeroGrid">
          <div><p className="kicker">SPAȚIUL CLINICII</p><h1>Clinic, calm și discret.</h1></div>
          <p>Un spațiu gândit pentru lumină, intimitate, orientare ușoară și o atmosferă medicală fără răceală instituțională.</p>
        </div>
      </section>
      <section className="gallery pageGallery">
        <div className="shell galleryGrid">
          {gallery.map(([src,label],i)=>(
            <figure key={label} className={i===0 || i===3 || i===4 ? "wide" : ""}>
              <img src={src} alt={label}/><figcaption>{label} · vizualizare conceptuală</figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="shell accessibility">
        <div className="accessCard">
          <div><p className="kicker">ACCESIBILITATE</p><h2>Accesul face parte din experiența medicală.</h2></div>
          <p>Spațiul este proiectat cu circulație clară, intimitate și soluții pentru mobilitate redusă. Detaliile finale vor fi publicate după amenajarea spațiului real.</p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
