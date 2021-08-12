import BookPage from "../../../components/layout/BookPage";
import Speaking from "../../../components/sets/Speaking";
import { Colors } from "../../../components/items/Colors";
import { motion } from "framer-motion";

export default function ThemedSpeaking(props) {
  const boy = { id: "boy", color: Colors.smartBlue, shadow: Colors.smartBlueDark };
  const secretary = { id: "secretary", color: Colors.smartYellow, shadow: Colors.smartYellowDark };

  const list = { show: { transition: { staggerChildren: 0.05 } }, exit: { transition: { staggerChildren: .05 } } };
  const item = {
    hidden: { opacity: 0, y: 300  },
    show: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 300 },
  };

  return (
    <>
      <BookPage title="speaking" subtitle="personal information" image="">
        <motion.div variants={list} initial="hidden" animate="show" exit="exit" className="content fullwidth">
          <Speaking variants={item} avatar1={secretary} rightText="Do you have a passport?" avatar2={boy} leftText="Yes, I have a passport." image={true} />
          <Speaking variants={item} avatar1={secretary} rightText="What is your name?" avatar2={boy} leftText="My name is Smart." image={true} />
          <Speaking variants={item} avatar1={secretary} rightText="What is your surname?​" avatar2={boy} leftText="My surname is Educ." image={true} />
          <Speaking variants={item} avatar1={secretary} rightText="What is your date of birth?​" avatar2={boy} leftText="My date of birth is May, 29th , 2015." image={true} />
          <Speaking variants={item} avatar1={secretary} rightText="What is your age?" avatar2={boy} leftText="I am 6 years old." image={true} />
          <Speaking variants={item} avatar1={secretary} rightText="What is your nationality?​" avatar2={boy} leftText="I am Brazilian." image={true} />
          <Speaking variants={item} avatar1={secretary} rightText="Where do you live​?" avatar2={boy} leftText="I live in Lorena." image={true} />
          <Speaking variants={item} avatar1={secretary} rightText="What is your address?" avatar2={boy} leftText="My address is: Avenida Peixoto de Castro, 462." image={true} />
        </motion.div>
      </BookPage>

      <style jsx global>{`
        .content.gatoBola {
          background: #999 !important;
        }

        .bolaGato1 {
          width: 10rem;
          height: 10rem;
          background: red;
          z-index: 10;
        }
        .bolaGato2 {
          width: 10rem;
          height: 10rem;
          background: blue;
          z-index: 10;
        }
      `}</style>
    </>
  );
}
