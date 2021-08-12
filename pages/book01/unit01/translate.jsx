import Image from "next/image";
import { motion } from "framer-motion";
import BookPage from "../../../components/layout/BookPage";
import TextField from "../../../components/sets/TextField";
import { Colors } from "../../../components/items/Colors";

export default function Translate(props) {
  const list = { show: { transition: { staggerChildren: 0.1 } }, exit: { transition: { staggerChildren: 0.1 } } };
  const item = {
    hidden: { y: 300, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: 300, opacity: 0 },
  };
  return (
    <BookPage title="translate" title2="the sentences" image="">
      <motion.div className="content svg fullwidth" variants={list} initial="hidden" animate="show" exit="exit">
        <TextField color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true} variants={item}>
          <div className="innerTitle">
            <div className="imageTitle">
              <Image src="/images/icon eng pt.svg" alt="From English into Portuguese Icon" layout="fill" />
            </div>
            <h6>From English into Portuguese</h6>
          </div>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>

        </TextField>
        <TextField color={Colors.smartPurple} shadow={Colors.smartPurpleDark} fundo={true} variants={item}>
          <div className="innerTitle">
            <div className="imageTitle">
              <Image src="/images/icon pt eng.svg" alt="From Portuguese into English Icon" layout="fill" />
            </div>
            <h6>From Portuguese into English</h6>
          </div>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
          <label>Translate<input type="text" spellcheck="false" /></label>
        </TextField>
      </motion.div>
      <style jsx>{`
        label{
          color: transparent;
          font-size: 0;
        }`}</style>
    </BookPage>
  );
}
