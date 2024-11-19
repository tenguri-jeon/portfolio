import React, { useEffect } from 'react';
import Plus from '../../components/Plus';
import Minus from '../../components/Minus';
import { HeaderItemComponents } from './styled';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onpageOn, onSlide } from '../../store/modules/pagingSlice';
import { motion } from "framer-motion"; 

const HeaderItem = ({...item}) => {

    const {id , title , con , isChk} = item
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    useEffect(() => {
        dispatch(onpageOn());
    }, []); 

    const acodion = (id) => {
        dispatch(onSlide(id))
        switch (id) {
            case 1:
                navigate('/inroduce')
                dispatch(onpageOn())
                break;
            case 2:
                navigate('/product')
                dispatch(onpageOn())
                break;
            case 3:
                navigate('/contact')
                dispatch(onpageOn())
                break;
        
            default:
                break;
        }
    }
    return (
        <HeaderItemComponents onClick={()=>acodion(item.id)}>
            <div>
                <motion.h1
                    initial={{y : -20 , opacity :0}}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition = {{ delay: 0.3 }}
                >0{id}</motion.h1>
                <div>
                    <motion.strong
                        initial={{x : 20 , opacity :0}}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition = {{ delay: 0.3 }}
                    >
                        {title}
                    </motion.strong>
                    <motion.p
                        initial={{x : 20 , opacity :0  , y:-20}}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition = {{ delay: 0.5 }}
                    >{con.split('<br>').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}</motion.p>
                </div>
            </div>
            <div className="btn">
                {
                    isChk === true ? <Minus/> : <Plus/>
                }
            </div>
        </HeaderItemComponents>
    );
};

export default HeaderItem;