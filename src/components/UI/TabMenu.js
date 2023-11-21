import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
export const TabMenu = ({
  menus,
  expand,
  selHV,
  line,
  align,
  moving,
  scroll,
  vertical,
  style,
  className,
}) => {
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
    if (tabListRef.current && !scroll) {
      tabListRef.current.scrollTo({
        left:
          !vertical && activeTab > 0 ? tabPosition.left - tabSize.width * 3 : 0,
        top:
          vertical && activeTab > 0 ? tabPosition.top - tabSize.height * 3 : 0,
        behavior: "smooth",
      });
    }
  }, [tabPosition, activeTab, tabSize, scroll, vertical]);

  return (
    <div
      className={`tab-wrap ${selHV ? "sel-h-v" : ""} ${
        moving ? `tab-moving` : ""
      } ${vertical ? "tab-vertical" : ""} ${scroll ? "tab-scroll" : ""} ${
        className ? className : ""
      }`}
      data-roll="tab"
      data-type={`${scroll ? "tab-scroll" : null}`}
      style={style}
      ref={tabWrapRef}
    >
      <div
        className={`tab-list-wrap ${line ? `tab-line-${line}` : ""} ${
          expand ? `tab-expand` : ``
        } ${align ? `tab-${align}` : ""}`}
      >
        <ul className="tab-list" role="tablist" ref={tabListRef}>
          {menus.map((menu, index) => (
            <li
              className={`tab${activeTab === index ? " _is-active" : ""}`}
              role="tab"
              aria-selected={activeTab === index ? true : false}
              aria-controls={`${scroll ? `tabpn-${index}` : ``}`}
              key={index}
              onClick={() => {
                setActiveTab(index);
                if (menu.onclick) menu.onclick();
                if (scroll) {
                  myRefs.current[index].scrollIntoView({ behavior: "smooth" });
                }
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
              }}
            >
              <a>{menu.title}</a>
            </li>
          ))}
          {moving && (
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
      {(scroll || !selHV) && (
        <div className="tab-contents-wrap" ref={contentsRef}>
          {menus.map((menu, index) => (
            <div
              className={`tab-contents${
                activeTab === index ? " _is-active" : ""
              }`}
              id={`${scroll ? `tabpn-${index}` : `tabpanel-${index}`}`}
              role="tabpanel"
              key={index}
              ref={(element) => (myRefs.current[index] = element)}
            >
              <h3 className="hide">{menu.title}</h3>
              {!menu.contents ? `tabpanel-${index}` : menu.contents}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

TabMenu.propTypes = {
  type: PropTypes.string,
  menus: PropTypes.array.isRequired,
  selHV: PropTypes.bool,
  className: PropTypes.string,
  line: PropTypes.string, 
  align: PropTypes.string,
  moving: PropTypes.bool,
  scroll: PropTypes.bool,
  vertical: PropTypes.bool,
  style: PropTypes.object,
};
