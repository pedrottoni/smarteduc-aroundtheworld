import Image from "next/image";
import Header from "../sets/PageHeader";

export default function BookPage(props) {
  return (
    <main>
      <Header title={props.title} subtitle={props.subtitle} />
      <section>{props.children}</section>
      <footer>
        <p>Footer</p>
      </footer>

      <style jsx>{`

      `}</style>
      <style jsx global>{`
        #__next {
          display: grid;
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
          width: min(80rem,95vw);
          place-self: center;
        }

        section .content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
          gap: 2rem;
          justify-content: center;
          margin-bottom: 3rem;
        }

        .fullwidth {
          display: block !important;
        }
      `}</style>
    </main>
  );
}
