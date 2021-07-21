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
          <TextField imageTitle="/images/book01/unit01/travel.svg" title="passport" color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true} label={true}>
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
      </BookPage>
    </>
  );
}
