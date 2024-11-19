import styled from 'styled-components';

export const PlusBtn = styled.div`
    border: 1px solid #444952;
    width : 5.2083vw ;
    height : 5.2083vw ;
    display : flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
    color: #C8C8C9;

`
export const MinusBtn = styled.div`
    border: 1px solid #444952;
    width : 5.2083vw ;
    height : 5.2083vw ;
    display : flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
    color: #C8C8C9;
`
export const GoHomePageBtnCom = styled.button`
    border: none;
    border-top : 2px solid #bcd3ff;
    background: #4877ED;
    padding: 10px;
    color:white;
    border-radius: 36px;
    width: 100%;
    cursor: pointer;
    font-weight: bold;
    &:hover{
        box-shadow: 0px 0px 16px rgba(72, 120, 240, 0.5);
        text-shadow: 0px 0px 8px rgba(255,255,255,0.5) ;
    }
    `
export const DetailBtnCom = styled.button`
    border: none;
    border-top : 2px solid #BCFFC4;
    background: #1CB61C;
    padding: 10px;
    color:white;
    border-radius: 36px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        box-shadow: 0px 0px 16px rgba(72, 237, 85, 0.5);
        text-shadow: 0px 0px 8px rgba(255,255,255,0.5) ;
    }
`
export const ModalCon = styled.div`
    font-family: 'SUITE-Regular', sans-serif;
    .d-flex{
        display: flex;
    }
    .modal-wrap{
        background-color: rgba(37,47,62,0.5);
        padding: 0px 20px ;
        color: rgba(255,255,255,0.8);
        border-radius: 18px;
        text-align: center;
        box-sizing: border-box;
        width: fit-content;
    }
    .flexD-c{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    width: 90%;
    height: 90%;
    overflow: hidden;
    margin: 0 auto;
    padding: 0px 0px 30px 0;
    background-color: #161A20;
    backdrop-filter: blur(50px);
    box-shadow: 0px 0px 50px rgba(98, 160, 240, 0.15) inset , 0px 0px 50px rgba(0, 0, 0, 0.3) ;
    position: absolute;
    top: 50px;
    right: 50%;
    transform: translate(50% , 0%);
    .modal-header{
        padding: 12px 15px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background: #161A20;
        box-sizing: border-box;
        z-index: 100;
        align-items: center;
        span{
            color: white;
            font-size: 18px;
            font-weight: bold;
        }
        svg{
            cursor: pointer;
            transition: 0.5s;
            &:hover{
                color: rgba(255,255,255) !important;
            }
        }
    }
    .modal-body{
        overflow: auto;
        height: 100%;
        margin-bottom: 60px;

        figure.modal-bg{
            width: 100%;
            max-height: 325px;
            overflow: hidden;
            height: 100%;
            box-shadow: 0px 0px 16px rgba(0,0,0,0.3);
            img{
                width: 100%;
            }
        }
        .inner{
            width: 90%;
            margin: 0 auto;
            .modal-title{
                transform: translateY(-25px);
                line-height: 150%;
                div.d-flex{
                    align-items: baseline;
                    h1{
                        font-size: 100px;
                        color: white;
                        font-weight: bold;
                        text-shadow: 4px 4px 4px rgba(0,0,0,0.8);
                    }
                    span{
                        background: #4877ed ;
                        padding: 0 20px;
                        border-radius: 36px;
                        color: white;
                    }
                }
                p{
                    margin-top: 18px;
                    color: #d0d1d2;
                }
            }
            .con{
                .con1{
                    display: flex;
                    gap: 30px;
                    align-items: center;
                    div.videowrap{
                        cursor: pointer;
                        position: relative;
                        flex-basis: 50%;
                        overflow: hidden;
                        &:hover{
                            a{
                                opacity: 1;
                            }
                        }
                        video{
                            width: 100%;
                            object-fit: cover;
                        }
                        a{
                            transition: 0.3s;
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            opacity: 0;
                            background: rgba(0,0,0,0.8);
                            backdrop-filter: blur(4px);
                            width: 100%;
                            height: 100%;
                            text-align: center;
                            color: white;
                            font-size: 30px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                    }
                    .con1-text{
                        flex-basis: 50%;
                        display: flex;
                        flex-direction: column;
                        gap: 26px;
                        :nth-child(1){
                            margin-right: 50px;
                        }
                        :nth-child(2){
                            ul{
                                height: unset !important;
                                display: flex;
                                flex-direction: row !important;
                                :nth-child(1){
                                    margin-right: unset;
                                }
                            }
                        }
                        .d-flex{
                            strong{
                                color : rgba(255,255,255,0.8);
                                font-weight: bold;
                            }
                        }
                        .introduce{
                            strong{
                                color: rgba(255,255,255,0.8);
                            }
                            .modal-wrap{
                                margin-top: 8px;
                                text-align: start;
                                padding: 10px 15px;
                                border-radius: 0px;
                            }
                        }
                    }
                }
                .con2{
                    margin: 50px 0;
                    strong{
                        color: rgba(255,255,255,0.8);
                    }
                    .modal-wrap{
                        margin-top: 20px;
                        border-radius: 0px;
                        padding: 15px 10px;
                        width: 100%;
                        text-align: start;
                        display: flex;
                        flex-direction: column;
                        strong{
                            font-size: 22px;
                        }
                        span{
                            margin-left: 10px;
                            font-size: 16px;
                            &::before{
                                display: inline-block;
                                content: '';
                                width: 5px;
                                height: 5px;
                                border-radius: 5px;
                                background-color: rgba(255,255,255,0.8);
                                margin-bottom: 5px;
                                margin-right: 5px;
                            }
                        }
                    }
                }
                .con3{
                    margin-top: 30px;
                    width: 100%;
                    strong{
                        color: rgba(255,255,255,0.8);
                    }
                    ul{
                        width: 100%;
                        display: flex;
                        flex-wrap: wrap;
                        height: unset;
                        flex-direction: row !important;
                        gap:unset;
                        li{
                            cursor: pointer;
                            width: calc((100% - 2 * 18px) / 3);
                            margin-right: 18px;
                            margin-bottom: 18px;
                            &:nth-child(3n){
                                margin-right: unset;
                            }
                            img{
                                width: 100%;
                            }
                            span{
                                color: rgba(255,255,255,0.8);
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width : 1550px ) {
        .modal-body{
            figure.modal-bg{
                img{
                    /* width: fit-content; */
                    /* transform: translateX(-30px); */
                }
            }
        }
    }
    @media (max-width : 1300px ) {
        .modal-body{
            figure.modal-bg{
                img{
                    width: fit-content;
                    transform: translate(-23% , -22%);
                }
            }
            .inner{
                .modal-title{
                    div.d-flex{
                        h1{
                            font-size: 70px;
                        }
                    }
                }
                .con{
                    .con1{
                        flex-direction: column;
                        figure{
                            width: 100%;
                        }
                        .con1-text{
                            width: 100%;
                            .introduce{
                                .modal-wrap{
                                    width: 100%;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
export const TooltipCon = styled.div`
    background: #4877ED;
    color: white;
    border-radius: 8px;
    font-weight: bold;
    padding: 10px 20px;
    display: block;
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    transition: 0.5s;
    box-shadow: 0px 0px 16px rgba(84, 86, 167, 0.5);

`
