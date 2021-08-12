import { motion } from "framer-motion";
import Card from "./Card";

export default function TextField(props) {
  return (
    <div className="textfield">
      <Card imageTitle={props.imageTitle} title={props.title} color={props.color} shadow={props.shadow} fundo={true} variants={props.variants}>
        {props.children}
      </Card>

      <style jsx>{``}</style>
      <style jsx global>{`
        .textfield .card {
          display: grid !important;
          grid-template-columns: repeat(auto-fill, minmax(24rem, 2fr)) !important;
          place-items: unset;
          gap: 2rem;
          transform: rotate(-0.5deg) !important;
          padding: ${props.label ? "6rem 2.5rem 1rem" : "2.5rem"};
        }

        .textfield {
          display: flex;
          place-content: center;
        }

        .textfield .cardFundo {
          transform: rotate(0.5deg) !important;
        }

        .textfield div {
          text-align: left;
        }

        .textfield .innerTitle {
          grid-column: span 2;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
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
      `}</style>
    </div>
  );
}
