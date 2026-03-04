const Button = ({ name, link, isBeam = false, containerClass }) => {
  return (
    <a className={`btn ${containerClass}`} href={link} target="_blank">
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </a>
  );
};

export default Button;