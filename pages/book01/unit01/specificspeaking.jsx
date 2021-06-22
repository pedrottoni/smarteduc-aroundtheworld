import BookPage from "../../../components/layout/BookPage";
import Speaking from "../../../components/sets/Speaking";
import { Colors } from "../../../components/items/Colors";

export default function SpecificSpeaking(props) {
  const boy = { id: "boy", color: Colors.smartBlue, shadow: Colors.smartBlueDark };
  const girl = { id: "girl", color: Colors.smartYellow, shadow: Colors.smartYellowDark };

  return (
    <>
      <BookPage title="speaking" subtitle="personal information">
        <div className="content fullwidth">
          <Speaking avatar1={girl} rightText="Do you have a passport?" avatar2={boy} leftText="Yes, I have a passport." image={true} cardImage="book01/unit01/t-shirt" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
        </div>
      </BookPage>
    </>
  );
}
