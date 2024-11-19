import React from 'react';
import { GoHomePageBtnCom } from './styled';

const GohompageBtn = ({url}) => {
    const onGo = () => {
        window.location.href = `${url}`;
    }
    return (
        <GoHomePageBtnCom onClick={()=>onGo()}>
            홈페이지
        </GoHomePageBtnCom>
    );
};

export default GohompageBtn;