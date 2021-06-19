import Image from "next/image";

/*
  EXEMPLOS DE CARD:
  <Card color={smartBlue} shadow={smartBlueDark} textColor={smartWhite} item="Bolinho" subtitleBottom="Bolinho" />
  <Card color={smartPurple} shadow={smartPurpleDark} textColor={smartWhite} subtitleTop="Bolinho" />
  <Card color={smartYellow} shadow={smartYellowDark} subtitleTop="Bolinho" subtitleBottom="Bolinho" />
  <Card color={smartYellow} shadow={smartYellowDark} subtitleTop="Bolinho" subtitleBottom="Bolinho" image="muffin.svg" fundo={true} />
*/

export default function Card(props) {
  return (
    <>
      <div className="cardFundo">
        <div className="card">
          {props.subtitleTop ? <h5>{props.subtitleTop}</h5> : null}
          {props.image ? (
            <div className="cardImage">
              <Image src={"/images/" + props.image + ".svg"} alt="Picture of the author" layout="fill" />
            </div>
          ) : null}
          {props.subtitleBottom ? <h6>{props.subtitleBottom}</h6> : null}
          {props.children}
        </div>
      </div>

      <style jsx>{`
        h5 {
          margin-bottom: 2rem;
        }
        h6 {
          margin-top: 2rem;
        }

        .card {
          display: flex;
          flex-direction: column;
          place-items: center;
          padding: clamp(1rem, 2vw, 2rem);
          border-radius: 3rem;
          height: fit-content;
          transform: rotate(-1.5deg);
          background: ${props.fundo ? "hsl(0deg 0% 97%)" : "transparent"};
          box-shadow: ${props.fundo ? "inset -4px -5px 7px 3px #e3e3e3, inset 6px 6px 7px 3px #fff" : "none"};
          color: ${props.textColor};
          text-align: center;
        }
        .cardFundo {
          background: ${props.color};
          box-shadow: 0.6rem 0.6rem ${props.shadow};
          padding: 1rem;
          width: 100%;
          height: fit-content;
          transform: rotate(1.5deg);
          border-radius: 3rem;
        }

        .cardImage {
          margin: 1rem 0;
          width: 100%;
          height: clamp(8rem, 12rem, 14rem);
          position: relative;
        }
      `}</style>
    </>
  );
}
