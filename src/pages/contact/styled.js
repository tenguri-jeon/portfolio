import styled from "styled-components";

export const ContactContainer = styled.div`
    height: calc(100vh - (100vh / 3)) ;
    font-family: 'SUITE-Regular', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 80px;
    h3{
        font-size: 4.1667vw;
        font-weight: bold;
        color: white;
    }
    ul{
        margin-top: 1.6667vw;
        display: flex;
        justify-content: center;
        height: unset;
        flex-direction: row;
        gap: 30px;
        li{
            flex-basis: 50%;
            font-family: 'SUITE-Regular', sans-serif;
            cursor: pointer;
            backdrop-filter: blur(25px);
            border-radius: 18px;
            background: rgba(255,255,255,0.05);
            box-shadow: 0px 0px 50px rgba(98, 160, 241, 0.3) inset, 0px 5px 5px rgba(0, 0, 0, 0.3);
            box-sizing: border-box;
            transition: 0.5s;
            display: flex;
            flex-direction: column;
            height: fit-content;
            padding: 30px 38px;
            &:hover{
                background: #131A26;
                border: none;
                border-top: 2px solid #b6c7e7;
                border-left: 2px solid #b6c7e7;
                box-shadow: unset;
                box-shadow: 0px 0px 32px rgba(54,86,167,0.5);
                transform: translate(-5px , -5px);
            }
            &:nth-child(1){
                a{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img{
                        width: 144px;
                        height: 144px;
                        margin-bottom: 4px;
                    }
                    span{
                        color: #fff;
                        font-size: 22px;
                        font-weight: bold;
                        margin: 2px 0px;
                    }
                    p{
                        color: #d6d6d6;
                    }
                }
            }
            &:nth-child(2){
                height: 100%;
                align-items: flex-start;
                justify-content: center;
                .d-flex{
                    display: flex;
                    align-items: center;
                    width: 100%;
                    span{
                        flex-basis: 30%;
                        font-weight: bold;
                        font-size: 22px;
                        color: #fff;
                    }
                    strong{
                        flex-basis: 70%;
                        color: #D6D6D6;
                        font-size: 16px;
                    }
                }
            }
        }
    }
`