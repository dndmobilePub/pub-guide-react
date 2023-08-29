import Link from "next/link";
import { useRouter } from "next/router";

export const Button = ({
  a = false,
  txtType = 0,
  size = "md",
  bgType = 1,
  disabled = false,
  shape = "",
  full = false,
  href = "",
  onclick,
  modal,
  children,
}) => {
  const router = useRouter();
  return (
    <>
      {a === true ? (
        <Link
          onClick={onclick}
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
          href={href ? `/${href}`:''}
          passHref
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={()=>onclick ? onclick() : href ? router.push(`/${href}`) :''}
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
