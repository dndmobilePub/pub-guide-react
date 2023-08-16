import Link from "next/link";

export const Button = ({
  a = false,
  txtType = 0,
  size = "md",
  bgType = 1,
  disabled = false,
  shape = "",
  full = false,
  href = "",
  onClick,
  children,
  modal,
}) => {
  return (
    <>
      {a === true ? (
        <Link
          onClick={onClick}
          className={`btn btn-size ${size} ${
            txtType === 1
              ? "txt"
              : txtType === 2
              ? "txt uline"
              : txtType === 3
              ? "ico arrow"
              : ""
          } ${
            bgType === 1
              ? "bg"
              : bgType === 2
              ? "bg type2"
              : bgType === 3
              ? "bg type3"
              : ""
          } ${shape} ${full ? "full" : ""}`}
          href={href}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={`btn btn-size ${size} ${
            bgType === 1
              ? "bg"
              : bgType === 2
              ? "bg type2"
              : bgType === 3
              ? "bg type3"
              : ""
          } ${shape} ${full ? "full" : ""}${modal ? "_modalBtn" : ""}`}
          disabled={disabled}
        >
          {children}
        </button>
      )}
    </>
  );
};

export const ButtonWrap = ({ full, grow, children }) => {
  return (
    <div className={`btnWrap ${full ? "full" : ""} ${grow ? "grow" : ""}`}>
      {children}
    </div>
  );
};
