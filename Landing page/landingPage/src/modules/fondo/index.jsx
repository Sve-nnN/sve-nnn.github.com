import Fondo from "../../assets/fondo.svg";
export default function fondo({ children }) {
  return (
    <>
      <img className="fondo" src={Fondo} />
      {children}
    </>
  );
}
