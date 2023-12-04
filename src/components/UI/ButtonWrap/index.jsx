import styles from "./_cp.buttonWrap.module.scss";
import PropTypes from "prop-types";

export const ButtonWrap = ({ isFull, isGrow, children }) => {
    return (
        <div className={[
            styles['btnWrap'],
            isFull ? styles["full"] : "",
            isGrow ? styles["grow"] : ""]
            .join(' ')}>
            {children}
        </div>
    );
};

ButtonWrap.propTypes = {
    isFull: PropTypes.bool,
    isGrow: PropTypes.bool,
    children: PropTypes.any,
  }