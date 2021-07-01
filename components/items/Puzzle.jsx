import Card from "../sets/Card";
import Image from "next/image";

export default function Puzzle(props) {
  return (
    <>
      <Image className={props.name} src={"/images/" + props.image + ".svg"} layout="responsive" width={props.width} height={props.height} />

      <style jsx>{``}</style>

      <style jsx global>{`
        ${"." + props.name} {
          filter: drop-shadow(0.6rem 0.8rem 0 ${props.shadow});
          padding: .5rem !important;
        }
        section .content.svg {
          gap: 0.5rem !important;
        }
      `}</style>
    </>
  );
}
