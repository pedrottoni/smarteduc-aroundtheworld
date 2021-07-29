import { motion } from "framer-motion";
import Card from "./Card";

export default function TextField(props) {
  return (
    <motion.div className="textfield" initial={{ y: 1000, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0, y: 1000 }} transition={{ delay: props.delay }}>
      <Card imageTitle={props.imageTitle} title={props.title} color={props.color} shadow={props.shadow} fundo={true}>
        {props.children}
      </Card>

      <style jsx>{``}</style>
      <style jsx global>{`
        .textfield .card {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(24rem, 2fr));
          place-items: unset;
          gap: 2rem;
          transform: rotate(-0.5deg);
          padding: ${props.label ? "6rem 2.5rem 1rem" : "2.5rem"};
        }

        .textfield {
          display: flex;
          place-content: center;
        }

        .textfield .cardFundo {
          transform: rotate(0.5deg);
        }

        .textfield .cardFundo:hover {
          transform: scale(1.02);
        }

        .textfield div {
          text-align: left;
        }

        input {
          position: relative;
          background: transparent;
          border: none;
          font-size: max(16px, 2.3rem);
          font-family: "Asap Condensed";
          font-weight: 600;
          text-transform: uppercase;
          color: hsl(0deg 0% 10%);
          border-bottom: 1px solid #bbb;
          padding: 0;
          width: -webkit-fill-available;
        }

        input:focus-visible {
          outline: hsl(319deg 55% 35%) auto 1px;
        }

        label {
          position: relative;
          left: 0;
          top: -6rem;
          font-weight: 700;
          color: hsl(319deg 55% 35%);
          margin-bottom: 1rem;
        }
      `}</style>
    </motion.div>
  );
}
