import Image from "next/image";

export default function PageHeader(props) {
  return (
    <header>
      <div className="headercontent">
        <div className="pagetitle">
          <h3>{props.title}</h3>
          {props.title2 ? <h3 className="title2">{props.title2}</h3> : null}
          {props.subtitle ? <h4>{props.subtitle}</h4> : null}
        </div>
        <div className="pageimage">
          <Image src={"/images/" + props.image + (props.title.indexOf(" ") ? props.title.replace(" ","") : props.title) + ".svg"} alt={props.title + " " + (props.title2 ? props.title2 : null) + " " + (props.subtitle ? props.subtitle : "")} layout="fill" />
        </div>
      </div>

      <style jsx>{`
        h3 {
          color: hsl(40deg 97% 58%);
        }

        .title2 {
          color: #fff;
        }
        h4 {
          color: hsl(0deg 0% 100%);
        }

        header {
          background: repeating-linear-gradient(45deg, hsl(0deg 0% 100% / 0%), hsl(0deg 0% 100% / 0%) 10px, hsl(0deg 0% 100% / 3%) 10px, hsl(0deg 0% 100% / 3%) 20px), hsl(319deg 55% 35%);
          margin-bottom: 2rem;
          padding: 10rem 0 8rem 0;
          display: flex;
          place-content: center;
          transform: matrix(1, 0.046, 0, 1.48, 0, 0);
        }

        .headercontent {
          display: flex;
          place-content: space-between;
          place-items: center;
          width: min(80rem, 95vw);
          transform: matrix(1, -0.033, 0, 0.7, 0, 0);
        }
        @media (max-width: 768px) {
          .headercontent {
            text-align: center;
            flex-direction: column-reverse;
          }
        }

        .pageimage {
          position: relative;
          width: 35rem;
          height: clamp(8rem, 35rem, 40rem);
          margin: -9rem;
          right: 0;
          filter: drop-shadow(0px 5px 20px hsl(0deg 0% 0% / 40%));
          z-index: -1;
        }
        @media (max-width: 768px) {
          .pageimage {
            width: 15rem;
            height: 23rem;
            margin: -4rem;
          }
        }
      `}</style>
    </header>
  );
}
