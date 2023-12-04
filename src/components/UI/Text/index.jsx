import styles from "./_cp.Text.module.scss";
import PropTypes from "prop-types";

export const Text = ({ lang = "", ell = 0, children }) => {
  return (
    <>
      {lang ? (
        <p
          className={`${styles['txt']} ${ell > 0 ? `${styles[`txt-elp${ell}`]}` : ""}`}
          data-lang={lang}
          lang={lang}
        >
          {children}
        </p>
      ) : (
        <p className={`${styles['txt']} ${ell > 0 ? `${styles[`txt-elp${ell}`]}` : ""}`}>{children}</p>
      )}
    </>
  );
};

Text.propTypes = {
  lang: PropTypes.string,
  ell: PropTypes.number,
  children: PropTypes.any,
}
