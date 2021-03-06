import { motion } from "framer-motion";
import Image from "next/image";

export default function Card(props) {
  return (
    <motion.div className="cardAnimation" variants={props.variants}>
      <div className="cardFundo">
        {props.imageTitle ? (
          <div className="imageTitle">
            <Image src={props.imageTitle} alt={props.subtitleTop ? props.subtitleTop : props.subtitleBottom} layout="fill" />
          </div>
        ) : null}
        {props.title ? <h6 className="cardTitle">{props.title}</h6> : null}
        <div className="card">
          {props.subtitleTop ? <h5>{props.subtitleTop}</h5> : null}
          {props.image ? (
            <div className="cardImage">
              <Image src={"/images/" + props.image + ".svg"} alt={props.subtitleTop ? props.subtitleTop : props.subtitleBottom} layout="fill" />
            </div>
          ) : null}
          {props.subtitleBottom ? <h6>{props.subtitleBottom}</h6> : null}
          {props.children}
        </div>
      </div>

      <style jsx>{`
        h5 {
          margin-bottom: 1rem;
        }
        h6 {
          margin-top: 1rem;
        }

        .cardTitle {
          color: #fff;
          margin-bottom: 1rem;
          text-align: center;
        }

        .card {
          display: flex;
          flex-direction: column;
          place-items: center;
          padding: clamp(1rem, 2vw, 2rem);
          border-radius: 3rem;
          height: fit-content;
          transform: rotate(-1.5deg);
          background: ${props.fundo ? "hsl(0deg 0% 97%)" : "transparent"};
          box-shadow: ${props.fundo ? "inset -3px -5px 7px 5px #d9d9d9, inset 6px 6px 7px 3px #fff" : "none"};
          color: ${props.textColor};
          text-align: center;
          width: 100%;
        }

        .cardFundo {
          display: flex;
          flex-direction: column;
          padding: 0.8rem;
          background: ${props.color};
          box-shadow: 0.6rem 0.6rem ${props.shadow};
          border-radius: 3rem;
          transform: rotate(1.5deg);
        }

        .cardImage {
          margin: 1rem 0;
          width: 100%;
          height: clamp(8rem, 12rem, 14rem);
          position: relative;
          transform: rotate(-8deg);
          filter: drop-shadow(0px 5px 5px hsl(0deg 0% 0% / 10%));
        }
      `}</style>
      <style jsx global>{`
        .imageTitle {
          width: 8rem;
          height: 8rem;
          margin-top: 1rem;
          position: relative;
          place-self: center;
        }

        .cardAnimation {
          width: 100%;
          min-width: 16rem;
          height: fit-content;
          place-self: center;
        }
      `}</style>
    </motion.div>
  );
}
