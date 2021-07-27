import BookPage from "../../../components/layout/BookPage";
import Speaking from "../../../components/sets/Speaking";
import { Colors } from "../../../components/items/Colors";

export default function SpecificSpeaking(props) {
  const boy = { id: "boy", color: Colors.smartBlue, shadow: Colors.smartBlueDark };
  const girl = { id: "girl", color: Colors.smartYellow, shadow: Colors.smartYellowDark };

  return (
    <>
      <BookPage title="speaking" subtitle="all about clothes" image="">
        <div className="content fullwidth">
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a t-shirt." image={true} cardImage="book01/unit01/t-shirt" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a dress." image={true} cardImage="book01/unit01/dress" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a skirt." image={true} cardImage="book01/unit01/skirt" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a shorts." image={true} cardImage="book01/unit01/shorts" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a pyjamas." image={true} cardImage="book01/unit01/pyjamas" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a panties." image={true} cardImage="book01/unit01/panties" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a underpants." image={true} cardImage="book01/unit01/underpants" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a blouse." image={true} cardImage="book01/unit01/blouse" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a flip-flops." image={true} cardImage="book01/unit01/flip-flops" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a swimsuit." image={true} cardImage="book01/unit01/swimsuit" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a bikini." image={true} cardImage="book01/unit01/bikini" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a boots." image={true} cardImage="book01/unit01/boots" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a overall." image={true} cardImage="book01/unit01/overall" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a hat." image={true} cardImage="book01/unit01/hat" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a coat." image={true} cardImage="book01/unit01/coat" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a shirt." image={true} cardImage="book01/unit01/shirt" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a raincoat." image={true} cardImage="book01/unit01/raincoat" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a gloves." image={true} cardImage="book01/unit01/gloves" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a sweaters." image={true} cardImage="book01/unit01/sweaters" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a scarf." image={true} cardImage="book01/unit01/scarf" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a sunglasses." image={true} cardImage="book01/unit01/sunglasses" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a belt." image={true} cardImage="book01/unit01/belt" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a watch." image={true} cardImage="book01/unit01/watch" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
          <Speaking avatar1={girl} rightText="What is this?" avatar2={boy} leftText="It is a wallet." image={true} cardImage="book01/unit01/wallet" cardColor={Colors.smartBlue} cardShadow={Colors.smartBlueDark} />
        </div>
      </BookPage>
    </>
  );
}
