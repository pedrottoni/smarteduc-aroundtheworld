import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../items/Button";
import Modal from "./Modal";
import Menu from "./Menu";
import { Colors } from "../items/Colors";

export default function NavHeader(props) {
  const [modalMenu, setModalMenuOpen] = useState(false);

  return (
    <header>
      <motion.div className="logo" animate={{ x: [-500, 0] }} exit={{ opacity: 0, x: -500 }}>
        <Link href="/">
          <Image src="/images/logoWhite.svg" alt="Picture of the author" layout="responsive" width="790" height="263" />
        </Link>
      </motion.div>

      <motion.div animate={{ x: [500, 0] }} exit={{ opacity: 0, x: 500 }}>
        <Button text="menu" icon="icon menu" onClick={() => (modalMenu ? setModalMenuOpen(false) : setModalMenuOpen(true))} color={Colors.smartWhite} shadow={Colors.smartPurpleDark} textColor={Colors.smartPurple} />
      </motion.div>

      <AnimatePresence initial={false}>
        {modalMenu ? (
          <Modal title="menu" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} headerColor={Colors.smartYellow} onClick={() => (modalMenu ? setModalMenuOpen(false) : setModalMenuOpen(true))}>
            <Menu onClick={() => (modalMenu ? setModalMenuOpen(false) : setModalMenuOpen(true))} />
          </Modal>
        ) : null}
      </AnimatePresence>

      <style jsx>{`
        header {
          position: absolute;
          top: 0;
          display: flex;
          place-content: space-between;
          place-items: center;
          width: 100%;
          padding: 5rem clamp(2rem, 4vw, 6rem) 0;
          overflow: hidden;
          z-index: 2;
        }
      `}</style>
      <style jsx global>{`
        header .logo {
          width: 20rem;
          cursor: pointer;
        }
      `}</style>
    </header>
  );
}
