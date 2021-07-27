import Link from "next/link";
import Image from "next/image";

export default function Button(props) {
  return (
    <>
      {props.link ? (
        <Link href={props.link}>
          <button className={props.size} type="button" onClick={props.onClick}>
            {props.icon ? <Image src={"/images/" + props.icon + ".svg"} alt={props.icon} layout="responsive" width="50" height="50" /> : null}
            {props.text}
          </button>
        </Link>
      ) : (
        <button className={props.size} type="button" onClick={props.onClick}>
          {props.icon ? <Image src={"/images/" + props.icon + ".svg"} alt={props.icon} layout="responsive" width="50" height="50" /> : null}
          {props.text}
        </button>
      )}
      <style jsx>{`
        button {
          background: ${props.color};
          box-shadow: -0.5rem 0.5rem ${props.shadow};
          padding: ${props.icon ? ".5rem 1rem .5rem 0.8rem;" : "1rem 2rem"};
          border-radius: 1rem;
          transform: perspective(100rem) rotateY(20deg);
          cursor: pointer;
          ${props.icon ? "display: grid; grid-template-columns: .9fr 1fr; align-items: center;" : null};
          color: ${props.textColor};
          font-size: 2.5rem;
          font-weight: 600;
          transform: perspective(100rem) rotateY(-20deg);
        }

        button.small {
        }
        button.big {
          padding: ${props.icon ? ".5rem 1rem .5rem 0.8rem;" : "1rem 6rem"} !important;
          font-size: 5rem !important;
        }
      `}</style>
    </>
  );
}
