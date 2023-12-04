
const Link = () => {
    return (
        <a
            onClick={onClick}
            className={`btn btn-size ${size} ${txtType === 1
                ? "txt"
                : txtType === 2
                    ? "txt uline"
                    : txtType === 3
                        ? "ico arrow"
                        : ""
                } ${bgType === 1
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
        </a>
    )
}
