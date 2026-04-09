import { useNavigate } from "react-router-dom";
import Logotipo from '../../assets/Logotipo.png';

function Logo() {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center cursor-pointer"
      onClick={() => {
        navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img
        src={Logotipo}
        alt="Logotipo"
        className="h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 w-auto object-contain"
        loading="lazy"
      />
    </button>
  );
}

export default Logo;