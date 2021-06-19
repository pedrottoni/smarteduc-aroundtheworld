export default function Balloon(props) {
  const padding = props.text.length;

  return (
    <div className="balloon">
      <p>{props.text}</p>

      <style jsx>{`
        .balloon {
          width: ${padding > 25 ? Math.sqrt(padding) * 4.5 - 2 + "rem" : "fit-content"};
          background: ${props.color};
          box-shadow: ${props.left ? "-0.5rem" : ".5rem"} 0.5rem ${props.shadow};
          color: #fff;
          padding: ${props.left ? "2rem " + (Math.sqrt(padding) / 6 + 1) + "rem 2rem " + (Math.sqrt(padding) / 2 + 1) + "rem" : "2rem " + (Math.sqrt(padding) / 2 + 1) + "rem 2rem " + (Math.sqrt(padding) / 6 + 1) + "rem"};
          border-radius: 2rem;
          transform: perspective(2rem) rotateY(${props.left ? "-1deg" : "1deg"});
          text-align: ${props.left ? "left" : "right"};
        }

        .balloon p {
          transform: perspective(2rem) rotateY(${props.left ? "1deg" : "-1deg"});
          font-weight: 600;
        }

        .balloon:after {
          content: "";
          position: absolute;
          border-left: ${props.left ? "1.1rem" : "1rem"} solid ${props.left ? "transparent" : props.color};
          border-right: ${props.left ? "0.7rem" : "1rem"} solid ${props.left ? props.color : "transparent"};
          border-top: 1rem solid transparent;
          border-bottom: 1rem solid ${props.color};
          ${props.left ? "left" : "right"}: -1.8rem;
          top: 2.5rem;
        }

        .balloon:before {
          content: "";
          position: absolute;
          border-left: ${props.left ? "1.5rem" : "1rem"} solid ${props.left ? "transparent" : props.shadow};
          border-right: 1rem solid ${props.left ? props.shadow : "transparent"};
          border-top: ${props.left ? "1.2rem" : "1rem"} solid transparent;
          border-bottom: ${props.left ? "1.2rem" : "1rem"} solid ${props.shadow};
          ${props.left ? "left" : "right"}: ${props.left ? "-2.5rem" : "-2.3rem"};
          top: ${props.left ? "2.7rem" : "3rem"};
        }
      `}</style>
    </div>
  );
}
