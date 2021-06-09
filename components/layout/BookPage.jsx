export default function BookPage(props) {
  return (
    <main>
      <header>
        <div className="pagetitle">
          <h3>{props.title}</h3>
          <h4>{props.subtitle}</h4>
        </div>
      </header>
      <section>{props.children}</section>
      <footer>
        <p>Footer</p>
      </footer>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          width: 100vw;
          overflow-y: scroll;
        }

        header {
          height: 25vh;
          background: repeating-linear-gradient(45deg, hsl(0deg 0% 100% / 0%), hsl(0deg 0% 100% / 0%) 10px, hsl(0deg 0% 100% / 3%) 10px, hsl(0deg 0% 100% / 3%) 20px), hsl(319deg 55% 35%);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5rem;
          margin-bottom: 2rem;
        }

        section, .pagetitle {
          width: 960px;
          place-self: center;
        }

        h3 {
          color: hsl(40deg 97% 58%);
        }
        h4 {
          color: hsl(0deg 0% 100%);
        }
      `}</style>
      <style jsx global>{`
        #__next {
          display: grid;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        section .content {
          display: flex;
          gap: 2rem;
          justify-content: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </main>
  );
}
