import Card from "./Card";

export default function TextField(props) {
  return (
    <div className="textfield">
      <Card imageTitle={props.imageTitle} title={props.title} color={props.color} shadow={props.shadow} fundo={true}>
        {props.children}
      </Card>

      <style jsx>{`
        .textfield {
          display: flex;
          place-content: center;
        }

        .textfield :global(.card) {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(30rem, 2fr));
          place-items: unset;
          gap: 2rem;
          transform: rotate(-0.5deg);
          padding: 2.5rem;
        }

        .textfield :global(.cardFundo) {
          transform: rotate(0.5deg);
        }

        .textfield :global(.cardFundo:hover) {
          transform: scale(1.02);
        }

        .textfield :global(div) {
          text-align: left;
        }
      `}</style>
      <style jsx global>{`
        input {
          position: relative;
          background: transparent;
          border: none;
          font-size: max(16px, 2.3rem);
          font-family: "Asap Condensed";
          font-weight: 600;
          text-transform: uppercase;
          color: hsl(0deg 0% 10%);
          border-bottom: 1px solid #bbb;
          padding: 0;
          width: -webkit-fill-available
        }

        input:focus-visible {
          outline: hsl(319deg 55% 35%) auto 1px;
        }

        label {
          position: relative;
          left: 0;
          top: -4.3rem;
          font-size: 1.4rem;
          font-weight: 700;
          color: hsl(319deg 55% 35%);
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
