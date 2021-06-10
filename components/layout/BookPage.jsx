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
          overflow-y: scroll;
        }

        section {
          width: clamp(320px, 90vh, 90vw);
          place-self: center;
        }

        section .content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
          gap: clamp(.5rem, 4vw ,2rem);
          justify-content: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </main>
  );
}
