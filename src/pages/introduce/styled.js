import styled from "styled-components";

export const CareerListContainer = styled.ul`
    &.list-wrap{
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: unset;
        align-content: flex-start;
        margin-left: 3.1250vw;
        transition: 0.5s;
        height: 100%;
        gap: unset;
        margin-bottom: 360px;
    }
    @media (max-width : 1160px) {
        margin-left: unset !important;
        justify-content: center;
    }
    @media (max-width : 700px) {
        margin-top: 36px;
    }
`
// 소개에 있는 productItem
export const CarrerItemContainer = styled.li`
    font-family: 'SUITE-Regular', sans-serif;
    backdrop-filter: blur(5px);
    padding: 0.7375vw 1.5625vw ;
    justify-content: center;
    background: rgba(255,255,255,0.01);
    border-radius: 18px;
    box-shadow: 0px 0px 50px rgb(98 160 241 / 38%) inset, 0px 5px 5px rgba(0, 0, 0, 0.3);
    width: fit-content;
    border: 1px solid #3e4e68;
    /* height: 150px; */
    align-items: center;
    gap: 10px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    transition: 0.5s;
    margin-right: 0.7813vw;
    margin-bottom: 0.7813vw;
    height: calc(100% / 3 - 8px);
    cursor: pointer;
    &:hover{
        background: #131A26;
        border: none;
        border-top: 2px solid #b6c7e7;
        border-left: 2px solid #b6c7e7;
        box-shadow: unset;
        box-shadow: 0px 0px 32px rgba(54,86,167,0.5);
        transform: translate( -5px , -5px );
    }
    img{
        width: 4.4271vw;
        height: 4.4271vw;
        border-radius: 50%;
        box-shadow: 0px 5px 5px rgba(0,0,0,0.3) inset ,  0px 5px 5px rgba(0,0,0,0.3) ;
    }
    span{
        font-size: 16px;
        width: 11.7079vw;
        display: block;
        text-align: center;
        color: #C0C0C0;
        letter-spacing: -1px;
    }
    @media (max-width : 1010px) {
        img{
            width: 80px;
            height: 80px;
        }
        span{
            font-size: 14px;
            width: 145px;
        }
    }
    @media (max-width : 848px) {
        margin-right: 8px;
        margin-bottom: 8px;
        img{
            width: 70px;
            height: 70px;
        }
        span{
            width: 120px;
        }
    }
    @media (max-width : 700px) {
        margin-right: 10px;
        margin-bottom: 10px;
        overflow: hidden;
        &:hover{

        }
        span{
            transition: 0.5s;
            margin-top: 5px;
            height: 0px;
            overflow: hidden;
        }
    }
`

export const SkillListContainer = styled.ul`
    &.list-wrap{
        position: absolute;
        top: -500px;
        left: 0;
        display: flex;
        flex-direction: row;
        gap: 16px;
        margin-left: 3.1250vw;
        height: fit-content;
        box-sizing: border-box;
        transition: 0.5s;
    }
    @media (max-width : 1160px) {
        justify-content: center;
    }
`
// 소개에 있는 careerItem
export const SkillItemContainer = styled.li`
    font-family: 'SUITE-Regular', sans-serif;
    backdrop-filter: blur(25px);
    flex-basis: 50%;
    padding: 0.7375vw 1.5625vw;
    background: rgba(255,255,255,0.05);
    border-radius: 0.9375vw;
    box-shadow: 0px 0px 50px rgba(98, 160, 241, 0.3) inset, 0px 5px 5px rgba(0, 0, 0, 0.3);
    border: 1px solid #3e4e68;
    gap: 18px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    height: fit-content;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        background: #131A26;
        border: none;
        border-top: 2px solid #b6c7e7;
        border-left: 2px solid #b6c7e7;
        box-shadow: unset;
        box-shadow: 0px 0px 32px rgba(54,86,167,0.5);
        transform: translate( -5px , -5px );
        .my_career{
            li{
                p{
                    &.height35{
                        height: 35px;
                    }
                    &.height60{
                        height: 60px;
                    }
                }
            }
        }
    }
    .title_wrap{
        display: flex;
        flex-direction: column;
        gap: 0px;
        .date{
            font-size: 12px;
            color: #c0c0c0;
        }
        h2{
            color: #fff;
            font-size: 24px;
            font-weight: bold;
        }
        p{
            font-size: 14px;
            color: #fff;
            font-weight: 100;
        }
    }
    .my_career{
        display: flex;
        flex-direction: column;
        height: unset;
        li{
            span{
                display: inline-block;
                color: #dfdfdf;
                font-weight: 300;
                &::before{
                    content: '';
                    width: 3px;
                    height: 0.7292vw;
                    background-color: white;
                    display: inline-block;
                    margin-right: 5px;
                }
            }
            p{
                color: #A1A1A1;
                font-size: 14px;
                line-height: 130%;
                letter-spacing: -1px;
                overflow: hidden;
                height: 0px;
                transition: 0.5s;
            }
        }
    }
    @media (max-width : 1160px) {
        &:hover{
        .my_career{
            li{
                p{
                    &.height60{
                        height: 70px;
                    }
                }
            }
        }
    }
    }
    @media (max-width : 1010px) {
        flex-basis: 50%;
    }
    @media (max-width : 700px) {
        flex-basis: 50%;
        .my_career{
            p{
                display: none;
            }
        }
    }
`