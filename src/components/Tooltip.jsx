import { TooltipCon } from "./styled";
import { motion } from "framer-motion"; 

const MotionTooltip = motion(TooltipCon);

const Tooltip = ({content}) => {
    return (
        <MotionTooltip
            initial={{opacity :0}}
            whileInView={{
                opacity: 1,
            transition: { delay: 0.5 },
          }}
        >
            {content}
        </MotionTooltip>
    );
};

export default Tooltip;