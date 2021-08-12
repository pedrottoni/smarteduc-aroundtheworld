import BookPage from "../../../components/layout/BookPage";
import TextField from "../../../components/sets/TextField";
import Puzzle from "../../../components/items/Puzzle";
import { Colors } from "../../../components/items/Colors";
import { motion } from "framer-motion";

export default function ThemedVocabulary(props) {
  const list = { show: { transition: { staggerChildren: 0.1 } }, exit: { transition: { staggerChildren: 0.1 } } };
  const item = {
    hidden: { y: 300, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: 300, opacity: 0 },
  };

  return (
    <>
      <BookPage title="passport" subtitle="personal information" image="book01/unit01/">
        <motion.div className="content svg fullwidth" initial="hidden" animate="show" exit="exit" variants={list}>
          <Puzzle name="girl" image="book01/unit01/passport girl" shadow={Colors.smartRedDark} col="Icol" width="285" height="150" variants={item} />
          <Puzzle name="boy" image="book01/unit01/passport boy" shadow={Colors.smartBlueDark} col="Icol" width="285" height="150" variants={item} />
        </motion.div>
        <div className="content svg fullwidth">
          <TextField imageTitle="/images/book01/unit01/travel.svg" title="passport" color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true} label={true} variants={item}>
            <div>
              <input id="surname" type="text" />
              <label for="surname">surname</label>
            </div>
            <div>
              <input id="country" type="text" />
              <label for="country">country</label>
            </div>
            <div className="cSpan2">
              <input id="name" type="text" />
              <label for="name">name</label>
            </div>
            <div className="cSpan2">
              <input id="nationality" type="text" />
              <label for="nationality">nationality</label>
            </div>
            <div>
              <input id="dateOfBirth" type="text" />
              <label for="dateOfBirth">date of birth</label>
            </div>
            <div>
              <input id="age" type="text" />
              <label for="age">age</label>
            </div>
            <div className="cSpan2">
              <input id="placeOfBirth" type="text" />
              <label for="placeOfBirth">place of birth</label>
            </div>
          </TextField>
        </div>
        <style jsx global>{`
          .textfield label {
            position: relative;
            left: 0;
            top: -6rem;
            font-weight: 700;
            color: hsl(319deg 55% 35%);
            margin-bottom: 1rem;
          }
        `}</style>
      </BookPage>
    </>
  );
}
