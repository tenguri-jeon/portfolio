import React, { useState } from 'react';
import { ContactContainer } from './styled';
import Tooltip from '../../components/Tooltip';

const Contact = () => {
    const [onTooltip , setTooltip] = useState(false)

    return (
        <ContactContainer>
            <h3>감사합니다</h3>
            <ul>
                <li 
                    onMouseOver={()=>{setTooltip(true)}}
                    onMouseOut={()=>{setTooltip(false)}}
                >
                    <a href="https://github.com/tenguri-jeon"
                            target="_blank" 
                            rel="noopener noreferrer"
                    >
                        <img src="github.png" alt="깃허브 logo" />
                        <span>GtiHub 주소</span>
                        <p>https://github.com/tenguri-jeon</p>
                    </a>
                </li>
                <li>
                    <div className="d-flex">
                        <span>NAME</span>
                        <strong>전규리</strong>
                    </div>
                    <div className="d-flex">
                        <span>EMAIL</span>
                        <strong>0108503@gmail.com</strong>
                    </div>
                    <div className="d-flex">
                        <span>PHONE</span>
                        <strong>010.3516.5810</strong>
                    </div>
                </li>
                {
                    onTooltip && <Tooltip content = {'클릭하면 GITHUB주소로 이동합니다'}/>
                }
            </ul>
        </ContactContainer>
    );
};

export default Contact;