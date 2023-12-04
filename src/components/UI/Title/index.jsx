import styles from "./_cp.Title.module.scss";
import PropTypes from "prop-types";

export const Title = ({
    /*type = 1*/
    depth = 1,
    text,
    sub,
    headcopy,
    isLine = false,
    split = false,
    children,
}) => {
    const Heading = `h${depth}`;
    if (split) {
        return (
            <div className={`hgroup split`}>
                <Heading className={`${styles['tit']} ${styles[`dep0${depth}`]}`} >
                    {sub ? <p className={`${styles['tit']} ${styles['sub']}`}>{sub}</p> : null}
                    {isLine ? (<span className='uline'>{text}</span>) : text}
                    {headcopy ? <p className={`${styles['headcopy']}`}>{headcopy}</p> : null}
                </Heading>
                <div className="col">
                    {children}
                </div>
            </div>
        )
    } else {
        return (
            <Heading className={`${styles['tit']} ${styles[`dep0${depth}`]}`} >
                {sub ? <p className={`${styles['tit']} ${styles['sub']}`}>{sub}</p> : null}
                {isLine ? (<span className='uline'>{text}</span>) : text}
                {headcopy ? <p className={`${styles['headcopy']}`}>{headcopy}</p> : null}
            </Heading>
        )
    }
};

Title.propTypes = {
    depth: PropTypes.number,
    split: PropTypes.bool,
    isLine: PropTypes.bool,
    sub: PropTypes.string,
    children: PropTypes.any,
}