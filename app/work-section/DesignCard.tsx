import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { DesignProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";
import "../globals.css";

const DesignCard = ({ id, name, figma, image, available }: DesignProps) => {
  return (
    <motion.div
      style={
        {
          position: "relative",
        } as React.CSSProperties
      }
      className={` relative z-10 h-[300px] w-full max-w-4xl items-stretch justify-center overflow-hidden bg-center py-0  transition   duration-300 ease-in-out hover:scale-105 sm:h-[500px] sm:w-[100%] md:h-[500px] md:w-[100%] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      <div className="group relative">
        <Image
          src={image}
          alt={name}
          className={` h-[300px] sm:h-[500px] md:h-[500px] lg:h-[500px]  `}
        />

        <div className=" absolute top-0 left-0 h-full w-full bg-black bg-opacity-0 opacity-0 transition duration-300 ease-in-out  group-hover:bg-opacity-90 group-hover:opacity-100"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition duration-300 ease-in-out group-hover:opacity-100 ">
          <h3 className="text-xl sm:text-xl md:text-xl lg:text-4xl">{name}</h3>
          <Link href={figma} target="_blank" className="no-style">
            <h5 className="text-sm text-gray-400">Figma Link</h5>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DesignCard;
