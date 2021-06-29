export default function WordBlock(props) {
  return (
    <div className="wordblock">
      <p>{props.text}</p>

      <style jsx>{`
        .wordblock {
          width: fit-content;
          background: ${props.color};
          box-shadow: 0.5rem 0.5rem ${props.shadow};
          padding: 1rem 2rem;
          border-radius: 1rem;
          transform: perspective(100rem) rotateY(20deg);
        }

        .wordblock p {
          color: #fff;
          font-weight: 600;
          transform: perspective(100rem) rotateY(-20deg);
        }
      `}</style>

      <style jsx global>{``}</style>
    </div>
  );
}
