import Balloon from "../items/Balloon";
import Image from "next/image";

export default function Speaking(props) {
  return (
    <div className="speaking">
      <div className="avatar avatar1">
        <Balloon text={props.rightText} color={props.avatar1.color} shadow={props.avatar1.shadow} image={props.avatar1.image} />
        {props.image ? (
          <div className="image">
            <Image src={"/images/avatar/" + props.avatar1.id + ".svg"} alt="Picture of the author" layout="fill" />
          </div>
        ) : null}
      </div>
      <div className="avatar avatar2">
        {props.image ? (
          <div className="image">
            <Image src={"/images/avatar/" + props.avatar2.id + ".svg"} alt="Picture of the author" layout="fill" />
          </div>
        ) : null}
        <Balloon text={props.leftText} color={props.avatar2.color} shadow={props.avatar2.shadow} image={props.avatar2.image} left="true" />
      </div>

      <style jsx>{`
        .speaking {
          display: grid;
          gap: 2rem;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .speaking {
            grid-template-columns: 1fr;
            font-size: 5px;
            margin-bottom: 3rem;
            min-width: 60rem;
            place-self: center;
          }
        }

        .speaking .avatar {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .speaking .avatar.avatar1 {
          justify-self: end;
        }

        .speaking .avatar.avatar1 .image {
          transform: rotate(-8deg);
        }

        .speaking .avatar.avatar2 {
          justify-self: start;
        }

        .speaking .avatar.avatar2 .image {
          transform: rotate(8deg);
        }

        .speaking .avatar .image {
          position: relative;
          width: 8rem;
          height: 8rem;
          clip-path: circle(57% at 50% 40%);
        }

        .speaking .avatar .image:after {
          width: 8rem;
          content: "";
          height: 6rem;
          position: absolute;
          z-index: -1;
          top: 1.4rem;
          clip-path: circle(50% at 50% 50%);
        }

        .speaking .avatar.avatar1 .image:after {
          background: ${props.avatar1.color};
        }

        .speaking .avatar.avatar2 .image:after {
          background: ${props.avatar2.color};
        }
      `}</style>
    </div>
  );
}
