import React, { useEffect } from 'react';
import ProjectLeftbar from './ProjectLeftbar';
import Header from './Header';
import { LayoutContainer } from './styled';
import { useSelector } from 'react-redux';
import Modal from '../../components/Modal';


const Layout = () => {
    const {headerData , modal } = useSelector(state => state.paging)

    return (
        <LayoutContainer>
            <ProjectLeftbar/>
            {
                modal && <div className='modalBg'>
                    <Modal/>
                </div>
            }
            <ul>
                {
                    headerData.map(item => <Header key={item.id} {...item} headerData={headerData}/>)
                }
                <li className='style'></li>
            </ul>
        </LayoutContainer>
    );
};

export default Layout;