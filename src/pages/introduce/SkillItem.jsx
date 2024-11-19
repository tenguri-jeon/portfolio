import { SkillItemContainer } from './styled';
import { motion } from "framer-motion"; 

const SkillItem = ({mouseoverEvent , ...item}) => {
    const {id , date , title ,subtitle , content , height} = item
    const MotionCarrerItemContainer = motion(SkillItemContainer);

    return (
        <MotionCarrerItemContainer onMouseOver={mouseoverEvent}
            initial={{y : 20 , opacity :0}}
            whileInView={{
                opacity: 1,
                y: 0,
              transition: { delay: 0.5 },
              }}
        >
            <div className="title_wrap">
                <span className='date'>{date}</span>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
            <ul className="my_career">
                {
                    content.map(item => 
                        (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <p className={`height${height}`}>{item.con}</p>
                        </li>
                        )
                    )
                }
            </ul>
        </MotionCarrerItemContainer>
    );
};

export default SkillItem;