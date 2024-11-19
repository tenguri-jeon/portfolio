import React, { useEffect } from 'react';
import HeaderItem from './HeaderItem';
import { Outlet } from 'react-router-dom';
import { HeaderComponents } from './styled';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';

const Header = ({...item}) => {
    const {transition , currentSidebar} = useSelector(state => state.paging)

    return (
        <HeaderComponents 
            className={
                item.isChk === true && 'on' 
            }>

            <HeaderItem {...item}/>
            <div className={
                    item.isChk === true ? 'main on' : 'main'
                }>
                { item.isChk === true ? (
                    <>
                        <div className='inner'>
                            <Sidebar/>
                            <main className={
                                transition ? 'contents on' : 'contents'
                            }>
                                <Outlet/>
                            </main>
                        </div>
                        <div className="bg"></div>
                    </>
                ) : null }
            </div>
        </HeaderComponents>
    );
};

export default Header;