import { useState, useRef, useEffect } from "react";
export const TabMenu = ({ type = 0, menus, className, vertical, style }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabSize, setTabSize] = useState({
    width: 0,
    height: 0,
  });
  const [tabPosition, setTabPosition] = useState({
    left: 0,
    right: 0,
    top: 0,
  });
  const tabWrapRef = useRef(null);
  const tabListRef = useRef(null);
  const contentsRef = useRef(null);
  const myRefs = useRef([]);
  const [contentsHeight, setContentsHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = contentsRef.current.scrollTop;
      const containerHeight = contentsRef.current.scrollHeight;
      const tabHeight = containerHeight / menus.length;
      console.log(
        scrollPosition,
        containerHeight,
        tabHeight,
        containerHeight / tabHeight
      );

      myRefs.current.forEach((ref, index) => {
        console.log(ref.clientHeight * index, scrollPosition);
        if (scrollPosition > ref.clientHeight * index - 10) {
          setActiveTab(index);
        }
      });
    };

    if (contentsRef.current) {
      contentsRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentsRef.current) {
        contentsRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, [menus, activeTab]);

  const handleTabClick = (index) => {
    const targetElement = document.getElementById(`tabpn-${index}`);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    myRefs.current.forEach((ref, index) => {
      if (ref && contentsHeight > ref.offsetTop - 10) {
        setActiveTab(index);
      }
    });
  }, [contentsHeight]);

  useEffect(() => {
    if (tabListRef.current) {
      setTabSize(() => ({
        width: tabListRef.current
          .querySelector("li:nth-child(1)")
          .getBoundingClientRect().width,
        height: tabListRef.current
          .querySelector("li:nth-child(1)")
          .getBoundingClientRect().height,
      }));
    }
  }, []);

  useEffect(() => {
    setTabPosition(() => ({
      left: 0,
      top: 0,
      right: 0,
    }));
    setActiveTab(0);
  }, [vertical]);

  useEffect(() => {
    if (tabListRef.current && type !== 4) {
      tabListRef.current.scrollTo({
        left:
          !vertical && activeTab > 0 ? tabPosition.left - tabSize.width * 3 : 0,
        top:
          vertical && activeTab > 0 ? tabPosition.top - tabSize.height * 3 : 0,
        behavior: "smooth",
      });
    }
  }, [tabPosition, activeTab, tabSize, vertical, type]);

  return (
    <div
      className={`tab-wrap${
        type === 1
          ? " tab-moving"
          : type === 3
          ? " sel-h-v"
          : type === 4
          ? " tab-scroll"
          : ""
      } ${vertical ? "tab-vertical" : ""} ${className ? className : ""}`}
      data-roll="tab"
      data-type={`${type === 4 ? "tab-scroll" : null}`}
      style={style}
      ref={tabWrapRef}
    >
      <div
        className={`tab-list-wrap${
          type === 0
            ? " tab-expand"
            : type === 2
            ? " tab-center tab-line-top"
            : type === 3
            ? ""
            : type === 4
            ? " tab-right"
            : ""
        }`}
      >
        <ul className="tab-list" role="tablist" ref={tabListRef}>
          {menus.map((menu, index) => (
            <li
              className={`tab${activeTab === index ? " _is-active" : ""}`}
              role="tab"
              aria-selected={activeTab === index ? true : false}
              aria-controls={`${type === 4 ? `tabpn-${index}` : ``}`}
              key={index}
              onClick={() => {
                if (menu.onclick) menu.onclick();
                if (type === 4) {
                  handleTabClick(index);
                } else {
                  setActiveTab(index);
                  setTabPosition(() => ({
                    left: vertical
                      ? "auto"
                      : index === 0
                      ? index
                      : tabSize.width * index + 20 * index,
                    top: vertical
                      ? index === 0
                        ? index
                        : tabSize.height * index
                      : "auto",
                    right: vertical ? 0 : "auto",
                  }));
                }
              }}
            >
              <a>{menu.title}</a>
            </li>
          ))}
          {type === 1 && (
            <li
              className="highlight"
              style={{
                left: vertical ? "auto" : tabPosition.left,
                right: vertical ? tabPosition.right : "auto",
                top: vertical ? tabPosition.top : "auto",
                width: vertical ? "2px" : tabSize.width,
              }}
            ></li>
          )}
        </ul>
      </div>
      {type > 0 && type !== 3 && (
        <div
          className="tab-contents-wrap"
          ref={contentsRef}
        >
          {menus.map((menu, index) => (
            <div
              className={`tab-contents${
                activeTab === index ? " _is-active" : ""
              }`}
              id={`${
                type === 4 ? `tabpn-${index}` : `tabpanel-${type}-${index}`
              }`}
              role="tabpanel"
              key={index}
              ref={(element) => (myRefs.current[index] = element)}
            >
              <h3 className="hide">{menu.title}</h3>
              {!menu.contents ? `tabpanel-${type}-${index}` : menu.contents}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
