import Heroimg from "../../assets/heroImg.svg";
import DownArrow from "../../assets/down-arrow.svg";
export default function heroBanner() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h1>¡Hola! Soy Juan 👋</h1>
          <p className="hero-intro">
            Un <strong>desarrollador</strong> y <strong>diseñador</strong>{" "}
            <small>(a veces)</small> web multidisciplinario, apasionado por
            crear experiencias y cautivar a los usuarios con mis creaciones.
          </p>
          <p className="hero-intro">
            Actualmente trabajo como <strong>analista de SEO técnico</strong> en
            AL Growth Marketing. 👨‍
          </p>
        </div>
        <div className="hero-img">
          <img src={Heroimg} />
        </div>
      </section>
      <div className="hero-flecha">
        <img src={DownArrow} />
      </div>
    </>
  );
}
