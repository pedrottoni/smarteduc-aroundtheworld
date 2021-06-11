import Card from "../../../components/sets/Card";
import TextField from "../../../components/sets/TextField";
import BookPage from "../../../components/layout/BookPage";
import { Colors } from "../../../components/items/Colors";

export default function Grammar(props) {
  return (
    <>
      <BookPage title="grammar" subtitle="Wh questions">
        <div className="content">
          <Card color={Colors.smartYellow} shadow={Colors.smartYellowDark} subtitleTop="Bolinho" image="muffin" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleTop="Bolinho" image="muffin" fundo={true} />
          <Card color={Colors.smartRed} shadow={Colors.smartRedDark} subtitleTop="Bolinho" image="muffin" fundo={true} />
        </div>
        <div className="content fullwidth">
          <TextField color={Colors.smartYellow} shadow={Colors.smartYellowDark} fundo={true}>
            <input type="text" disabled value="WHO IS THAT WOMAN?" />
            <input type="text" placeholder="Who is that..." maxLength="50" />
            <input type="text" defaultValue="WHO IS THAT WOMAN?" />
            <input type="text" defaultValue="WHO IS THAT WOMAN?" />
          </TextField>
          <TextField color={Colors.smartBlue} shadow={Colors.smartBlueDark} fundo={true}>
            <input type="text" disabled value="WHO IS THAT WOMAN?" />
            <input type="text" placeholder="Who is that..." maxLength="50" />
            <input type="text" defaultValue="WHO IS THAT WOMAN?" />
            <input type="text" defaultValue="WHO IS THAT WOMAN?" />
          </TextField>
          <TextField color={Colors.smartRed} shadow={Colors.smartRedDark} fundo={true}>
            <input type="text" disabled value="WHO IS THAT WOMAN?" />
            <input type="text" placeholder="Who is that..." maxLength="50" />
            <input type="text" defaultValue="WHO IS THAT WOMAN?" />
            <input type="text" defaultValue="WHO IS THAT WOMAN?" />
          </TextField>
        </div>
      </BookPage>
    </>
  );
}
