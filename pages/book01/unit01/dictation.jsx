import Image from "next/image";
import { motion } from "framer-motion";
import BookPage from "../../../components/layout/BookPage";
import TextField from "../../../components/sets/TextField";
import { Colors } from "../../../components/items/Colors";

export default function Dictation(props) {
  const list = { show: { transition: { staggerChildren: 0.1 } }, exit: { transition: { staggerChildren: 0.1 } } };
  const item = {
    hidden: { y: 300, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: 300, opacity: 0 },
  };
  return (
    <BookPage title="dictation" title2="and rewrite" image="">
      <motion.div className="content svg fullwidth" variants={list} initial="hidden" animate="show" exit="exit">
        <TextField color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true} variants={item}>
          <div className="innerTitle">
            <div className="imageTitle">
              <Image src="/images/icon dictation.svg" alt="Dictation Icon" layout="fill" />
            </div>
            <h6>Dictation</h6>
          </div>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Dictation
            <input type="text" spellcheck="false" />
          </label>
        </TextField>
        <TextField color={Colors.smartPurple} shadow={Colors.smartPurpleDark} fundo={true} variants={item}>
          <div className="innerTitle">
            <div className="imageTitle">
              <Image src="/images/icon rewrite.svg" alt="Rewrite Icon" layout="fill" />
            </div>
            <h6>Rewrite</h6>
          </div>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
          <label>
            Rewrite
            <input type="text" spellcheck="false" />
          </label>
        </TextField>
      </motion.div>
      <style jsx>{`
        label {
          color: transparent;
          font-size: 0;
        }
      `}</style>
    </BookPage>
  );
}
