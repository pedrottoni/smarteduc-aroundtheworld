import BookPage from "../../../components/layout/BookPage";
import Puzzle from "../../../components/items/Puzzle";
import WordBlock from "../../../components/items/WordBlock";
import TextField from "../../../components/sets/TextField";
import { Colors } from "../../../components/items/Colors";
import { motion } from "framer-motion";

export default function SmartSkills(props) {
  const list = { show: { transition: { staggerChildren: 0.05 } }, exit: { transition: { staggerChildren: 0.05 } } };
  const item = {
    hidden: { scale: 0, opacity: 0, y: 300 },
    show: { scale: 1, opacity: 1, y: 0 },
    exit: { scale: 0, opacity: 0, y: 300 },
  };

  return (
    <>
      <BookPage title="smart skills" title2="You are amazing!" image="">
        <motion.div className="content svg" initial="hidden" animate="show" exit="exit" variants={list}>
          <Puzzle name="step2" image="book01/unit01/ss_step2" col="IIIcol" shadow={Colors.smartYellowDark} width="186" height="150" variants={item} />
          <Puzzle name="step1" image="book01/unit01/ss_step1" col="IIIcol" shadow={Colors.smartYellowDark} width="186" height="150" variants={item} />
          <Puzzle name="step3" image="book01/unit01/ss_step3" col="IIIcol" shadow={Colors.smartYellowDark} width="186" height="150" variants={item} />
        </motion.div>
        <motion.div className="content IIcol" initial="hidden" animate="show" exit="exit" variants={list}>
          <TextField title="ABOUT YOURSELF" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} fundo={true} variants={item}>
            <label>
              ABOUT YOURSELF
              <input type="text" disabled value="I AM KIND" />
            </label>
            <label>
              ABOUT YOURSELF
              <input type="text" />
            </label>
            <label>
              ABOUT YOURSELF
              <input type="text" />
            </label>
            <label>
              ABOUT YOURSELF
              <input type="text" />
            </label>
            <label>
              ABOUT YOURSELF
              <input type="text" />
            </label>
            <label>
              ABOUT YOURSELF
              <input type="text" />
            </label>
          </TextField>
          <TextField title="ABOUT SOMEONE`S ELSE" color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true} variants={item}>
            <label>
              ABOUT SOMEONE`S ELSE
              <input type="text" disabled value="YOU ARE GRATEFUL" />
            </label>
            <label>
              ABOUT SOMEONE`S ELSE
              <input type="text" />
            </label>
            <label>
              ABOUT SOMEONE`S ELSE
              <input type="text" />
            </label>
            <label>
              ABOUT SOMEONE`S ELSE
              <input type="text" />
            </label>
            <label>
              ABOUT SOMEONE`S ELSE
              <input type="text" />
            </label>
            <label>
              ABOUT SOMEONE`S ELSE
              <input type="text" />
            </label>
          </TextField>
        </motion.div>
        <h5 className="txtCenter">Words</h5>
        <motion.div className="content colCenter" initial="hidden" animate="show" exit="exit" variants={list}>
          <WordBlock text="KIND" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} variants={item} />
          <WordBlock text="GRATEFUL" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} variants={item} />
          <WordBlock text="BRAVE" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} variants={item} />
          <WordBlock text="CREATIVE" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} variants={item} />
          <WordBlock text="LOVED" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} variants={item} />
          <WordBlock text="DETERMINED" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} variants={item} />
          <WordBlock text="CAPABLE​" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} variants={item} />
          <WordBlock text="RESILIENT" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} variants={item} />
          <WordBlock text="OPTIMISTIC" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} variants={item} />
        </motion.div>
      </BookPage>
      <style jsx>{`
        label {
          color: transparent;
          font-size: 0;
        }
      `}</style>
      <style jsx global>{`
        section .content.fullwidth {
          gap: 2rem !important;
        }
      `}</style>
    </>
  );
}
