import Image from "next/image";

function Card(props) {
  return (
    <>
      <div className="cardFundo">
        <div className="card">
          {props.subtitleTop ? <h1>{props.subtitleTop}</h1> : null}
          {props.image ? <Image src={"/images/" + props.image} alt="Picture of the author" layout="responsive" width="100" height="100" /> : null}
          {props.subtitleBottom ? <p>{props.subtitleBottom}</p> : null}
        </div>
      </div>

      <style jsx>{`
        .card {
          padding: 2rem;
          background: ${props.fundo ? "hsl(0deg 0% 97%)" : "transparent"};
          border-radius: 2rem;
          width: clamp(10rem, 20rem, 1000px);
          height: fit-content;
          box-shadow: ${props.fundo ? "inset -4px -5px 7px 3px #e3e3e3, inset 6px 6px 7px 3px #fff" : "none"};
          transform: rotate(-1deg);
          text-align: center;
          color: ${props.textColor};
        }
        .cardFundo {
          background: ${props.color};
          padding: 1rem;
          width: fit-content;
          height: fit-content;
          transform: rotate(1deg);
          border-radius: 2rem;
          box-shadow: 7px 7px ${props.shadow};
        }
        .card :global(p) {
          font-size: 2rem;
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
}

export default Card;
