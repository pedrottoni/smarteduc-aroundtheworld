import Image from "next/image";

export default function Modal(props) {
  return (
    <>
      <div className="backDrop">
        <div className="modalFundo">
          <div className="modal">
            <header>
              {props.image ? (
                <div className="modalImage">
                  <Image src={"/images/" + props.image + ".svg"} alt={props.modalImage} layout="fill" />
                </div>
              ) : null}
              {props.title ? <h3>{props.title}</h3> : null}
              <button type="button" onClick={props.onClick}>
                X
              </button>
            </header>
            <div className="modalContent">{props.children}</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .backDrop {
          position: fixed;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          place-items: center;
          place-content: center;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(15px);
        }

        .modalFundo {
          display: flex;
          flex-direction: column;
          background: ${props.color};
          box-shadow: -0.6rem 0.6rem ${props.shadow};
          padding: 0.8rem;
          width: min(80rem, 98vw);
          min-width: 16rem;
          height: fit-content;
          border-radius: 3rem;
          place-self: center;
          transition: 0.4s;
        }

        .modal {
          display: flex;
          flex-direction: column;
          place-items: center;
          padding: clamp(1rem, 2vw, 2rem);
          border-radius: 3rem;
          height: fit-content;
          background: #fff;
          box-shadow: ${props.fundo ? "inset -3px -5px 7px 5px #d9d9d9, inset 6px 6px 7px 3px #fff" : "none"};
          text-align: center;
          width: 100%;
        }

        .modal header {
          position: relative;
          top: -2.1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: min(79rem, 98vw);
          padding: 3rem 2rem 5rem;
          background: ${props.color};
          border-radius: 3rem 3rem 0 0;
          color: ${props.headerColor};
          text-align: left;
          clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 90%);
        }

        .modalContent {
          max-height: 60vh;
          width: 100%;
          text-align: left;
          overflow-y: scroll;
        }
      `}</style>
    </>
  );
}
