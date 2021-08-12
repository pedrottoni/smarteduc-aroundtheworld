import BookPage from "../../../components/layout/BookPage";
import Card from "../../../components/sets/Card";
import TextField from "../../../components/sets/TextField";
import { Colors } from "../../../components/items/Colors";
import { motion } from "framer-motion";

export default function Grammar(props) {
  const list = { show: { transition: { staggerChildren: 0.1 } }, exit: { transition: { staggerChildren: 0.1 } } };
  const item = {
    hidden: { y: 300, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: 300, opacity: 0 },
  };

  return (
    <BookPage title="grammar" subtitle="Wh questions" image="">
      <motion.div className="content" initial="hidden" animate="show" exit="exit" variants={list}>
        <Card color={Colors.smartYellow} shadow={Colors.smartYellowDark} subtitleTop="Who?" image="book01/unit01/who" fundo={true} variants={item} />
        <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleTop="What?" image="book01/unit01/what" fundo={true} variants={item} />
        <Card color={Colors.smartRed} shadow={Colors.smartRedDark} subtitleTop="Where?" image="book01/unit01/where" fundo={true} variants={item} />
      </motion.div>
      <motion.div className="content fullwidth" initial="hidden" animate="show" exit="exit" variants={list}>
        <TextField color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true} variants={item}>
          <label>
            Example
            <input type="text" disabled value="WHO IS THAT WOMAN?" />
          </label>
          <label>
            Example
            <input type="text" placeholder="Who" maxLength="50" />
          </label>
          <label>
            Example
            <input type="text" defaultValue="WHO" />
          </label>
          <label>
            Example
            <input type="text" defaultValue="WHO" />
          </label>
        </TextField>
        <TextField color={Colors.smartBlue} shadow={Colors.smartBlueDark} fundo={true} variants={item}>
          <label>
            Example
            <input type="text" disabled value="WHAT IS YOUR NAME?" />
          </label>
          <label>
            Example
            <input type="text" placeholder="What" maxLength="50" />
          </label>
          <label>
            Example
            <input type="text" defaultValue="what?" />
          </label>
          <label>
            Example
            <input type="text" defaultValue="what?" />
          </label>
        </TextField>
        <TextField color={Colors.smartRed} shadow={Colors.smartRedDark} fundo={true} variants={item}>
          <label>
            Example
            <input type="text" disabled value="WHERE DO YOU LIVE?" />
          </label>
          <label>
            Example
            <input type="text" placeholder="WHERE" maxLength="50" />
          </label>
          <label>
            Example
            <input type="text" defaultValue="Where?" />
          </label>
          <label>
            Example
            <input type="text" defaultValue="Where?" />
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
