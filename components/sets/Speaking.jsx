import { motion } from "framer-motion";
import Balloon from "../items/Balloon";
import Image from "next/image";
import Card from "./Card";

export default function Speaking(props) {
  return (
    <motion.div className="speaking" initial={{ y: 1000, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0, y: 500 }} transition={{ delay: props.delay}}>
      <div className="avatar avatar1">
        <Balloon text={props.rightText} color={props.avatar1.color} shadow={props.avatar1.shadow} image={props.avatar1.image} />
        {props.image ? (
          <div className="image">
            <Image src={"/images/avatar/" + props.avatar1.id + ".svg"} alt="Picture of the author" layout="fill" />
          </div>
        ) : null}
      </div>
      {props.cardImage ? <Card color={props.cardColor} shadow={props.cardShadow} image={props.cardImage} fundo={true} /> : null}
      <div className="avatar avatar2">
        {props.image ? (
          <div className="image">
            <Image src={"/images/avatar/" + props.avatar2.id + ".svg"} alt="Picture of the author" layout="fill" />
          </div>
        ) : null}
        <Balloon text={props.leftText} color={props.avatar2.color} shadow={props.avatar2.shadow} image={props.avatar2.image} left="true" />
      </div>

      <style jsx>{``}</style>

      <style jsx global>{`
        .speaking {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr ${props.cardImage ? ".5fr" : ""} 1fr;
        }
        @media (max-width: 768px) {
          .speaking {
            grid-template-columns: 1fr;
            font-size: 5px;
            margin-bottom: 3rem;
            min-width: 60rem;
            place-self: center;
          }
        }

        .speaking .avatar {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .speaking .avatar.avatar1 {
          justify-self: end;
        }

        .speaking .avatar.avatar1 .image {
          transform: rotate(-8deg);
        }

        .speaking .avatar.avatar2 {
          justify-self: start;
        }

        .speaking .avatar.avatar2 .image {
          transform: rotate(8deg);
        }

        .speaking .avatar .image {
          position: relative;
          width: 10rem;
          height: 9rem;
          clip-path: circle(55% at 50% 38%);
        }

        .speaking .avatar .image:after {
          width: 100%;
          content: "";
          height: 80%;
          position: absolute;
          z-index: -1;
          top: 0.8rem;
          clip-path: circle(50% at 50% 50%);
        }

        .speaking .avatar.avatar1 .image:after {
          background: ${props.avatar1.color};
        }

        .speaking .avatar.avatar2 .image:after {
          background: ${props.avatar2.color};
        }
        .card {
          ${props.cardImage ? "height: 12rem !important; padding: 0rem !important" : null}
        }
        .cardFundo {
          ${props.cardImage ? "max-width: 20rem; !important" : null}
        }
      `}</style>
    </motion.div>
  );
}
