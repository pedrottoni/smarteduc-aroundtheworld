import Card from "./Card";

export default function TextField(props) {
  return (
    <div className="textfield">
      <Card color={props.color} shadow={props.shadow} fundo={true}>
        {props.children}
      </Card>

      <style jsx>{`
        .textfield {
          display: flex;
          margin: 2rem 0 2rem 0;
          place-content: center;
        }

        .textfield :global(.card) {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(36rem, 2fr));
          gap: 2rem;
          transform: rotate(-0.5deg);
          padding: 2rem;
        }

        .textfield :global(.cardFundo) {
          transform: rotate(0.5deg);
        }
      `}</style>
      <style jsx global>{`
        input {
          background: transparent;
          border: navajowhite;
          font-size: max(16px, 2.3rem);
          font-family: "Asap Condensed";
          font-weight: 600;
          color: hsl(0deg 0% 10%);
          border-bottom: 1px solid #bbb;
          padding: 0.5rem;
        }
      `}</style>
    </div>
  );
}
