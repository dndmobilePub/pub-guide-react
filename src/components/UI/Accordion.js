import React, { useState } from "react";
import $ from "jquery";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <dl className="accordion">
      <dt className="accordion-header" onClick={() => {
        setIsActive(!isActive)
        $('.accordion-contents').slideToggle();
      }}>
        <a className={`toggle-tit btn-toggle ${isActive ? '_is-active':''}`} aria-expanded={isActive ? 'true' : 'false'} aria-label={isActive ? '닫기' : '열기'}><span>{title}</span>
        </a>
      </dt>
      <dd className="accordion-contents" style={{display: 'none'}} dangerouslySetInnerHTML={{ __html: content }} />
    </dl>
  );
};
