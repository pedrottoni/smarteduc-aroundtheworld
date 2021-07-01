import BookPage from "../../../components/layout/BookPage";
import Card from "../../../components/sets/Card";
import { Colors } from "../../../components/items/Colors";

export default function SpecificVocabulary(props) {
  return (
    <>
      <BookPage title="packing" title2="a suitcase" image="book01/unit01/">
        <div className="content">
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="t-shirt" image={"book01/unit01/t-shirt"} fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="dress" image="book01/unit01/dress" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="skirt" image="book01/unit01/skirt" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="shorts" image="book01/unit01/shorts" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="pyjamas" image="book01/unit01/pyjamas" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="panties" image="book01/unit01/panties" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="underpants" image="book01/unit01/underpants" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="blouse" image="book01/unit01/blouse" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="flip-flops" image="book01/unit01/flip-flops" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="swimsuit" image="book01/unit01/swimsuit" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="bikini" image="book01/unit01/bikini" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="boots" image="book01/unit01/boots" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="overall" image="book01/unit01/overall" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="hat" image="book01/unit01/hat" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="coat" image="book01/unit01/coat" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="shirt" image="book01/unit01/shirt" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="raincoat" image="book01/unit01/raincoat" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="gloves" image="book01/unit01/gloves" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="sweaters" image="book01/unit01/sweaters" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="scarf" image="book01/unit01/scarf" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="sunglasses" image="book01/unit01/sunglasses" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="belt" image="book01/unit01/belt" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="watch" image="book01/unit01/watch" fundo={true} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="wallet" image="book01/unit01/wallet" fundo={true} />
        </div>
      </BookPage>
    </>
  );
}
