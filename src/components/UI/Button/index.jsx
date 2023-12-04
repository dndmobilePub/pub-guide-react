import styles from "./_cp.button.module.scss"
import PropTypes from "prop-types";

export const Button = ({
  bgType = 1,
  size = "md",
  isShadow = false,
  isRound = false,
  isLine = false,
  isDisabled = false,
  isFull = false,
  isModal = false,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles['btn']} ${styles['btn-size']} ${styles[size]} ${bgType === 1
        ? styles['bg']
        : bgType === 2
          ? `${styles['bg']} ${styles['type2']}`
          : bgType === 3
            ? `${styles['bg']} ${styles['type3']}`
            : ``
        } ${isShadow ? styles["shadow"] : ""} ${isRound ? styles["round"] : ""} ${isLine ? styles["line"] : ""} ${isFull ? styles["full"] : ""} ${isModal ? styles["_modalBtn"] : ""}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  bgType: PropTypes.oneOf([1, 2, 3]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  isRound: PropTypes.bool,
  isShadow: PropTypes.bool,
  isLine: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isFull: PropTypes.bool,
  isModal: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.string,
}