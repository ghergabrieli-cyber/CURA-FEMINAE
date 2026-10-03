import reception from "../assets/reception";
import waiting from "../assets/waiting";
import gynecology from "../assets/gynecology";
import counselling from "../assets/counselling";
import restroom from "../assets/restroom";
import hallway from "../assets/hallway";
import exterior from "../assets/exterior";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const gallery=[[exterior,"Exterior"],[reception,"Recepție"],[waiting,"Zonă de așteptare"],[gynecology,"Cabinet ginecologic"],[hallway,"Holul centrului"],[counselling,"Spațiu pentru discuții"],[restroom,"Grup sanitar"]] as const;

export default function SpatiuPage(){
 return <main><SiteHeader/>
  <section className="pageHero shortPageHero"><div className="shell pageHeroGrid"><div><p className="kicker">SPAȚIUL CLINICII</p><h1>Lumină, intimitate și orientare ușoară.</h1></div><p>Vizualizări conceptuale aprobate pentru direcția estetică a centrului. Spațiul final poate diferi.</p></div></section>
  <section className="shell compactGallery">{gallery.map(([src,label],i)=><figure key={label} className={i===0?"galleryHero":""}><img src={src} alt={label}/><figcaption>{label}</figcaption></figure>)}</section>
  <section className="softBand"><div className="shell bandGrid"><div><p className="kicker">ACCESIBILITATE</p><h2>Accesul face parte din experiența medicală.</h2></div><p>Circulație clară, intimitate și soluții pentru mobilitate redusă vor fi integrate în amenajarea finală.</p></div></section>
  <SiteFooter/>
 </main>
}
