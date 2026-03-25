import Logotipo from '../../assets/logotipo.png';

function Logo() {
  return (
    <div className="flex items-center">
      <img
        src={Logotipo}
        alt="Logotipo"
        className="
          h-8
          sm:h-10
          md:h-12
          lg:h-14
          xl:h-16
          w-auto
          object-contain
        "
        loading='lazy'
      />
    </div>
  );
}

export default Logo;