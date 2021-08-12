import BookPage from "../../../components/layout/BookPage";
import Card from "../../../components/sets/Card";
import { Colors } from "../../../components/items/Colors";
import { motion } from "framer-motion";

export default function SpecificVocabulary(props) {
  const list = { show: { transition: { staggerChildren: 0.1 } }, exit: { transition: { staggerChildren: 0.05 } } };
  const item = {
    hidden: { y: 300, opacity: 0 },
    show: { y: 0, opacity: 1 },
    exit: { y: 300, opacity: 0 },
  };
  return (
    <>
      <BookPage title="packing" title2="a suitcase" image="book01/unit01/">
        <motion.div className="content" initial="hidden" animate="show" exit="exit" variants={list}>
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="t-shirt" image={"book01/unit01/t-shirt"} fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="dress" image="book01/unit01/dress" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="skirt" image="book01/unit01/skirt" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="shorts" image="book01/unit01/shorts" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="pyjamas" image="book01/unit01/pyjamas" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="panties" image="book01/unit01/panties" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="underpants" image="book01/unit01/underpants" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="blouse" image="book01/unit01/blouse" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="flip-flops" image="book01/unit01/flip-flops" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="swimsuit" image="book01/unit01/swimsuit" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="bikini" image="book01/unit01/bikini" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="boots" image="book01/unit01/boots" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="overall" image="book01/unit01/overall" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="hat" image="book01/unit01/hat" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="coat" image="book01/unit01/coat" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="shirt" image="book01/unit01/shirt" fundo={true} variants={item}/>
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="raincoat" image="book01/unit01/raincoat" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="gloves" image="book01/unit01/gloves" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="sweaters" image="book01/unit01/sweaters" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="scarf" image="book01/unit01/scarf" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="sunglasses" image="book01/unit01/sunglasses" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="belt" image="book01/unit01/belt" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="watch" image="book01/unit01/watch" fundo={true} variants={item} />
          <Card color={Colors.smartBlue} shadow={Colors.smartBlueDark} subtitleBottom="wallet" image="book01/unit01/wallet" fundo={true} variants={item} />
        </motion.div>
      </BookPage>
    </>
  );
}
