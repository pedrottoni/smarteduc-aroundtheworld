import Image from "next/image";
import Link from "next/link";

export default function NavHeader(props) {
  return (
    <header>
      <Image src="/images/logo.svg" alt="Picture of the author" width="100" height="300" />
      <nav>
        <Link href="/">Link</Link>
      </nav>

      <style jsx>{`
        header {
          height: 70px;
          display: flex;
          place-content: space-between;
          place-items: center;
          padding: 1rem;
        }
      `}</style>
    </header>
  );
}
