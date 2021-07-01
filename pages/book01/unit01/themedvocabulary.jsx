import BookPage from "../../../components/layout/BookPage";
import WordBlock from "../../../components/items/WordBlock";
import TextField from "../../../components/sets/TextField";
import Puzzle from "../../../components/items/Puzzle";
import { Colors } from "../../../components/items/Colors";

export default function ThemedVocabulary(props) {
  return (
    <>
      <BookPage title="passport" subtitle="personal information" image="book01/unit01/">
        <div className="content svg fullwidth">
          <Puzzle name="girl" image="book01/unit01/passport girl" shadow={Colors.smartRedDark} col="Icol" width="285" height="150" />
          <Puzzle name="boy" image="book01/unit01/passport boy" shadow={Colors.smartBlueDark} col="Icol" width="285" height="150" />
        </div>
        <div className="content svg fullwidth">
          <TextField imageTitle="/images/book01/unit01/travel.svg" title="passport" color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true}>
            <input type="text" disabled value="I AM KIND" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </TextField>
        </div>
      </BookPage>
    </>
  );
}
