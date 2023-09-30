import imgAbout from "../../assets/imgAbout.webp";
export default function about() {
  return (
    <div className="about-section section">
      <div className="about-info">
        <h2>Sobre mí</h2>
        <p>
          ¡Hola de nuevo! Gracias por interesarte en mi trabajo. Me gradué en
          Venezuela como <strong>Técnico en Informática</strong> en 2022 y
          actualmente estoy estudiando <strong>Ingeniería de Software</strong>{" "}
          en la UPC.
        </p>
        <p>
          Además de programar, me gusta pasar mi tiempo aprendiendo cosas nuevas
          y jugando online. Tambié n he estado intentando mejorar mis hábitos de
          estudio, si tienes alguna recomendación estoy abierto a sugerencias!
        </p>
      </div>
      <div className="about-img-container">
        <img className="about-img" src={imgAbout} />
      </div>
    </div>
  );
}
