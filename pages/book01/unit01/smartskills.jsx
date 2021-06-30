import BookPage from "../../../components/layout/BookPage";
import Puzzle from "../../../components/items/Puzzle";
import WordBlock from "../../../components/items/WordBlock";
import TextField from "../../../components/sets/TextField";
import Card from "../../../components/sets/Card";
import { Colors } from "../../../components/items/Colors";

export default function SmartSkills(props) {
  return (
    <>
      <BookPage title="smart skills" title2="You are amazing!">
        <div className="content svg">
          <Puzzle image="book01/unit01/ss_step1" />
          <Puzzle image="book01/unit01/ss_step2" />
          <Puzzle image="book01/unit01/ss_step3" />
        </div>
        <div className="content IIcol">
          <TextField title="ABOUT YOURSELF" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} fundo={true}>
            <input type="text" disabled value="I AM KIND" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </TextField>
          <TextField title="ABOUT SOMEONE`S ELSE" color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true}>
            <input type="text" disabled value="YOU ARE GRATEFUL" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </TextField>
        </div>
        <h5 className="txtCenter">Words</h5>
        <div className="content colCenter">
          <WordBlock text="KIND" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} />
          <WordBlock text="GRATEFUL" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} />
          <WordBlock text="BRAVE" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} />
          <WordBlock text="CREATIVE" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} />
          <WordBlock text="LOVED" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} />
          <WordBlock text="DETERMINED" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} />
          <WordBlock text="CAPABLE​" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} />
          <WordBlock text="RESILIENT" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} />
          <WordBlock text="OPTIMISTIC" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} />
        </div>
      </BookPage>
      <style jsx global>{`
        section .content.fullwidth {
          gap: 2rem !important;
        }
      `}</style>
    </>
  );
}
