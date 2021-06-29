import Card from "../sets/Card";
import Image from "next/image";

export default function Puzzle(props) {
  return (
    <div className="puzzle">
      <Image src={"/images/" + props.image + ".svg"} layout="fill" />

      <style jsx>{`
        .puzzle {
          position: relative;
          height: 21rem;
          filter: drop-shadow(0.6rem 0.8rem 0 #af551e);
        }
      `}</style>

      <style jsx global>{`
        section .content.svg {
          gap: 0.5rem !important;
        }
      `}</style>
    </div>
  );
}
