import { CarrerItemContainer } from "./styled"; 
import { motion } from "framer-motion"; 

const MotionCarrerItemContainer = motion(CarrerItemContainer);

const CarrerItem = ({ imgurl, content }) => {
    return (
        <MotionCarrerItemContainer 
            initial={{y : 20 , opacity :0}}
            whileInView={{
                opacity: 1,
                y: 0,
              transition: { delay: 0.5 },
              }}
        >
            <img src={imgurl} alt="Carrer Item" />
            <span>{content}</span>
        </MotionCarrerItemContainer>
    );
};

export default CarrerItem;
