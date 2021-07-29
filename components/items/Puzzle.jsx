import Image from "next/image";
import { motion } from "framer-motion";

export default function Puzzle(props) {
  return (
    <motion.div initial={{ y: 1000, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0, y: 1000 }} transition={{ delay: props.delay}}>
      <Image className={props.name} src={"/images/" + props.image + ".svg"} layout="responsive" width={props.width} height={props.height} />

      <style jsx>{``}</style>

      <style jsx global>{`
        ${"." + props.name} {
          filter: drop-shadow(0.6rem 0.8rem 0 ${props.shadow});
          padding: .5rem !important;
        }
        section .content.svg {
          gap: 0.5rem !important;
        }
      `}</style>
    </motion.div>
  );
}
