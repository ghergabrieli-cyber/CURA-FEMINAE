import reception from "../assets/reception";
import waiting from "../assets/waiting";
import gynecology from "../assets/gynecology";
import counselling from "../assets/counselling";
import restroom from "../assets/restroom";
import hallway from "../assets/hallway";
import exterior from "../assets/exterior";
import {SiteFooter,SiteHeader} from "../components/SiteChrome";

const gallery=[[exterior,"Exterior"],[reception,"Recepție"],[waiting,"Zonă de așteptare"],[gynecology,"Cabinet ginecologic"],[hallway,"Holul centrului"],[counselling,"Spațiu pentru discuții"],[restroom,"Grup sanitar"]] as const;

export default function Page(){
 return <main><SiteHeader/>
  <section className="pageHero"><div className="shell pageHeroGrid"><div><p className="kicker">SPAȚIUL CLINICII</p><h1>Lumină, intimitate și orientare ușoară.</h1></div><p>Galeria este centrul paginii. Text minim; imaginile fac treaba.</p></div></section>
  <section className="shell galleryMosaic">{gallery.map(([src,label],i)=><figure className={i===0||i===3?"galleryLarge":""} key={label}><img src={src} alt={label}/><figcaption>{label}<small>Vizualizare conceptuală</small></figcaption></figure>)}</section>
  <section className="accessStrip"><div className="shell"><p className="kicker">ACCESIBILITATE</p><h2>Accesul face parte din experiența medicală.</h2><p>Circulație clară, intimitate și soluții pentru mobilitate redusă vor fi integrate în amenajarea finală.</p></div></section>
  <SiteFooter/>
 </main>
}
