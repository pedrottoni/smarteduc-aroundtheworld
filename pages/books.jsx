import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookPage from "../components/layout/BookPage";
import Accordion from "../components/items/Accordion";
import Modal from "../components/sets/Modal";
import { Colors } from "../components/items/Colors";

export default function Books() {
  const [modalBook1, setModalBook1Open] = useState(false);
  const list = { show: { transition: { staggerChildren: 0.05 } }, exit: { transition: { staggerChildren: 0.05 } } };
  const item = {
    hidden: { scale: 0, opacity: 0, y: 300 },
    show: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0, opacity: 0, y: 300 },
  };

  return (
    <>
      <BookPage title="books" subtitle="Loren ipsum dolor sit amet, consectetur adipiscing elit" image="" initial="hidden" animate="show" exit="exit" variants={list}>
        <motion.div className="content IIIcol" variants={list} initial="hidden" animate="show" exit="exit">
          <motion.div className="cover" variants={item}>
            <Image src="/images/north america collection.svg" layout="fill" alt="Smart Educ Around the World North America Collection" onClick={() => (modalBook1 ? setModalBook1Open(false) : setModalBook1Open(true))} />
          </motion.div>
          <motion.div className="cover coverNone" variants={item}>
            <Image src="/images/coverNone.svg" alt="Smart Educ Around the World " layout="fill" />
          </motion.div>
          <motion.div className="cover coverNone" variants={item}>
            <Image src="/images/coverNone.svg" alt="Smart Educ Around the World " layout="fill" />
          </motion.div>
          <motion.div className="cover coverNone" variants={item}>
            <Image src="/images/coverNone.svg" alt="Smart Educ Around the World " layout="fill" />
          </motion.div>
          <motion.div className="cover coverNone" variants={item}>
            <Image src="/images/coverNone.svg" alt="Smart Educ Around the World " layout="fill" />
          </motion.div>
          <motion.div className="cover coverNone" variants={item}>
            <Image src="/images/coverNone.svg" alt="Smart Educ Around the World " layout="fill" />
          </motion.div>
        </motion.div>
        <AnimatePresence initial={false}>
          {modalBook1 ? (
            <Modal image="coverLogoBook01" color={Colors.smartBlue} shadow={Colors.smartBlueDark} onClick={() => (modalBook1 ? setModalBook1Open(false) : setModalBook1Open(true))}>
              <h5 className="textColorPurple">North America collection</h5>
              <br />
              <p>Loren ipsum dolor sit amet non proident in vulputate vel augue vel augue sed diam non pro vehicula</p>
              <br />
              <br />
              <br />
              <h5 className="textColorPurple">units</h5>
              <br />
              <Accordion title="unit 01 - Getting ready to travel aboard" textColor={Colors.smartPurple} color={Colors.smartYellow} shadow={Colors.smartYellowDark} onClick={() => (modalBook1 ? setModalBook1Open(false) : setModalBook1Open(true))}>
                <Link href="/book01/unit01/themedvocabulary">VOCABULARY - PASSPORT</Link>
                <Link href="/book01/unit01/grammar">GRAMMAR - WH QUESTIONS</Link>
                <Link href="/book01/unit01/themedspeaking">SPEAKING - PERSONAL INFORMATION</Link>
                <Link href="/book01/unit01/translate">TRANSLATE</Link>
                <Link href="/book01/unit01/dictation">DICTATION</Link>
                <Link href="/book01/unit01/specificvocabulary">VOVABULARY - PACKING A SUITCASE</Link>
                <Link href="/book01/unit01/specificspeaking">SPEAKING - ALL ABOUT CLOTHES</Link>
                <Link href="/book01/unit01/steam">STEAM</Link>
                <Link href="/book01/unit01/smartskills">SMARTSKILLS - YOU ARE AMAZING!</Link>
              </Accordion>
              <Accordion title="unit 02 - Getting ready to travel aboard" textColor={Colors.smartYellow} color={Colors.smartPurple} shadow={Colors.smartPurpleDark}>
                <Link href="/book01/unit02/themedvocabulary">VOVABULARY - PASSPORT</Link>
                <Link href="/book01/unit02/grammar">GRAMMAR - WH QUESTIONS</Link>
                <Link href="/book01/unit02/themedspeaking">SPEAKING - PERSONAL INFORMATION</Link>
                <Link href="/book01/unit02/translate">TRANSLATE</Link>
                <Link href="/book01/unit02/dictation">DICTATION</Link>
                <Link href="/book01/unit02/specificvocabulary">VOVABULARY - PACKING A SUITCASE</Link>
                <Link href="/book01/unit02/specificspeaking">SPEAKING - nomenomenome</Link>
                <Link href="/book01/unit02/steam">STEAM</Link>
                <Link href="/book01/unit02/smartskills">SMARTSKILLS - YOU ARE AMAZING!</Link>
              </Accordion>
              <Accordion title="unit 03 - Getting ready to travel aboard" textColor={Colors.smartWhite} color={Colors.smartBlue} shadow={Colors.smartBlueDark}>
                <Link href="/book01/unit03/themedvocabulary">VOVABULARY - PASSPORT</Link>
                <Link href="/book01/unit03/grammar">GRAMMAR - WH QUESTIONS</Link>
                <Link href="/book01/unit03/themedspeaking">SPEAKING - PERSONAL INFORMATION</Link>
                <Link href="/book01/unit03/translate">TRANSLATE</Link>
                <Link href="/book01/unit03/dictation">DICTATION</Link>
                <Link href="/book01/unit03/specificvocabulary">VOVABULARY - PACKING A SUITCASE</Link>
                <Link href="/book01/unit03/specificspeaking">SPEAKING - nomenomenome</Link>
                <Link href="/book01/unit03/steam">STEAM</Link>
                <Link href="/book01/unit03/smartskills">SMARTSKILLS - YOU ARE AMAZING!</Link>
              </Accordion>
              <Accordion title="unit 04 - Getting ready to travel aboard" textColor={Colors.smartWhite} color={Colors.smartRed} shadow={Colors.smartRedDark}>
                <Link href="/book01/unit04/themedvocabulary">VOVABULARY - PASSPORT</Link>
                <Link href="/book01/unit04/grammar">GRAMMAR - WH QUESTIONS</Link>
                <Link href="/book01/unit04/themedspeaking">SPEAKING - PERSONAL INFORMATION</Link>
                <Link href="/book01/unit04/translate">TRANSLATE</Link>
                <Link href="/book01/unit04/dictation">DICTATION</Link>
                <Link href="/book01/unit04/specificvocabulary">VOVABULARY - PACKING A SUITCASE</Link>
                <Link href="/book01/unit04/specificspeaking">SPEAKING - nomenomenome</Link>
                <Link href="/book01/unit04/steam">STEAM</Link>
                <Link href="/book01/unit04/smartskills">SMARTSKILLS - YOU ARE AMAZING!</Link>
              </Accordion>
              <Accordion title="unit 05 - Getting ready to travel aboard" textColor={Colors.smartPurple} color={Colors.smartYellow} shadow={Colors.smartYellowDark}>
                <Link href="/book01/unit05/themedvocabulary">VOVABULARY - PASSPORT</Link>
                <Link href="/book01/unit05/grammar">GRAMMAR - WH QUESTIONS</Link>
                <Link href="/book01/unit05/themedspeaking">SPEAKING - PERSONAL INFORMATION</Link>
                <Link href="/book01/unit05/translate">TRANSLATE</Link>
                <Link href="/book01/unit05/dictation">DICTATION</Link>
                <Link href="/book01/unit05/specificvocabulary">VOVABULARY - PACKING A SUITCASE</Link>
                <Link href="/book01/unit05/specificspeaking">SPEAKING - nomenomenome</Link>
                <Link href="/book01/unit05/steam">STEAM</Link>
                <Link href="/book01/unit05/smartskills">SMARTSKILLS - YOU ARE AMAZING!</Link>
              </Accordion>
              <Accordion title="unit 06 - Getting ready to travel aboard" textColor={Colors.smartYellow} color={Colors.smartPurple} shadow={Colors.smartPurpleDark}>
                <Link href="/book01/unit06/themedvocabulary">VOVABULARY - PASSPORT</Link>
                <Link href="/book01/unit06/grammar">GRAMMAR - WH QUESTIONS</Link>
                <Link href="/book01/unit06/themedspeaking">SPEAKING - PERSONAL INFORMATION</Link>
                <Link href="/book01/unit06/translate">TRANSLATE</Link>
                <Link href="/book01/unit06/dictation">DICTATION</Link>
                <Link href="/book01/unit06/specificvocabulary">VOVABULARY - PACKING A SUITCASE</Link>
                <Link href="/book01/unit06/specificspeaking">SPEAKING - nomenomenome</Link>
                <Link href="/book01/unit06/steam">STEAM</Link>
                <Link href="/book01/unit06/smartskills">SMARTSKILLS - YOU ARE AMAZING!</Link>
              </Accordion>
              <Accordion title="unit 07 - Getting ready to travel aboard" textColor={Colors.smartWhite} color={Colors.smartBlue} shadow={Colors.smartBlueDark}>
                <Link href="/book01/unit07/themedvocabulary">VOVABULARY - PASSPORT</Link>
                <Link href="/book01/unit07/grammar">GRAMMAR - WH QUESTIONS</Link>
                <Link href="/book01/unit07/themedspeaking">SPEAKING - PERSONAL INFORMATION</Link>
                <Link href="/book01/unit07/translate">TRANSLATE</Link>
                <Link href="/book01/unit07/dictation">DICTATION</Link>
                <Link href="/book01/unit07/specificvocabulary">VOVABULARY - PACKING A SUITCASE</Link>
                <Link href="/book01/unit07/specificspeaking">SPEAKING - nomenomenome</Link>
                <Link href="/book01/unit07/steam">STEAM</Link>
                <Link href="/book01/unit07/smartskills">SMARTSKILLS - YOU ARE AMAZING!</Link>
              </Accordion>
              <Accordion title="unit 08 - Getting ready to travel aboard" textColor={Colors.smartWhite} color={Colors.smartRed} shadow={Colors.smartRedDark}>
                <Link href="/book01/unit08/themedvocabulary">VOVABULARY - PASSPORT</Link>
                <Link href="/book01/unit08/grammar">GRAMMAR - WH QUESTIONS</Link>
                <Link href="/book01/unit08/themedspeaking">SPEAKING - PERSONAL INFORMATION</Link>
                <Link href="/book01/unit08/translate">TRANSLATE</Link>
                <Link href="/book01/unit08/dictation">DICTATION</Link>
                <Link href="/book01/unit08/specificvocabulary">VOVABULARY - PACKING A SUITCASE</Link>
                <Link href="/book01/unit08/specificspeaking">SPEAKING - nomenomenome</Link>
                <Link href="/book01/unit08/steam">STEAM</Link>
                <Link href="/book01/unit08/smartskills">SMARTSKILLS - YOU ARE AMAZING!</Link>
              </Accordion>
            </Modal>
          ) : null}
        </AnimatePresence>
      </BookPage>

      <style jsx global>{`
        .cover {
          position: relative;
          height: 35rem;
          filter: drop-shadow(-0.5rem 0.5rem 0 hsl(190deg 100% 22%));
          cursor: pointer;
        }

        .coverNone {
          filter: drop-shadow(-0.5rem 0.5rem 0 hsl(190deg 100% 22%)) grayscale(1) brightness(1.1);
        }
      `}</style>
    </>
  );
}
