export default function Balloon(props) {
  const spaces = props.text.replace(/\s/g, '')
  const padding = spaces.length;

  return (
    <div className="balloon">
      <p>{props.text}</p>

      <style jsx>{`
        .balloon {
          width:  ${padding > 18 ? 1.3 + (padding / 2.5 ) * 2 + "rem" : "fit-content"};
          max-width:  26rem;
          background: ${props.color};
          box-shadow: ${props.left ? "-0.5rem" : ".5rem"} 0.5rem ${props.shadow};
          color: #fff;
          padding: 2rem;
          border-radius: 2rem;
          transform: perspective(100rem) rotateY(${props.left ? "-" + 20 - Math.sqrt(padding) + "deg" : 20 - Math.sqrt(padding) + "deg"});
          text-align: ${props.left ? "left" : "right"};
        }

        .balloon p {
          font-weight: 600;
          transform: perspective(100rem) rotateY(${props.left ? 20 - Math.sqrt(padding) + "deg" : "-" + 20 - Math.sqrt(padding) + "deg"});
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
