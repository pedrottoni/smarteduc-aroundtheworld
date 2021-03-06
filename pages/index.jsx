import Image from "next/image";
import { motion } from "framer-motion";
import NavHeader from "../components/sets/NavHeader";
import Button from "../components/items/Button";
import { Colors } from "../components/items/Colors";

export default function Home() {
  return (
    <>
      <NavHeader />

      <motion.div className="coverLogo" animate={{ scale: [0, 1.2, 1, 1] }} exit={{ opacity: 0, scale: 0 }}>
        <Image src="/images/coverLogo.svg" layout="fill" />
      </motion.div>

      <motion.div animate={{ scale: [1.2, 1, 1] }} exit={{ opacity: 0, scale: 0.9 }}>
        <Button size="big" text="Start" onClick="" link="/books" color={Colors.smartPurple} shadow={Colors.smartPurpleDark} textColor={Colors.smartYellow} />
      </motion.div>

      <style jsx>{``}</style>

      <style jsx global>{`
        .coverLogo {
          position: relative;
          margin: 10rem auto;
          width: 100vw;
          height: 60rem;
        }

        #__next {
          display: flex;
          flex-direction: column;
          place-items: center;
          place-content: center;
          height: 100vh;
          background: radial-gradient(36.78% 65.39% at 50% 59.42%, #73CEE1 0%, #5CC7DD 17%, #25B7D3 37%, #0099B8 100%);
          overflow: hidden;
      `}</style>
    </>
  );
}
