import PageHeader from "../sets/PageHeader";
import NavHeader from "../sets/NavHeader"

export default function BookPage(props) {
  return (
    <main>
      <NavHeader />
      <PageHeader title={props.title} title2={props.title2} subtitle={props.subtitle} image={props.image}/>
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
        }

        main {
          display: flex;
          flex-direction: column;
        }

        section {
          width: min(80rem, 98vw);
          place-self: center;
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

        section .content.IIcol {
          grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr)) !important;
        }
        
        section .content.IIIcol {
          grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)) !important;
        }

        section .content.colCenter {
          display: flex !important;
          flex-wrap: wrap !important;
        }
      `}</style>
    </main>
  );
}
