import { useDispatch, useSelector } from 'react-redux';
import { SlideDetail } from '../../store/modules/pagingSlice';
import { motion } from "framer-motion"; 

const Sidebar = () => {
    const dispatch = useDispatch()
    const { currentSidebar } = useSelector(state => state.paging);
    
    const onGo = (id) =>{
        dispatch(SlideDetail(id))
    }

    return (
        <div className='sideMenu'>
            <ul>
                {
                    currentSidebar && currentSidebar.con.map(item => ( 
                        <motion.li 
                            key={item.id}
                            className={item.isChk ? 'on' : '' }
                            onClick={() => onGo(item.id)}
                            initial={{x : -20 , opacity :0}}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                              transition: { delay: 0.3 },
                              }}
                        >
                            <span>{item.title}</span>
                            <p>{item.con}</p>
                        </motion.li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Sidebar;
