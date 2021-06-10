import Image from "next/image";

export default function NavBreadcrumb(props) {
  return (
    <header>
      <div className="headercontent">
        <div className="pagetitle">
          <h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
        </div>
        <div className="pageimage">
          <Image src={"/images/" + props.title + ".svg"} alt="Picture of the author" layout="fill" />
        </div>
      </div>

      <style jsx>{`
        h3 {
          color: hsl(40deg 97% 58%);
        }
        h4 {
          color: hsl(0deg 0% 100%);
        }

        header {
          background: repeating-linear-gradient(45deg, hsl(0deg 0% 100% / 0%), hsl(0deg 0% 100% / 0%) 10px, hsl(0deg 0% 100% / 3%) 10px, hsl(0deg 0% 100% / 3%) 20px), hsl(319deg 55% 35%);
          margin-bottom: 2rem;
          padding: 7rem 0 5rem 0;
          display: flex;
          place-content: center;
          transform: matrix(1, 0.046, 0, 1.48, 0, 0);
        }

        .headercontent {
          display: flex;
          place-content: space-between;
          width: clamp(320px, 90vh, 90vw);;
          transform: matrix(1, -0.033, 0, 0.7, 0, 0);
        }

        .pageimage {
          position: relative;
          width: 380px;
          height: 290px;
          margin: -4rem;
        }
      `}</style>
    </header>
  );
}
