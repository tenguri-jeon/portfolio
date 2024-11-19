import styled from "styled-components";

export const LayoutContainer = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #242A34;
    .modalBg{
        width: 100vw;
        height: 100vh;
        position: absolute;
        background: rgba(0,0,0,0.7);
        top: 0;
        left: 0;
        z-index: 10;
    }
    .Main_sidebar{
        flex-basis: 10%;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        color: #919499;
        font-size: 5.5556vw;
        justify-content: center;
        display: flex;
        border-left: 1px solid #18191D;
        .me{

        }
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 100%;
        height: 100vh;
        position: relative;
        & .style{
            height: calc(100vh / 3.5 );
            background: #343840;
            border-top: 2px solid #555961;
            order: 4;
            &.off {
                display: none;
            }
        }
    }
    @media (max-width : 1300px) {
        .Main_sidebar{
            display: none;
        }
    }
`

export const HeaderComponents = styled.li`
    font-family: 'SUITE-Regular', sans-serif;
    background: #343840;
    border-top: 2px solid #555961;
    height: 100vh;
    display: flex;
    flex-direction: column;
    order: 2;
    &.on{
        order: 1;
    }
    .main {
        position: relative;
        width: 100%;
        background: linear-gradient(180deg, rgba(26,27,30,1) 0%, rgba(0,0,0,1) 100%);
        z-index: 0;
        overflow: hidden;
        height: 0px;
        transition: 0.5s;
        box-sizing: border-box;
        &.on {
            padding: 1.8229vw 5.2083vw;
            height: 100vh;
        }
        .inner{
            display: flex;
            height: 100%;
            box-sizing: border-box;
            .contents{
                flex-basis: 87%;
                display: flex;
                flex-direction: column;
                transition: 0.5s;
                position: relative;
                height: 100vh;
                &.on{
                    ul{
                       &:nth-child(1){
                        top: -560px;
                        opacity: 0;
                        margin-bottom: 0px;
                       } 
                       &:nth-child(2){
                        opacity: 1;
                        top: 0;
                        margin-bottom: 0px;
                       } 
                    }
                }
            }
        }
        &::before{
            content: '';
            display: block;
            background: rgba(45, 50, 55, 0.2);
            width: 27.6042vw;
            height: 23.1771vw;
            position: absolute;
            left: 0;
            transform: translate(-20%, -30%);
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
            rotate: 24deg;
            border-radius: 50px;
        }
        &::after{
            content: '';
            display: block;
            background: rgba(45, 50, 55, 0.2);
            width: 27.6042vw;
            height: 23.1771vw;
            position: absolute;
            bottom: 0;
            right: 0;
            transform: translate(3%, -36%);
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
            rotate: 14deg;
            border-radius: 50px;
            z-index: -1;
        }
        .bg{
            width: 78.1944vw;
            height: 78.1944vw;
            background: url(/main_bg.png);
            border-radius: 50%;
            position: absolute;
            bottom: 0%;
            right: 50%;
            transform: translate(40% , 50%);
            z-index: -1;
        }
        .sideMenu{
            flex-basis: 14%;
            ul{
                display: flex;
                flex-direction: column;
                gap: 6px;
                li{
                    transition: 0.5s;
                    white-space: nowrap;
                    cursor: pointer;
                    &.on{
                        margin-bottom: 18px;
                        span{
                            color: #efefef;
                            font-size: 55px;
                            text-shadow: 0px 0px 8px rgba(255,255,255,0.5);
                        }
                        p{
                            display: block;
                            color: #efefef;
                        }
                    }
                    span{
                        color: #707070;
                        font-size: 24px;
                        font-weight: bold;
                    }
                    p{
                        display: none;
                    }
                }
            }
        }
    }
    &.off {
        display: none;
    }
    @media (max-width : 1660px) {
        .main{
            .inner{
                .contents{
                    &.on{
                        /* transform: translateY(-1015px) !important; */
                    }
                }
            }
        }
    }
    @media (max-width : 1660px) {
        .main{
            .inner{
                .contents{
                    &.on{
                        /* transform: translateY(-1015px) !important; */
                    }
                }
            }
        }
    }
    @media (max-width : 1300px) {
        .inner{
            padding: unset !important;
            width: 100% !important;
            .sideMenu{
                ul{
                    height: 100%;
                    li{
                        &.on{
                            margin-bottom: unset;
                        }
                        font-size: 20px;
                        p{
                            display: none !important;
                        }
                    }
                }
            }
            .contents{
                &.on{
                    /* transform: translateY(-990px) !important; */
                }
            }

        }
    }
    @media (max-width : 1010px) {
        .main{
            .inner{
                flex-direction: column;
                position: relative;
                .sideMenu {
                    position: absolute;
                    top: 0;
                    transform: translateY(-15px);
                    z-index: 15;
                    ul{
                        flex-direction: row;
                        align-items: baseline;
                        gap: 18px;
                        li{
                            &.on{
                                span{
                                    font-size: 40px;
                                }
                            }
                            span{
                                font-size: 20px;
                            }
                        }
                    }
                }
                .contents{
                    margin-top: 60px;
                    &.on{
                        /* transform: translateY(-1025px) !important; */
                    }
                }
            }
        }
    }
    @media (max-width : 700px) {
        .main{
            .inner{
                .contents{
                    &.on{
                        /* transform: translateY(-915px) !important; */
                    }
                }
            }
        }
    }

` 

export const HeaderItemComponents = styled.div`
    cursor: pointer;
    display: flex;
    margin-left: 10.4167vw;
    gap: 4.5139vw;
    align-items: center;
    justify-content: space-between;
    margin-right: 10.6250vw ; 
    height: calc(100vh / 3.5 );
    div{
        display: flex;
        gap: 65px;
        h1{
            font-size   : 150px;
            color: rgba(255,255,255,0.8);
        }
        div{
            display: flex;
            flex-direction: column;
            gap: 8px;
            justify-content: center;
            strong{
                font-size: 100px;
                color: white;
                font-weight: bold;
            }
            p{
                color: #CECECE;
                transform: translateY(-20px);
            }
        }
    }
    .btn{

    }
    @media (max-width : 962px) {
        div{
            h1{
                font-size: 130px;
            }
            div{
                strong{
                    font-size: 80px;
                }
            }
        }
    }
    @media (max-width : 910px) {
        div{
            h1{
                display: none;
            }
            div{
                p{
                    display: none;
                }
            }
        }
    }
    @media (max-width : 800px) {
        div{
            div{
                p{
                    display: none;
                }
            }
        }
    }
` 

