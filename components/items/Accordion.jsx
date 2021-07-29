import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion(props) {
  const [accordionOpen, setAccordionState] = useState(false);

  return (
    <>
      <div className="accordion">
        <button className={props.className ? "subAccordion" : "accordionTitle"} onClick={() => (accordionOpen ? setAccordionState(false) : setAccordionState(true))}>
          {props.className ? <p>{props.title}</p> : <h6>{props.title}</h6>}
        </button>
        <AnimatePresence initial={false}>
          {accordionOpen ? (
            <motion.div
              className="accordionContent"
              onClick={props.onClick}
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              {props.children}
            </motion.div>
          ) : null}
        </AnimatePresence>
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
      `}</style>
      <style jsx global>{`
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
