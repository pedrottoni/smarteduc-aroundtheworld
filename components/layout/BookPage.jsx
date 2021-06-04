export default function BookPage(props) {
  return (
    <main>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>
      <section>{props.children}</section>
      <footer>
        <button>Botão</button>
      </footer>

      <style jsx>{`
        main {
          display: grid;
          height: 100vh;
          width: 100vw;
          overflow-x: scroll;
        }

        header {
          height: 20vh;
          background: #8a286b;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 5rem;
          margin-bottom: 2rem;
        }
      `}</style>
      <style jsx global>{`
        #__next {
          display: grid;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}
