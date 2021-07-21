import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../items/Button";
import Modal from "./Modal";
import Menu from "./Menu";
import { Colors } from "../items/Colors";

export default function NavHeader(props) {
  const [modalMenu, setModalMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">
        <Link href="/">
          <Image src="/images/logoWhite.svg" alt="Picture of the author" layout="responsive" width="790" height="263" />
        </Link>
      </div>
      <Button text="menu" onClick={() => (modalMenu ? setModalMenuOpen(false) : setModalMenuOpen(true))} color={Colors.smartPurple} shadow={Colors.smartPurpleDark}></Button>
      {modalMenu ? (
        <Modal title="menu" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} headerColor={Colors.smartYellow} onClick={() => (modalMenu ? setModalMenuOpen(false) : setModalMenuOpen(true))}>
          <Menu />
        </Modal>
      ) : null}

      <style jsx>{`
        header {
          position: absolute;
          top: 0;
          display: flex;
          place-content: space-between;
          place-items: center;
          width: 100%;
          height: 10rem;
          padding: 1rem clamp(2rem, 4vw, 6rem);
          z-index: 10;
        }

        header .logo {
          width: min(22rem, 150px);
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}
