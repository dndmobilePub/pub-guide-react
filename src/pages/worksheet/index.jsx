import { useEffect, useState } from "react";
import { ProjectStatus } from "../../components/Common/ProjectStatus";
import data from "../../data/menu.common.json";
import { useSearchContext } from "../../store/SearchContext";
import HighlightSubstring from "../../utils/highlightSubstring";

export default function Worksheet() {
  const [filters, setFilters] = useState([
    {
      worker: "",
      workdate: "",
      change: "",
      etc: undefined,
    },
  ]);
  const [uniqueWorkers, setUniqueWorkers] = useState([]);
  const [uniqueWorkDate, setUniqueWorkDate] = useState([]);
  const [uniqueChange, setUniqueChange] = useState([]);
  const [btnActive, setBtnActive] = useState("");
  const [d1Visible, setD1Visible] = useState(true);
  const [d2Visible, setD2Visible] = useState(true);
  const [d3Visible, setD3Visible] = useState(true);
  const [d4Visible, setD4Visible] = useState(true);
  const [modal, setModal] = useState({
    isVisible: false,
    etc: "",
  });
  const [iframeWidth, setIframeWidth] = useState(370);
  const [iframeTitle, setIframeTitle] = useState("PG_GUIDE0001");
  const filteredData = data.filter((item) => {
    return (
      (!filters.worker || item.worker === filters.worker) &&
      (!filters.workdate || item.workdate === filters.workdate) &&
      (!filters.change || item.change === filters.change) &&
      (!filters.etc || item.etc[0].startsWith(filters.etc[0]))
    );
  });

  useEffect(() => {
    const workerSet = new Set();
    const workDateSet = new Set();
    const changeSet = new Set();
    data.forEach((item) => {
      if (item.worker) {
        workerSet.add(item.worker);
      }
      if (item.workdate) {
        workDateSet.add(item.workdate);
      }
      if (item.change) {
        changeSet.add(item.change);
      }
    });
    setUniqueWorkers(Array.from(workerSet).sort());
    setUniqueWorkDate(Array.from(workDateSet).sort());
    setUniqueChange(Array.from(changeSet).sort());
  }, []);

  const { inputValue, setInputValue } = useSearchContext();

  return (
    <div className={`pg_content ${inputValue.length > 0 ? "searcher" : ""}`}>
      {inputValue.length > 0 && (
        <div className="search_title">
          <h3>검색결과</h3>
          <button
            type="button"
            className="btn_search_cancel"
            onClick={(e) => {
              e.preventDefault();
              setInputValue("");
              document.querySelector("#pgSearchINP").focus();
            }}
          >
            검색취소
          </button>
        </div>
      )}
      {/* -- [S] WORK LIST -- */}
      <div className="pg_board_tab swiper-initialized swiper-horizontal swiper-pointer-events swiper-free-mode swiper-backface-hidden">
        <ul
          className="swiper-wrapper"
          aria-live="polite"
          id="swiper-wrapper-ef914fee2f9f10feb"
        >
          <li
            className="swiper-slide active swiper-slide-active"
            rel="panel0"
            role="group"
            aria-label="1 / 1"
          >
            <button type="button" data-json="./data/menu.common.json">
              공통
            </button>
          </li>
        </ul>
      </div>
      <div id="panel0" className="pg_board_panel active">
        <div className="panel_head">
          <div className="pg_target swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
            <ul
              className="swiper-wrapper"
              id="swiper-wrapper-9c662c1ad997e706"
              aria-live="polite"
            >
              <li
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 3"
              >
                <a href="#target0" className="go">
                  공통UI
                </a>
              </li>
              <li
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="2 / 3"
              >
                <a href="#target2" className="go">
                  공통UI, 레이어팝
                </a>
              </li>
              <li className="swiper-slide" role="group" aria-label="3 / 3">
                <a href="#target5" className="go">
                  공통UI
                </a>
              </li>
            </ul>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
          <ProjectStatus />
        </div>

        <div className="pg_alert_btn_set">
          <button
            type="button"
            className={`btn_design ${
              btnActive === "btn_design" ? "active" : ""
            }`}
            onClick={() => {
              if (filters.etc === undefined) {
                setBtnActive("btn_design");
                setFilters({
                  ...filters,
                  etc: ["디자인확인"],
                });
              } else {
                if (filters.etc[0] === "디자인확인") {
                  setBtnActive("");
                  setFilters({
                    ...filters,
                    etc: undefined,
                  });
                } else {
                  setBtnActive("btn_design");
                  setFilters({
                    ...filters,
                    etc: ["디자인확인"],
                  });
                }
              }
            }}
          >
            디자인확인 필요{" "}
            <strong>
              [{data.filter((item) => item.etc[0].startsWith("디자인")).length}]
            </strong>
          </button>
          <button
            type="button"
            className={`btn_plan ${btnActive === "btn_plan" ? "active" : ""}`}
            onClick={() => {
              if (filters.etc === undefined) {
                setBtnActive("btn_plan");
                setFilters({
                  ...filters,
                  etc: ["기획확인"],
                });
              } else {
                if (filters.etc[0] === "기획확인") {
                  setBtnActive("");
                  setFilters({
                    ...filters,
                    etc: undefined,
                  });
                } else {
                  setBtnActive("btn_plan");
                  setFilters({
                    ...filters,
                    etc: ["기획확인"],
                  });
                }
              }
            }}
          >
            기획확인 필요{" "}
            <strong>
              [{data.filter((item) => item.etc[0].startsWith("기획")).length}]
            </strong>
          </button>
          <button
            type="button"
            className={`btn_wa ${btnActive === "btn_wa" ? "active" : ""}`}
            onClick={() => {
              if (filters.etc === undefined) {
                setBtnActive("btn_wa");
                setFilters({
                  ...filters,
                  etc: ["접근성"],
                });
              } else {
                if (filters.etc[0].startsWith("접근성")) {
                  setBtnActive("");
                  setFilters({
                    ...filters,
                    etc: undefined,
                  });
                } else {
                  setBtnActive("btn_wa");
                  setFilters({
                    ...filters,
                    etc: ["접근성"],
                  });
                }
              }
            }}
          >
            접근성확인 필요{" "}
            <strong>
              [{data.filter((item) => item.etc[0].startsWith("접근성")).length}]
            </strong>
          </button>
        </div>

        <div className="pg_board">
          <table>
            <caption>메뉴별 코딩리스트</caption>
            <colgroup>
              <col style={{ width: "50px" }} />
              <col style={{ width: "150px" }} />
              <col style={{ width: "90px" }} />
              <col className="d1" style={{ width: "auto" }} />
              <col className="d2" style={{ width: "auto" }} />
              <col className="d3" style={{ width: "auto" }} />
              <col className="d4" style={{ width: "auto" }} />
              <col style={{ width: "300px" }} />
              <col style={{ width: "90px" }} />
              <col style={{ width: "100px" }} />
              <col style={{ width: "100px" }} />
              <col style={{ width: "80px" }} />
              <col style={{ width: "100px" }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col" className="id">
                  화면id
                </th>
                <th scope="col" className="type">
                  화면타입
                </th>
                <th
                  scope="col"
                  className="deps d1"
                  style={{ display: `${d1Visible ? "table-cell" : "none"}` }}
                >
                  1Depth
                  <button
                    type="button"
                    rel="d1"
                    onClick={() => {
                      setD1Visible(!d1Visible);
                    }}
                  >
                    <span className="hide">숨기기</span>
                  </button>
                </th>
                <th
                  scope="col"
                  className="deps d2"
                  style={{ display: `${d2Visible ? "table-cell" : "none"}` }}
                >
                  2Depth
                  <button
                    type="button"
                    rel="d2"
                    onClick={() => {
                      setD2Visible(!d2Visible);
                    }}
                  >
                    <span className="hide">숨기기</span>
                  </button>
                </th>
                <th
                  scope="col"
                  className="deps d3"
                  style={{ display: `${d3Visible ? "table-cell" : "none"}` }}
                >
                  3Depth
                  <button
                    type="button"
                    rel="d3"
                    onClick={() => {
                      setD3Visible(!d3Visible);
                    }}
                  >
                    <span className="hide">숨기기</span>
                  </button>
                </th>
                <th
                  scope="col"
                  className="deps d4"
                  style={{ display: `${d4Visible ? "table-cell" : "none"}` }}
                >
                  4Depth
                  <button
                    type="button"
                    rel="d4"
                    onClick={() => {
                      setD4Visible(!d4Visible);
                    }}
                  >
                    <span className="hide">숨기기</span>
                  </button>
                </th>
                <th scope="col" className="name">
                  화면명
                </th>
                <th scope="col" className="worker">
                  <select
                    onChange={(e) => {
                      setFilters({
                        ...filters,
                        worker: e.target.value,
                      });
                    }}
                  >
                    <option value="" onClick={() => {}}>
                      작업자
                    </option>
                    {uniqueWorkers.map((item) => (
                      <option key={item} val={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </th>
                <th scope="col" className="c_date">
                  <select
                    onChange={(e) => {
                      setFilters({
                        ...filters,
                        workdate: e.target.value,
                      });
                    }}
                  >
                    <option value="">작업일</option>
                    {uniqueWorkDate.map((item) => (
                      <option
                        key={item.replace(/-/g, "")}
                        val={item.replace(/-/g, "")}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </th>
                <th scope="col" className="m_date">
                  <select
                    onChange={(e) => {
                      setFilters({
                        ...filters,
                        change: e.target.value,
                      });
                    }}
                  >
                    <option value="">수정일</option>
                    {uniqueChange.map((item) => (
                      <option
                        key={item.replace(/-/g, "")}
                        val={item.replace(/-/g, "")}
                        onClick={() => {}}
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </th>
                <th scope="col" className="complete">
                  상태
                </th>
                <th scope="col" className="etc">
                  비고
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className={`${item.state} ${
                    item.workdate ? `c_${item.workdate.replace(/-/g, "")}` : ""
                  } ${
                    item.change ? `c_${item.change.replace(/-/g, "")}` : ""
                  } ${item.worker} working ${
                    item.etc[0].startsWith("디자인")
                      ? "design"
                      : item.etc[0].startsWith("기획")
                      ? "plan"
                      : item.etc[0].startsWith("접근성")
                      ? "wa"
                      : ""
                  }`}
                  id={`target${index}`}
                >
                  <td className="no">
                    {inputValue.length > 0 ? (
                      <HighlightSubstring
                        text={`${index + 1}`}
                        substring={inputValue}
                      />
                    ) : (
                      index + 1
                    )}
                  </td>
                  <td className="id">
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        if (
                          document.querySelector("html").classList.contains("m")
                        ) {
                          setIframeTitle(item.name);
                        } else {
                          window.open(`../publishing/${item.name}`, "_blank");
                        }
                      }}
                    >
                      {inputValue.length > 0 ? (
                        <HighlightSubstring
                          text={item.name}
                          substring={inputValue}
                        />
                      ) : (
                        item.name
                      )}
                    </a>
                  </td>
                  <td className="type">
                    <span>
                      {inputValue.length > 0 ? (
                        <HighlightSubstring
                          text={item.type}
                          substring={inputValue}
                        />
                      ) : (
                        item.type
                      )}
                    </span>
                  </td>
                  <td
                    className="depth1"
                    style={{ display: `${d1Visible ? "table-cell" : "none"}` }}
                  >
                    {inputValue.length > 0 ? (
                      <HighlightSubstring
                        text={item.depth1}
                        substring={inputValue}
                      />
                    ) : (
                      item.depth1
                    )}
                  </td>
                  <td
                    className="depth2"
                    style={{ display: `${d2Visible ? "table-cell" : "none"}` }}
                  >
                    {inputValue.length > 0 ? (
                      <HighlightSubstring
                        text={item.depth2}
                        substring={inputValue}
                      />
                    ) : (
                      item.depth2
                    )}
                  </td>
                  <td
                    className="depth3"
                    style={{ display: `${d3Visible ? "table-cell" : "none"}` }}
                  >
                    {inputValue.length > 0 ? (
                      <HighlightSubstring
                        text={item.depth3}
                        substring={inputValue}
                      />
                    ) : (
                      item.depth3
                    )}
                  </td>
                  <td
                    className="depth4"
                    style={{ display: `${d4Visible ? "table-cell" : "none"}` }}
                  >
                    {inputValue.length > 0 ? (
                      <HighlightSubstring
                        text={item.depth4}
                        substring={inputValue}
                      />
                    ) : (
                      item.depth4
                    )}
                  </td>
                  <td className="name">
                    {inputValue.length > 0 ? (
                      <HighlightSubstring
                        text={item.name}
                        substring={inputValue}
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="worker">
                    {inputValue.length > 0 ? (
                      <HighlightSubstring
                        text={item.worker}
                        substring={inputValue}
                      />
                    ) : (
                      item.worker
                    )}
                  </td>
                  <td className="c_date">
                    {inputValue.length > 0 ? (
                      <HighlightSubstring
                        text={item.workdate}
                        substring={inputValue}
                      />
                    ) : (
                      item.workdate
                    )}
                  </td>
                  <td className="m_date">
                    {inputValue.length > 0 ? (
                      <HighlightSubstring
                        text={item.change}
                        substring={inputValue}
                      />
                    ) : (
                      item.change
                    )}
                  </td>
                  <td className="complete">
                    <span
                      className={`${
                        item.state === "" && item.workdate && "ing"
                      } ${
                        item.state === "ing" && item.workdate
                          ? "ing"
                          : item.state === "complete"
                          ? "done"
                          : item.state === "del"
                          ? "del"
                          : item.state === "hold"
                          ? "hold"
                          : ""
                      }`}
                    >
                      {inputValue.length > 0 ? (
                        <HighlightSubstring
                          text={
                            item.state
                              ? item.state === "ing" && item.workdate
                                ? "검수중"
                                : item.state === "complete"
                                ? "완료"
                                : item.state === "del"
                                ? "삭제"
                                : item.state === "hold"
                                ? "보류"
                                : "대기중"
                              : "검수중"
                          }
                          substring={inputValue}
                        />
                      ) : item.state ? (
                        item.state === "ing" && item.workdate ? (
                          "검수중"
                        ) : item.state === "complete" ? (
                          "완료"
                        ) : item.state === "del" ? (
                          "삭제"
                        ) : item.state === "hold" ? (
                          "보류"
                        ) : (
                          "대기중"
                        )
                      ) : (
                        "검수중"
                      )}
                    </span>
                  </td>
                  <td className="etc">
                    <ul className="remark">
                      <li
                        onClick={() => {
                          setModal({
                            isVisible: true,
                            etc: item.etc[0],
                          });
                        }}
                        className={`${
                          item.etc[0].startsWith("디자인")
                            ? "design"
                            : item.etc[0].startsWith("기획")
                            ? "plan"
                            : item.etc[0].startsWith("접근성")
                            ? "wa"
                            : ""
                        }`}
                      >
                        {inputValue.length > 0 ? (
                          <HighlightSubstring
                            text={item.etc[0]}
                            substring={inputValue}
                          />
                        ) : (
                          item.etc[0]
                        )}
                      </li>
                    </ul>
                    <a
                      href={`/${item.name}.html`}
                      className="btn_hover"
                      target="_blank"
                    >
                      {inputValue.length > 0 ? (
                        <HighlightSubstring
                          text={item.name}
                          substring={inputValue}
                        />
                      ) : (
                        item.name
                      )}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modal.isVisible && (
        <>
          <div className="remark_pop">
            <a href="#" className="btn_search_del" role="button">
              <span className="hide">창닫기</span>
            </a>
            <h2>History</h2>
            <div className="history">
              <ul className="remark">
                <li
                  className={
                    modal.etc.startsWith("디자인")
                      ? "design"
                      : modal.etc.startsWith("기획")
                      ? "plan"
                      : "wa"
                  }
                >
                  {modal.etc}
                </li>
              </ul>
            </div>
          </div>
          <div
            className="dimmed"
            onClick={() => {
              setModal({
                isVisible: false,
                etc: "",
              });
            }}
          />
        </>
      )}

      <div className="frame_device" style={{ width: iframeWidth }}>
        <div className="head">
          <a href={`/${iframeTitle}`} className="newWindow" target="_blank">
            <span className="hide">새창으로</span>
          </a>
          <h2>
            <span className="p_id">{iframeTitle}</span>
            <span className="p_name">{iframeTitle}</span>
          </h2>
          <button type="button" className="disconnect">
            <span className="hide">팝업으로 분리</span>
          </button>
        </div>
        <div className="device">
          <div className="btn_size_set">
            <button
              type="button"
              onClick={() => {
                setIframeWidth(330);
              }}
            >
              320
            </button>
            <button
              type="button"
              onClick={() => {
                setIframeWidth(370);
              }}
            >
              360
            </button>
            <button
              type="button"
              onClick={() => {
                setIframeWidth(385);
              }}
            >
              375
            </button>
            <button
              type="button"
              onClick={() => {
                setIframeWidth(778);
              }}
            >
              768
            </button>
          </div>
          <iframe
            src={`../publishing/${iframeTitle}`}
            frameBorder="0"
            name="device"
            style={{ height: "80vh" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
