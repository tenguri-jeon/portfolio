import styled from "styled-components";

export const ProductContainer = styled.ul`
    margin-left: 84px;
    flex-direction: row !important;
    height: unset !important;
    flex-wrap: wrap;
    gap:unset !important;
    width: unset !important;
    
    &.scroll{
        overflow-y: auto;
        height: calc(100vh - 340px )!important;
        ::-webkit-scrollbar {
        width: 10px;  
        height: 20px;  
    }
    ::-webkit-scrollbar-thumb{
        color: red;
        background: red;
    }
    ::-webkit-scrollbar-thumb {
        background: #e89a3e; 
        border: 2px solid #9b6a2f; 
        border-radius: 12px 12px 12px 12px;
    }   
    }

    
    @media (max-width : 1300px){
        margin-left: 32px;
    }

    @media (max-width : 1010px){
        margin-left: unset;
    }
`
export const ProductItemContainer = styled.li`
    font-family: 'SUITE-Regular', sans-serif;
    cursor: pointer;
    backdrop-filter: blur(25px);
    margin-right: 18px;
    margin-bottom: 18px;
    width: calc((100% - (18px * 2)) / 3 );
    border-radius: 18px;
    overflow: hidden;
    background: rgba(255,255,255,0.05);
    box-shadow: 0px 0px 50px rgba(98, 160, 241, 0.3) inset, 0px 5px 5px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    transition: 0.5s;
    display: flex;
    flex-direction: column;
    height: fit-content;
    &:nth-child(3n){
        margin-right: 0px;
    }
    &:hover{
        background: #131A26;
        border: none;
        border-top: 2px solid #b6c7e7;
        border-left: 2px solid #b6c7e7;
        box-shadow: unset;
        box-shadow: 0px 0px 32px rgba(54,86,167,0.5);
        /* transform: translate( -5px , -5px ); */
        img{
            transform: scale(1.2);
        }
    }
    figure{
        flex-basis: 30%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            transition: 1s;
        }
    }
    .product-wrap{
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px 17px 17px;
        height: 260px;
        justify-content: space-between;
        box-sizing: border-box;
        .skills-wrap{
            display: flex;
            flex-direction: unset;
            gap: 4px;
            height: unset;
            li{
                border: 1px solid #399189;
                color : #399189;
                padding: 0px 10px;
                border-radius: 4px;
                font-size: 10px;
                white-space: nowrap;
                &.html{
                    border-color: #E44F26;
                    color: #E44F26;
                }
                &.Typesciprt{
                    border-color: #3178C6;
                    color: #3178C6;
                }
                &.css{
                    border-color: #1572B6;
                    color: #1572B6;
                }
                &.js{
                    border-color: #EACA31;
                    color: #EACA31;
                }
                &.반응형{
                    border-color: #fff;
                    color: #fff;
                }
                &.react{
                    border-color: #0C98FF;
                    color: #0C98FF;
                }
                &.redux{
                    border-color: #A958FF;
                    color: #A958FF;
                }
                &.scss{
                    border-color: #FF58D5;
                    color: #FF58D5;
                }
                &.node\.js{
                    color: #10433E;
                }
                &.mysql{
                    border-color: #00608C;
                    color: #00608C;
                }
                &.스타일컴포넌트{
                    border-color:tomato ;
                    color: tomato;
                }
            }
        }
        .product-wrapper{
            display: flex;
            flex-direction: column;
            gap: 8px;
            span{
                font-size: 22px;
                line-height: 110%;
                color: #fff;
            }
            p{
                font-size: 14px;
                color: #C0C0C0;
            }
        }
        .btn-wrap{
            display: flex;
            width: 100%;
            gap: 8px;
        }
    }
    @media (max-width : 820px ) {
        .product-wrap{
            .product-wrapper{
                p{
                    height: 110px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
`