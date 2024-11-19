import Detail from "../../components/Detail";
import GohompageBtn from "../../components/GohompageBtn";
import { ProductItemContainer } from "./styled";
import { motion } from "framer-motion"; 
import React from "react";


const ProductItem = ({...item}) => {
    const { bg , name , id , skills , type , con, category ,url} = item
    const MotionCarrerItemContainer = motion(ProductItemContainer);

    return (
        <MotionCarrerItemContainer
        initial={{y : 20 , opacity :0}}
        animate={{
            opacity: 1,
            y: 0,
        }}
        transition = {{ delay: 0.7 }}
        >
            <figure>
                <img src={bg} alt= {name} />
            </figure>
            <div className="product-wrap">
                <div className="product-wrapper">
                    <ul className="skills-wrap">
                        {
                            skills.map(item => <li key={item.id} className={item.con}>{item.con.toUpperCase()}</li>)
                        }
                    </ul>
                    <span>{name}</span>
                    <p>
                    {con.split('<br>').map((line, index) => (
                    <React.Fragment key={index}>
                        {line.trim() === '' ? '' : line}  
                    </React.Fragment>
                    ))}
                    </p>
                </div>
                <div className="btn-wrap">
                    <GohompageBtn url = {url}/>
                    <Detail {...item}/>
                </div>
            </div>
        </MotionCarrerItemContainer>
    );
};

export default ProductItem;