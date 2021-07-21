import Link from "next/link";

export default function Button(props) {
  return (
    <>
      {props.link ? (
        <Link href={props.link}>
          <button type="button" onClick={props.onClick}>
            <p>{props.text}</p>
          </button>
        </Link>
      ) : (
        <button type="button" onClick={props.onClick}>
          <p>{props.text}</p>
        </button>
      )}
      <style jsx>{`
        button {
          background: ${props.color};
          box-shadow: -0.5rem 0.5rem ${props.shadow};
          padding: 1rem 2rem;
          border-radius: 1rem;
          transform: perspective(100rem) rotateY(20deg);
          cursor: pointer;
        }

        button p {
          color: #fff;
          font-weight: 600;
          transform: perspective(100rem) rotateY(-20deg);
        }
      `}</style>
    </>
  );
}
