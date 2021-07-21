import { useState } from "react";

export default function Accordion(props) {
  const [accordionOpen, setAccordionState] = useState(false);

  return (
    <>
      <div className="accordion">
        <button className={props.className ? "subAccordion" : "accordionTitle"} onClick={() => (accordionOpen ? setAccordionState(false) : setAccordionState(true))}>
          {props.className ? <p>{props.title}</p> : <h6>{props.title}</h6>}
        </button>
        {accordionOpen ? <div className="accordionContent">{props.children}</div> : null}
      </div>
      <style jsx>{`
        .accordion {
          margin-top: 1rem;
        }

        .subAccordion {
          width: 98%;
          padding: 0 2rem;
          background: transparent;
          color: ${props.textColor};
          font-weight: 700;
          text-align: left;
          cursor: pointer;
        }

        .accordionTitle {
          width: 98%;
          padding: 1rem 2rem;
          background: ${props.color};
          color: ${props.textColor};
          text-align: left;
          border-radius: 1rem;
          cursor: pointer;
        }

        .accordionContent {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 2rem;
        }
      `}</style>
    </>
  );
}
