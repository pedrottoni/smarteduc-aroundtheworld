import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BookPage from "../components/layout/BookPage";
import Button from "../components/items/Button";
import Modal from "../components/sets/Modal";
import { Colors } from "../components/items/Colors";

export default function Books() {
  const [modalOpen1, setModal1Open] = useState(false);
  const [modalOpen2, setModal2Open] = useState(false);

  return (
    <>
      <BookPage title="books" subtitle="Loren ipsum dolor sit amet, consectetur adipiscing elit" image="">
        <div className="content IIIcol">
          <div className="cover ">
            <Image src="/images/north america collection.svg" layout="fill" />
          </div>
          <div className="cover coverNone">
            <Image src="/images/coverNone.svg" layout="fill" />
          </div>
          <div className="cover coverNone">
            <Image src="/images/coverNone.svg" layout="fill" />
          </div>
          <div className="cover coverNone">
            <Image src="/images/coverNone.svg" layout="fill" />
          </div>
          <div className="cover coverNone">
            <Image src="/images/coverNone.svg" layout="fill" />
          </div>
          <div className="cover coverNone">
            <Image src="/images/coverNone.svg" layout="fill" />
          </div>
        </div>

        <Link href="/book01">Book One</Link>
        <Button text="Start" onClick={() => (modalOpen1 ? setModal1Open(false) : setModal1Open(true))} color={Colors.smartPurple} shadow={Colors.smartPurpleDark}></Button>
        <Button text="Start" onClick={() => (modalOpen2 ? setModal2Open(false) : setModal2Open(true))} color={Colors.smartPurple} shadow={Colors.smartPurpleDark}></Button>
        {modalOpen1 ? (
          <Modal title="menu" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} headerColor={Colors.smartYellow} onClick={() => (modalOpen1 ? setModal1Open(false) : setModal1Open(true))}>
            <h2>conteúdo do modal</h2>
          </Modal>
        ) : null}
        {modalOpen2 ? (
          <Modal color={Colors.smartPurple} shadow={Colors.smartPurpleDark} onClick={() => (modalOpen2 ? setModal2Open(false) : setModal2Open(true))}>
            <h2>conteúdo do modal</h2>
          </Modal>
        ) : null}
      </BookPage>

      <style jsx>{`
        .cover {
          position: relative;
          height: 35rem;
          filter: drop-shadow(-0.5rem 0.5rem 0 hsl(190deg 100% 22%));
        }

        .coverNone {
          filter: drop-shadow(-0.5rem 0.5rem 0 hsl(190deg 100% 22%)) grayscale(1) brightness(1.1);
        }
      `}</style>
    </>
  );
}
