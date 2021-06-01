import Image from "next/image";

function Card(props) {
  return (
    <>
      <div className="cardFundo">
        <div className="card">
          <h1>{props.subtitleTop}</h1>
          <Image src="/images/muffin.svg" alt="Picture of the author" layout="responsive" width="100" height="100" />
          <p>{props.subtitleBottom}</p>
        </div>
      </div>

      <style jsx>{`
        .card {
          padding: 2rem;
          background: hsl(0deg 0% 97%);
          border-radius: 2rem;
          width: clamp(10rem, 20rem, 1000px);
          height: fit-content;
          box-shadow: inset -4px -5px 7px 3px #e3e3e3, inset 6px 6px 7px 3px #fff;
          transform: rotate(-1deg);
        }
        .cardFundo {
          background: ${props.color};
          padding: 1rem;
          width: fit-content;
          height: fit-content;
          transform: rotate(1deg);
          border-radius: 2rem;
          box-shadow: 7px 7px hsl(190deg 100% 22%);
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
