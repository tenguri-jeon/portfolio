export default[
    {
        id : 1 , 
        skills : [
            {id : 1 , con : 'react'},
            {id : 2 , con : 'redux'},
            {id : 3 , con : '스타일컴포넌트'}
        ],
        mainimg : 'dessert39bg.gif' , 
        type : '팀 프로젝트',
        name: 'Dessert39 [미완성]',
        bg: 'DESSERT39_bg.png' , 
        modalbg : 'DESSERT39_modalbg.png',
        con : `
            미완성 페이지입니다
        `  ,
        category : 'WEB PROJECT',
        duration : '1달 반',
        introduce : `
            아직 제작중에 있습니다.
        `,
        trouble : [

        ],
        function_item : [
            {id : 1 , con : '버튼 클릭시 스크롤 이동 기능'},
            {id : 2 , con : 'modal창'},
            {id : 3 , con : '각 제품의 데이터에 따라 다른 contents 표출'},
            {id : 4 , con : '음료의 경우 몇 컨텐츠에 따라 filer 기능'},
        ],
        url:'',
        workScreen : [
            // {id : 1 , title : 'intro' , Ktitle: '인트로' ,  imgurl : 'hbaf_img1.png'},
        ]
    },
    {
        id : 2 , 
        skills : [
            {id : 1 , con : 'react'},
            {id : 2 , con : 'redux'},
            {id : 3 , con : '스타일컴포넌트'}
        ],
        mainimg : 'note_video.mp4' , 
        type : '개인 프로젝트',
        name: 'note 프로젝트',
        bg: 'Noteproject_bg.png' , 
        modalbg : 'note_modalbg.png',
        con : `REDUX를 사용하여 제작한 페이지 입니다. <br>
                리액트 기초 문법 공부를 마친 후  <br>
                공부한 내용을 활용 해 보고자 만든 토이 프로젝트입니다.`,
        category : 'WEB PROJECT',
        duration : '2주',
        introduce : `
            나의 note 페이지 입니다
            <br><br>
            나의 note를 만들어 일정을 만들고 수정하고 삭제 할 수 있도록 만들어 보았습니다
            <br><br>
            뿐만 아니라 라이트모드 , 다크모드 2가지 모드를 만들얼 취향대로 골라 사용할 수 있도록 제작하였습니다.<br>
            server 와 연결할 예정입니다.
        `,
        skillintroduce : 
        `
            라이브러리를 사용하지 않고 순수 자바스크립트로 제작.
        `,
        trouble : [
            // {id: 1 , title : '배우 사진을 클릭하였을때 하위 이미지가 바뀌지 않음' , con : `첫번째 배우의 사진을 클릭한 다음 다른 배우를 클릭하면 사진이 바뀌어야 하는데 바뀌지 않는 문제를 겪고 해결되지 않아 어려움을 겪었습니다.
            // react 특성상 props가 전달되고 내용이 바뀌면 함께 바뀌지 않는다는 문제를 발견하여 useEffect를 사용하여 해결하였습니다. `},
        ],
        function_item : [
            {id : 1 , con : '라이트 / 다크모드 테마 구현 (초기값 라이트 모드로 설정)'},
            {id : 2 , con : '노트 생성 기능'},
            {id : 3 , con : '노트 수정 기능'},
            {id : 4 , con : '노트 삭제 기능'},
            {id : 5 , con : '필터 정렬 기능'},
            {id : 6 , con : '검색기능'},
            {id : 7 , con : '날짜 및 시간 표시 기능'},
        ],
        url:'https://tenguri-jeon.github.io/tenguri-jeon.github.io.note/',
        workScreen : [
            {id : 1 , title : 'main' , Ktitle: '라이트모드' ,  imgurl : 'note_1.png'},
            {id : 2 , title : 'main' , Ktitle: '다크모드' ,  imgurl : 'note_2.png'},
        ]
    },
    {
        id : 3 , 
        skills : [
            {id : 1 , con : 'react'},
            {id : 2 , con : 'redux'},
            {id : 3 , con : '스타일컴포넌트'}
        ],
        mainimg : 'nike_video.mp4' , 
        type : '개인 프로젝트',
        name: 'NIKE',
        bg: 'nike_mainimg.png' , 
        modalbg : 'NIKE_modalbg.png',
        con : `Redux 를 배우고 사용법을 숙지하기 위해 <br>
        미니멀하게 제작한 NIKE 홈페이지 토이프로젝트 입니다.  `  ,
        category : 'WEB PROJECT',
        duration : '3주',
        introduce : `
        Redux를 어디에 적용하면 공부가 될까 생각하다가 <br>
        요즘 관심있는 나이키 쇼핑몰을 선정하여 제작하게 되었습니다.
        <br><br>
        Redux를 사용하여 전체적인 홈페이지를 관리 , 설정하는 방법을 숙지하기 위하여 제작한 홈페이지 입니다. <br>
        현재 checkbox를 이용한 filter 부분 수정 및 추후 결재 클릭 시 처리 방법을 수정 할 계획입니다.
        `,
        trouble : [

        ],
        function_item : [
            {id : 1 , con : '상품 정렬 기능'},
            {id : 2 , con : 'Router 기능 적용'},
            {id : 3 , con : '장바구니 물건의 갯수 따라 금액 변경 기능'},
            {id : 4 , con : 'useEffect 사용하여 5초 후 모달 사라지는 기능 구현 '},
        ],
        url:'https://tenguri-jeon.github.io/#/',
        workScreen : [
            {id : 1 , title : 'intro' , Ktitle: '메인화면' ,  imgurl : 'nike_1.png'},
            {id : 2 , title : 'main' , Ktitle: '쇼핑화면' ,  imgurl : 'nike_2.png'},
            {id : 3 , title : 'con1' , Ktitle: 'modal화면' ,  imgurl : 'nike_3.png'},
            {id : 4 , title : 'con2' , Ktitle: '장바구니' ,  imgurl : 'nike_4.png'},
        ]
    },
    {
        id : 4 , 
        skills : [
            {id : 1 , con : 'react'},
            {id : 2 , con : 'scss'}
        ],
        mainimg : 'tears_video.mp4' , 
        type : '개인 프로젝트',
        name: '눈물의 여왕',
        bg: 'QUEEN-OF-TEARS_bg.png' , 
        modalbg : 'Qeen_modalbg.png',
        con : `REACT 만 사용하여 제작한 페이지 입니다. <br>
                리액트를 처음 배우고 Props 를 공유하는 부분에서 어려움을 겪어, <br>
                라우터를 사용하지 않고 리액트만 사용하여 제작한 연습용 페이지 입니다.`,
        category : 'WEB PROJECT',
        duration : '한달',
        introduce : `
            TvN의 눈물의 여왕 페이지를 참고하여 <br>
            눈물의 여왕에 출현하는 배우들을 소개하는 홈페이지 입니다.
            <br><br>
            상단의 탭을 통해 궁금한 인물을 클릭하여 인물에 대한 상세정보를 제공 해 줍니다.
            <br><br>
            캐릭터의 특징 뿐만 아니라 역할을 맡고 있는 배우들의 정보와 사진을
            보기 좋게 정리 해 두었습니다.
        `,
        skillintroduce : 
        `
            라이브러리를 사용하지 않고 순수 자바스크립트로 제작.
        `,
        trouble : [
            {id: 1 , title : '배우 사진을 클릭하였을때 하위 이미지가 바뀌지 않음' , con : `첫번째 배우의 사진을 클릭한 다음 다른 배우를 클릭하면 사진이 바뀌어야 하는데 바뀌지 않는 문제를 겪고 해결되지 않아 어려움을 겪었습니다.
            react 특성상 props가 전달되고 내용이 바뀌면 함께 바뀌지 않는다는 문제를 발견하여 useEffect를 사용하여 해결하였습니다. `},
        ],
        function_item : [
            {id : 1 , con : '인물 tab 메뉴 정렬 기능'},
            {id : 2 , con : '이미지 클릭 시 변경 기능'},
            {id : 3 , con : 'tab메뉴'},
        ],
        url:'https://tenguri-jeon.github.io/drama-Queen-of-tears/',
        workScreen : [
            {id : 1 , title : 'main' , Ktitle: '메인화면' ,  imgurl : 'queen_mainimg.png'},
        ]
    },
    {
        id : 5 , 
        skills : [
            {id : 1 , con : 'html'},
            {id : 2 , con : 'css'},
            {id : 3 , con : 'js'},
        ],
        mainimg : '국립세계문자_video.mp4' , 
        type : '팀 프로젝트',
        name: '국립세계문자박물관',
        bg: '세계문자박물관_bg.png' , 
        modalbg : '세계문자박물관_modalbg.png',
        con : `
            팀 프로젝트에서 리더를 맡아 제작한 리뉴얼 홈페이지 입니다. <br>
            HTML CSS JS를 사용하여 제작한 페이지로 <br>
            라이브러리를 사용하지 않고, 바닐라 스크립트를 사용하여 제작한 페이지입니다.
        `,
        category : 'WEB PROJECT',
        duration : '3주',
        introduce : `
            국립세계문자 박물관 클론페이지를 작업하였습니다.<br>
            <br>
            메인페이지를 맡게 되어, 제가 맡은 메인 화면은 직접 디자인하고 퍼블리싱 하여 제작한 페이지 입니다.
            정보전달이 중요한 페이지라 생각이 되어,  첫 페이지에는 정보 위주로 컨텐츠를 넣어 디자인 및 제작하였습니다.
            <br><br>
            조의 리더를 맡아 스크립트 작성의 어려움을 겪는 조원의 코드를 함께 살펴보며 
            대부분의 코드를 함께 작성하였습니다.
        `,
        skillintroduce : 
        `
            라이브러리를 사용하지 않고 순수 자바스크립트로 제작.
        `,
        trouble : [
            {id: 1 , title : '[어려웠던점] Search 및 paging ' , con : `조원이 맡은 게시판 부분에서 seach 와 paging 처리에 있어 어려움을 겪었습니다.
            저 또한 처음 사용하는 함수가 많아 어려움이 있었지만, filter 와 paging 에 관련된 블로그를 찾아보며 해결에 힘썼습니다.`},
        ],
        function_item : [
            {id : 1 , con : '자동 슬라이드 효과'},
            {id : 2 , con : '스크롤에 따라 애니메이션 반응'},
            {id : 3 , con : '게시판 정렬기능'},
            {id : 4 , con : '게시판 검색기능'},
        ],
        url:'https://tenguri-jeon.github.io/National-Museum-of-World-Writing-System/index.html',
        workScreen : [
            {id : 1 , title : 'main' , Ktitle: '메인화면' ,  imgurl : 'NMWW_img1.png'},
            {id : 2 , title : 'main' , Ktitle: '메인컨텐츠1' ,  imgurl : 'NMWW_img2.png'},
            {id : 3 , title : 'con1' , Ktitle: '메인컨텐츠2' ,  imgurl : 'NMWW_img3.png'},
            {id : 4 , title : 'con2' , Ktitle: '게시판' ,  imgurl : 'NMWW_img4.png'},
            {id : 5 , title : 'con3' , Ktitle: '서브페이지' ,  imgurl : 'NMWW_img5.png'},
        ]
    },
    {
        id : 6, 
        skills : [
            {id : 1 , con : 'html'},
            {id : 2 , con : 'css'},
            {id : 3 , con : 'js'}
        ],
        mainimg : 'taskwolrd_video.mp4' , 
        type : '개인 프로젝트',
        name: 'TASK WORLD',
        bg: 'Taskworld_bg.png' , 
        modalbg : 'taskworld_modalbg.png',
        con : ` 'API' 나 'JQUERY' '라이브러리' 를 사용하지 않고  <br>
                오직 Javascript만 사용하여 제작한 TASKWORLD 클론 사이트 입니다. `,
        category : 'WEB PROJECT',
        duration : '두달',
        introduce : `
            직장 선배가 공부 해보라며 권유하여 제작한 클론 페이지 입니다.
            <br><br>
            API , 라이브러리를 사용하지 않고 제작한 페이지로, <br>
            데이터를 저장하기 위하여 localStorage에 데이터를 저장하도록 코드를 작성하였습니다. 
            <br><br>
            Taskworld 에 있는 90%의 기능을 자바스크립트로 구현 하였습니다.
        `,
        skillintroduce : 
        `
            라이브러리를 사용하지 않고 순수 자바스크립트로 제작.
        `,
        trouble : [
            {id: 1 , title : '데이터 저장하기' , con : ` 퍼블리셔로 근무하던 중, 서버에 데이터를 저장하는 방법에 대한 지식 부족으로 어려움을 겪었습니다. 
        그 과정에서 로컬스토리지(LocalStorage)를 알게 되었고, 이를 활용하여 데이터를 저장하는 방법을 익히게 되었습니다.`},
        ],
        function_item : [
            {id : 1 , con : '프로젝트 생성기능'},
            {id : 2 , con : '프로젝트 속 미니 프로젝트 생성 기능'},
            {id : 3 , con : '이름 및 내용 변경 기능'},
            {id : 4 , con : '삭제기능'},
            {id : 5 , con : '프로젝트 완료 확인'},
            {id : 6 , con : 'localStorage 저장 기능'},
        ],
        url:'https://tenguri-jeon.github.io/Taskworld/',
        workScreen : [
            {id : 1 , title : 'main' , Ktitle: '메인화면' ,  imgurl : 'taskworld_1.png'},
            {id : 2 , title : 'sidebar' , Ktitle: '사이드바' ,  imgurl : 'taskworld_2.png'},
            {id : 3 , title : 'content' , Ktitle: '컨텐츠 추가' ,  imgurl : 'taskworld_3.png'},
        ]
    },
    {
        id : 7, 
        skills : [
            {id : 1 , con : 'html'},
            {id : 2 , con : 'css'},
            {id : 3 , con : 'js'},
            {id : 4 , con : '반응형'},
        ],
        mainimg : 'HBAF_video.mp4' , 
        type : '개인 프로젝트',
        name: 'HBAF',
        bg: 'HBAF_bg.png' , 
        modalbg : 'HBAF_modalbg.png',
        con : `기획 부터 디자인까지 전부 제가 작업했습니다. <br>
                HTML , CSS , js를 처음 배운 이후 처음으로 제작한 리뉴얼 페이지로, <br>
                observe , scroll event  와  css 의 animation을 사용하여 만든 톡톡튀는 홈페이지 입니다.`  ,
        category : 'WEB PROJECT',
        duration : '한달',
        introduce : `
        귀여운 HBAF 캐릭터들이 주인공인 HBAF 반응형 홈페이지 입니다.
        <br><br>
        홈페이지에서는 CSS 애니메이션 효과를 활용하여, 캐릭터들이 통통 튀며 생동감 있게 표현되었습니다.
        <br><br>
        또한, 라이브러리를 사용하지 않고 순수 자바스크립트(Vanilla JavaScript)로 캐릭터들이 화면에 등장할 때만 움직이도록 구현했습니다. 
        `,
        trouble : [

        ],
        function_item : [
            {id : 1 , con : '인트로 애니메이션 효과'},
            {id : 2 , con : '스크롤에 따라 Headr 반응'},
            {id : 3 , con : '스크롤에 따라 애니메이션 반응'},
        ],
        url:'https://tenguri-jeon.github.io/HBAF/',
        workScreen : [
            {id : 1 , title : 'intro' , Ktitle: '인트로' ,  imgurl : 'hbaf_img1.png'},
            {id : 2 , title : 'main' , Ktitle: '메인화면' ,  imgurl : 'hbaf_img2.png'},
            {id : 3 , title : 'con1' , Ktitle: '컨텐츠화면1' ,  imgurl : 'hbaf_img3.png'},
        ]
},
    
]