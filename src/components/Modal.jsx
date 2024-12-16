import React from 'react';
import { ModalCon } from './styled';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { modalclose } from '../store/modules/pagingSlice';
import { motion } from "framer-motion"; 

const Modal = () => {
    const dispatch = useDispatch();
    const { currentProduct } = useSelector(state => state.paging);
    const { name, bg, type, modalbg, con, duration, introduce, mainimg, skills, trouble, workScreen, url, function_item } = currentProduct;

    return (
        <ModalCon>
            <div className="modal-header">
                <span>{name}</span>
                <IoIosCloseCircleOutline size={30} color='#98acce' onClick={() => dispatch(modalclose())} />
            </div>
            <div className="modal-body">
                <figure className='modal-bg'>
                    <img src={modalbg} alt={name} />
                </figure>
                <div className="inner">
                    <div className="modal-title">
                        <motion.div className="d-flex"
                            initial={{ x: -20, opacity: 0 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.3 },
                            }}
                        >
                            <h1>{name}</h1>
                            <span>{type}</span>
                        </motion.div>
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                transition: { delay: 0.4 },
                            }}
                        >
                            {con.split('<br>').map((line, index) => (
                                <React.Fragment key={index}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </motion.p>
                    </div>
                    <div className="con">
                        <div className="con1">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.4 },
                                }}
                                className="videowrap"
                            >
                                <video src={mainimg} muted autoPlay playsInline loop></video>
                                <a className='move' href={url} target="_blank" rel="noopener noreferrer">홈페이지로 이동하기</a>
                            </motion.div>
                            <div className="con1-text">
                                <div className="d-flex">
                                    <div className='flexD-c'>
                                        <motion.strong
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                transition: { delay: 0.5 },
                                            }}
                                        >프로젝트기간</motion.strong>
                                        <motion.span className="modal-wrap"
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                transition: { delay: 0.7 },
                                            }}
                                        >
                                            {duration}
                                        </motion.span>
                                    </div>
                                    <div className='flexD-c'>
                                        <motion.strong
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                x: 0,
                                                transition: { delay: 0.5 },
                                            }}
                                        >사용한 스킬</motion.strong>
                                        <ul>
                                            {skills.map(item => <motion.li
                                                className='modal-wrap' key={item.id}
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { delay: 0.7 },
                                                }}
                                            >{item.con.toUpperCase()}</motion.li>)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="introduce">
                                    <motion.strong
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            transition: { delay: 0.5 },
                                        }}
                                    >소개 및 특이사항</motion.strong>
                                    <motion.div className='modal-wrap'
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: 0.7 },
                                        }}
                                        dangerouslySetInnerHTML={{ __html: introduce }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="con2">
                            <motion.strong
                                initial={{ x: -20, opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 0.5 },
                                }}
                            >구현기능</motion.strong>
                            <motion.div className="modal-wrap"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.5 },
                                }}
                            >
                                {
                                    function_item.map(item => (
                                        <motion.span className='li-item' key={item.id}>{item.con}</motion.span>
                                    ))
                                }
                            </motion.div>
                        </div>
                        {
                            trouble.length > 0 && trouble.map((item) => (
                                <div className="con2" key={item.id}>
                                    <motion.strong
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            x: 0,
                                            transition: { delay: 0.5 },
                                        }}
                                    >문제해결</motion.strong>
                                    <motion.div className="modal-wrap"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: 0.5 },
                                        }}
                                    >
                                        <strong>{item.title}</strong>
                                        <span>{item.con}</span>
                                    </motion.div>
                                </div>
                            ))
                        }
                        <div className="con3">
                            <motion.strong
                                initial={{ x: -20, opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: { delay: 0.5 },
                                }}
                            >미리보기</motion.strong>
                            <ul>
                                {
                                    workScreen.map(item => <motion.li
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: { delay: 0.5 },
                                        }}
                                        key={item.id}><img src={item.imgurl} alt={item.Ktitle} /><span>[{item.Ktitle}]</span></motion.li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </ModalCon>
    );
};

export default Modal;
