import BookPage from "../../../components/layout/BookPage";
import Speaking from "../../../components/sets/Speaking";
import { Colors } from "../../../components/items/Colors";

export default function ThemedSpeaking(props) {
  const boy = { id: "boy", color: Colors.smartBlue, shadow: Colors.smartBlueDark };
  const secretary = { id: "secretary", color: Colors.smartYellow, shadow: Colors.smartYellowDark };

  return (
    <>
      <BookPage title="speaking" subtitle="personal information">
        <div className="content fullwidth">
          <Speaking avatar1={secretary} rightText="Do you have a passport?" avatar2={boy} leftText="Yes, I have a passport." image={true} />
          <Speaking avatar1={secretary} rightText="What is your name?" avatar2={boy} leftText="My name is Smart." image={true} />
          <Speaking avatar1={secretary} rightText="What is your surname?​" avatar2={boy} leftText="My surname is Educ." image={true} />
          <Speaking avatar1={secretary} rightText="What is your date of birth?​" avatar2={boy} leftText="My date of birth is May, 29th , 2015." image={true} />
          <Speaking avatar1={secretary} rightText="What is your age?" avatar2={boy} leftText="I am 6 years old." image={true} />
          <Speaking avatar1={secretary} rightText="What is your nationality?​" avatar2={boy} leftText="I am Brazilian." image={true} />
          <Speaking avatar1={secretary} rightText="Where do you live​?" avatar2={boy} leftText="I live in Lorena." image={true} />
          <Speaking avatar1={secretary} rightText="What is your address?" avatar2={boy} leftText="My address is: Avenida Peixoto de Castro, 462." image={true} />
        </div>
      </BookPage>
    </>
  );
}
