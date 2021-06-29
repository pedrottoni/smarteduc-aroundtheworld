import Image from "next/image";
import PageHeader from "../sets/PageHeader";

export default function BookPage(props) {
  return (
    <main>
      <PageHeader title={props.title} title2={props.title2} subtitle={props.subtitle} />
      <section>{props.children}</section>
      <footer>
        <p>Footer</p>
      </footer>

      <style jsx>{``}</style>
      <style jsx global>{`
        #__next {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        main {
          display: flex;
          flex-direction: column;
          width: 100vw;
          height: calc(100vh - 70px);
          overflow-y: scroll;
        }

        section {
          width: min(80rem, 95vw);
          place-self: center;
          z-index: 1;
        }

        section .content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
          gap: 2rem;
          justify-content: center;
          margin-top: 2rem;
          margin-bottom: 3rem;
        }

        section .content.fullwidth {
          grid-template-columns: 1fr !important;
        }
      `}</style>
    </main>
  );
}
