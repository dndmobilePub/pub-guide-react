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
  const tabListRef = useRef(null);
  const contentsRef = useRef(null);
  const myRefs = useRef([]);
  const [contentsHeight, setContentsHeight] = useState(0);

  const onHandleScroll = () => {
    if (contentsRef.current) {
      setContentsHeight(contentsRef.current.scrollTop);
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

  useEffect(()=>{
    if(tabListRef.current){
      tabListRef.current.scrollTo({
        left: !vertical && activeTab > 0 ? tabPosition.left - tabSize.width * 3 : 0,
        top: vertical && activeTab > 0 ? tabPosition.top - tabSize.height * 3 : 0,
        behavior: "smooth",
      });
    }
  },[tabPosition, activeTab, tabSize, vertical])

  return (
    <div
      className={`tab-wrap${
        type === 1
          ? " tab-moving"
          : type === 3
          ? " sel-h-v"
          : type === 4
          ? " tab-scroll tab-moving"
          : ""
      } ${className ? className : ""}`}
      data-roll="tab"
      data-type={`${type === 4 ? 'tab-scroll':null}`}
      style={style}
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
                setActiveTab(index);
                if (menu.onclick) menu.onclick();
                if (type === 4) {
                  myRefs.current[index].scrollIntoView({ behavior: "smooth" });
                }
                setTabPosition(() => ({
                  left: vertical
                    ? "auto"
                    : index === 0
                    ? index
                    : (tabSize.width * index) + (20 * index),
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
          {(type === 1 || type === 4) && (
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
          onScroll={onHandleScroll}
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