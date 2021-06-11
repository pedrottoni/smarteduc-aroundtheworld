import Image from "next/image";
import Link from "next/link";

export default function NavHeader(props) {
  return (
    <header>
      <div className="logo">
        <Image src="/images/logo.svg" alt="Picture of the author" layout="responsive" width="790" height="263" />
      </div>
      <nav>
        <Link href="/">Link</Link>
      </nav>

      <style jsx>{`
        header {
          height: min(10rem,70px);
          display: flex;
          place-content: space-between;
          place-items: center;
          padding: 2rem;
        }

        header .logo {
          width: min(22rem, 150px);
        }
      `}</style>
    </header>
  );
}
