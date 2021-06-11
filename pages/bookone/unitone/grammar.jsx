import Card from "../../../components/sets/Card";
import TextField from "../../../components/sets/TextField";
import BookPage from "../../../components/layout/BookPage";
import { Colors } from "../../../components/items/Colors";

export default function Grammar(props) {
  return (
    <>
      <BookPage title="grammar" subtitle="Wh questions">
        <div className="content">
          <Card color={Colors.smartYellow} shadow={Colors.smartYellowDark} subtitleTop="Who?" image="muffin" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleTop="What?" image="muffin" fundo={true} />
          <Card color={Colors.smartRed} shadow={Colors.smartRedDark} subtitleTop="Where?" image="muffin" fundo={true} />
        </div>
        <div className="content fullwidth">
          <TextField color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true}>
            <input type="text" disabled value="WHO IS THAT WOMAN?" />
            <input type="text" placeholder="Who" maxLength="50" />
            <input type="text" defaultValue="WHO" />
            <input type="text" defaultValue="WHO" />
          </TextField>
          <TextField color={Colors.smartBlue} shadow={Colors.smartBlueDark} fundo={true}>
            <input type="text" disabled value="WHAT IS YOUR NAME?" />
            <input type="text" placeholder="What" maxLength="50" />
            <input type="text" defaultValue="what?" />
            <input type="text" defaultValue="what?" />
          </TextField>
          <TextField color={Colors.smartRed} shadow={Colors.smartRedDark} fundo={true}>
            <input type="text" disabled value="WHERE DO YOU LIVE?" />
            <input type="text" placeholder="WHERE" maxLength="50" />
            <input type="text" defaultValue="Where?" />
            <input type="text" defaultValue="Where?" />
          </TextField>
        </div>
      </BookPage>
    </>
  );
}
