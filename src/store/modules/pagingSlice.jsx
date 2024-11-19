import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sideBar : [
        {
            type: 'introduce',
            id: 1,
            con: [
                { id: 1, title: 'SKILLS', con: '이런 것들을 할 수 있어요!', isChk: true },
                { id: 2, title: 'CAREER', con: '', isChk: false },
            ],
            isChk : false
        },
        {
            type: 'product',
            id: 2,
            con: [
                { id: 1, title: '작업물', con: '이런 것들을 만들었어요!', isChk: true },
            ],
            isChk : false
        },
        {
            type: 'product',
            id: 3,
            con: [],
            isChk : false
        },
    ],
    headerData : [
        {id : 1 , link : 'inroduce',  title : '소개' , con : `전규리의 포트폴리오 입니다 :) <br> 제가 다룰 수 있는 tool과 저의 이력서에 대해 보여드릴게요` ,isChk : false},
        {id : 2 , link : 'product',  title : '작업물' , con : '작업물을 정리 해 둔 페이지 입니다. <br>  제가 작업 한 작업물에 대한 설명과 함께 페이지를 볼 수 있습니다.' ,isChk : false},
        {id : 3 , link : 'contact',  title : 'CONTACT' , con : '깃허브 페이지와 함께 개인정보를 적어 두었습니다 :)' ,isChk : false}
    ],
    currentSidebar : [],
    transition : false,
    modal : false,
    currentProduct : [],
};

export const pagenationSlice = createSlice({
    name: 'pagenation',
    initialState,
    reducers: {
        onpageOn (state, action) {
            state.transition = false
        },
        onSlide (state, action) {
            state.headerData = state.headerData.map(item => item.id === action.payload ? {...item , isChk : !item.isChk} : {...item , isChk : false})       
            state.currentSidebar = state.sideBar.find(item => item.id === action.payload )
        },
        SlideDetail (state, action) {
            if (state.currentSidebar && state.currentSidebar.con) {
                state.currentSidebar.con = state.currentSidebar.con.map(item => 
                    item.id === action.payload ? { ...item, isChk: true } : { ...item, isChk: false }
                );
                if (state.currentSidebar.con[1].isChk === true) {
                    state.transition = true;
                }else{
                    state.transition = false
                }
            }
        },
        modalon (state , action) {
            state.modal = true
            state.currentProduct = action.payload
        },
        modalclose (state , action) {
            state.modal = false
        }
    },
});

export const {onSlide , SlideDetail , modalon , modalclose , onpageOn} = pagenationSlice.actions;
export default pagenationSlice.reducer;


