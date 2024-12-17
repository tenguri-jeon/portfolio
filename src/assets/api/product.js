export default[
    {
        id : 1 , 
        skills : [
            {id : 1 , con : 'react'},
            {id : 2 , con : 'Typesciprt'},
            {id : 3 , con : '스타일컴포넌트'}
        ],
        mainimg : 'hangman_video.mp4' , 
        type : '개인 프로젝트',
        name: 'Hangman Game',
        bg: 'hangman.png' , 
        modalbg : 'hangmanbg.png',
        con : `
            axios로 영단어를 받아와 단어를 받아와 <br>
            사용자가 알파벳으로 유추하여  단어를 맞추는 간단한 게임으로, <br>
            Typescript 를 공부하고 적용하기 위해 제작한 토이프로젝트입니다. 
        `  ,
        category : 'WEB PROJECT',
        duration : '3주',
        introduce : `
            Typescipt를 공부하여 적용해 본 토이 프로젝트 입니다. <br><br>

            어렸을적 hangman 게임을 했던 기억을 떠올려 제작한 프로젝트로 <br>
            axios를 사용하여 영단어를 가져와 난이도를 나누고, <br>
            input 요소에 키보드로 알바벳을 작성하여 유추하는 게임입니다.<br>
            
            github : <a href="https://github.com/tenguri-jeon/hangman">https://github.com/tenguri-jeon/hangman</a>
        `,
        trouble : [
            // {id: 1 , title : 'Menu쪽 Menu의 같은 페이지 구조로 하나의 jsx 사용해야할지 다양한 jsx를 제작해야 할지에 대한 고민' , con : `Menu쪽 페이지를 제작하며, 디저트와 beverage MD 페이지 모두 같은 구조를 가지고 있음을 볼 수 있었습니다. 세개의 JSX를 만들어 페이지를 구성하려던 중 "하나로 할 수 있겠는데?"라는 생각이 들어 하나의 페이지로 표현하기로 하였습니다. 어떻게 해야하나 감이 잡히지 않았지만, app.jsx에서 3개의 path를 다르게 설정한 다음, 페이지 클릭시 바뀐 url을 useLocation을 사용하여 path위치를 가져와 path위치에 맞는 data를 redux로 가져오게 설정하여 페이지를 완성하였습니다`},
            // {id: 2 , title : '조건부 렌더링을 활용한 modal창 구현에 대한 고민' , con : `1번과 비슷한 고민으로, Menu쪽 Modal을 클릭할 시 모두 똑같은 구성을 하고 있을것이라는 생각과 달리, 조금씩 다른 Modal로 구성되어 있었습니다. 처음에는 위와 같이 "여러개의 components를 만든 다음 데이터를 넣어줘야하나?" 라는 생각이 있었지만, data를 생성할 때 필요한 데이터를 만들고, 필요없는 데이터는 빈칸으로 두었습니다. 이후 modal이 생성될 때, ()가 없으면 생성하지 말아라는 명령어를 만들어 각가 조금씩 다른 Modal를 표현할 수 있었습니다.`}
        ],
        function_item : [
            {id : 1 , con : 'Axios를 사용한 외부 데이터 가져와 사용함'},
            {id : 2 , con : '한글 입력 시 "영어만 사용 가능합니다" 알림'},
            {id : 3 , con : '동일한 알파벳 입력 시 "중복되었습니다" 알림'},
            {id : 4 , con : '8번의 유추기회 상실시 정답 알려주고 다음문제로 이동'},
            {id : 5 , con : '8번 이내로 정답 시 정답입니다 알림 후 다음문제로 이동동'},
            {id : 6 , con : 'Router를 사용하여 홈으로 이동 기능 구현현'},
            {id : 7 , con : 'useEffect와 setInterval을 사용하여 5초 후 모달 자동으로 사라지기'},
        ],
        url:'https://tenguri-jeon.github.io/hangman.gitub.io/',
        workScreen : [
            {id : 1 , title : 'homepage' , Ktitle: '[홈화면면]' ,  imgurl : 'hangman.png'},
            {id : 2 , title : 'game' , Ktitle: '[게임화면]' ,  imgurl : 'hangman_2.png'},
        ]
    },
    {
        id : 2 , 
        skills : [
            {id : 1 , con : 'react'},
            {id : 2 , con : 'redux'},
            {id : 3 , con : '스타일컴포넌트'},
            {id : 4 , con : '반응형'}
        ],
        mainimg : 'dessert39_video.mp4' , 
        type : '팀 프로젝트',
        name: 'Dessert39',
        bg: 'DESSERT39_bg.png' , 
        modalbg : 'DESSERT39_modalbg.png',
        con : `
            React로 제작한 dessert39 팀 클론 페이지 입니다. <br>
            introPage , Menu , Store 메뉴를 담당하여 제작하였습니다.
        `  ,
        category : 'WEB PROJECT',
        duration : '1달 반',
        introduce : `
            배운 React를 효과적으로 보여주기 위해서는 다양한 제품과 그에 따른 많은 데이터를 보여줄 수 있는 홈페이지로 선정하는 것이 좋겠다는 생각이 들어 Dessert39페이지를 선정하게 되었습니다.<br><br>

            페이지 분담은 자신이 원하는 페이지를 선정하여 나누었으며 , 저는 그간 배운 지식을 보여줄 수 있는, 프론트엔드쪽 기능을 조금 더 많은 것을 보여줄 수 있다고 판단되어 Menu쪽과 Kakao api를 사용하는 Store 작업을 전담하여 작업하였습니다. <br><br>
            
            github : <a href="https://github.com/TeamProject-Dessert39/dessert39" target="_blank" rel="noopener noreferrer">https://github.com/TeamProject-Dessert39/dessert39</a>
        `,
        trouble : [
            {id: 1 , title : 'Menu쪽 Menu의 같은 페이지 구조로 하나의 jsx 사용해야할지 다양한 jsx를 제작해야 할지에 대한 고민' , con : `Menu쪽 페이지를 제작하며, 디저트와 beverage MD 페이지 모두 같은 구조를 가지고 있음을 볼 수 있었습니다. 세개의 JSX를 만들어 페이지를 구성하려던 중 "하나로 할 수 있겠는데?"라는 생각이 들어 하나의 페이지로 표현하기로 하였습니다. 어떻게 해야하나 감이 잡히지 않았지만, app.jsx에서 3개의 path를 다르게 설정한 다음, 페이지 클릭시 바뀐 url을 useLocation을 사용하여 path위치를 가져와 path위치에 맞는 data를 redux로 가져오게 설정하여 페이지를 완성하였습니다`},
            {id: 2 , title : '조건부 렌더링을 활용한 modal창 구현에 대한 고민' , con : `1번과 비슷한 고민으로, Menu쪽 Modal을 클릭할 시 모두 똑같은 구성을 하고 있을것이라는 생각과 달리, 조금씩 다른 Modal로 구성되어 있었습니다. 처음에는 위와 같이 "여러개의 components를 만든 다음 데이터를 넣어줘야하나?" 라는 생각이 있었지만, data를 생성할 때 필요한 데이터를 만들고, 필요없는 데이터는 빈칸으로 두었습니다. 이후 modal이 생성될 때, ()가 없으면 생성하지 말아라는 명령어를 만들어 각가 조금씩 다른 Modal를 표현할 수 있었습니다.`}

        ],
        function_item : [
            {id : 1 , con : 'React Router를 활용하여 하나의 컴포넌트를 다른 페이지로 네비게이션 기능 구현'},
            {id : 2 , con : '상태를 관리하고 조건부 렌더링 활용하여 modal창 구현'},
            {id : 3 , con : 'swiper라이브러리를 사용하여 슬라이드 기능 구현'},
            {id : 4 , con : 'useRef훅을 사용하여 버튼 클릭 특정 위치로 스크롤 이동기능 구현'},
            {id : 5 , con : 'react의 상태관리 와 배열 filter()메서드를 활용하여 데이터 필터링 기능 구현 '},
            {id : 6 , con : 'kakao api를 이용한 지도 구현'},
            {id : 7 , con : '반응형 웹사이트 구현'},
        ],
        url:'https://teamproject-dessert39.github.io/dessert39/dist/',
        workScreen : [
            {id : 1 , title : 'intro' , Ktitle: '[인트로]' ,  imgurl : 'dessert39_1.png'},
            {id : 2 , title : 'intro' , Ktitle: '[Menupage1]' ,  imgurl : 'dessert39_2.png'},
            {id : 3 , title : 'intro' , Ktitle: '[Menupage2]' ,  imgurl : 'dessert39_3.png'},
            {id : 4 , title : 'intro' , Ktitle: '[Menu Modal]' ,  imgurl : 'dessert39_4.png'},
            {id : 5 , title : 'intro' , Ktitle: '[store]' ,  imgurl : 'dessert39_5.png'},
            {id : 6 , title : 'intro' , Ktitle: '[store Modal]' ,  imgurl : 'dessert39_6.png'},
        ]
    },
    {
        id : 3 , 
        skills : [
            {id : 1 , con : 'react'},
            {id : 2 , con : 'redux'},,
            {id : 4 , con : 'node.js'},
        ],
        mainimg : 'note_video.mp4' , 
        type : '개인 프로젝트',
        name: 'note 프로젝트',
        bg: 'Noteproject_bg.png' , 
        modalbg : 'note_modalbg.png',
        con : `React 와 node.js를 사용하여 제작한 페이지 입니다. <br>
               node.js를 사용하여 현재는 backend와 연결까지 마친 상태입니다.<br>
            `,
        category : 'WEB PROJECT',
        duration : '2주',
        introduce : `
            나의 note 페이지로 , 프론트엔드 90% , 백엔드 10% 로 제작한 프로젝트입니다. <br>
            Node.js를 백엔드 서버로 사용하여 , 사용자가 일정추가 , 수정 , 삭제를 할 수 있도록 note데이터를 관리합니다.<br><br>
            뿐만 아니라 라이트모드 , 다크모드 2가지 모드를 만들얼 취향대로 골라 사용할 수 있도록 제작하였습니다.
            <br><br>
            github : <a href="https://github.com/tenguri-jeon/noteproject" target="_blank" rel="noopener noreferrer">https://github.com/tenguri-jeon/noteproject </a>

            
            `,
        skillintroduce : 
        `
            라이브러리를 사용하지 않고 순수 자바스크립트로 제작.
        `,
        trouble : [
            {id: 1 , title : '백엔드 데이터와 프론트페이지의 연결의 여려움' , con : `node.js를 사용하여 백엔드 쪽과 프론트엔드를 연결하는데에 있어 어려움울 겪었습니다. 대부분 처음 해 보는 것에 대한 미숙함에 나온 오타와 명령어로 인한 어려움이 있어, 정보를 찾고 적용하는데 있어 어려움을 겪었습니다.`},
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
        id : 4 , 
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
            API , 라이브러리를 사용하지 않고 제작한 페이지로,
            <br><br>
            Taskworld 에 있는 대부분의 기능을 자바스크립트로 구현 하였습니다.
            <br><br>
            github : <a href="https://github.com/tenguri-jeon/Taskworld" target="_blank" rel="noopener noreferrer">https://github.com/tenguri-jeon/Taskworld </a>

        `,
        skillintroduce : 
        `
            라이브러리를 사용하지 않고 순수 자바스크립트로 제작.
        `,
        trouble : [
        //     {id: 1 , title : '데이터 저장하기' , con : ` 퍼블리셔로 근무하던 중, 서버에 데이터를 저장하는 방법에 대한 지식 부족으로 어려움을 겪었습니다. 
        // 그 과정에서 로컬스토리지(LocalStorage)를 알게 되었고, 이를 활용하여 데이터를 저장하는 방법을 익히게 되었습니다.`},
        ],
        function_item : [
            {id : 1 , con : '새 업무리스트 만들기 클릭 시 지정한 이름으로 새로운 컴포넌트 생성 기능구현'},
            {id : 3 , con : '프로젝트 이름 수정 및 삭제기능구현'},
            {id : 4 , con : 'click이벤트 사용하여 위치탐지 후 modal창 띄우는 기능구현'},
            {id : 5 , con : '업무 리스트 속 checkbod 사용하여 todolist기능 구현'},
            {id : 6 , con : '작업 완료 시, 위에 있던 프로젝트가 완료된 업무로 이동되는 기능구현'},
        ],
        url:'https://tenguri-jeon.github.io/Taskworld/',
        workScreen : [
            {id : 1 , title : 'main' , Ktitle: '메인화면' ,  imgurl : 'taskworld_1.png'},
            {id : 2 , title : 'sidebar' , Ktitle: '사이드바' ,  imgurl : 'taskworld_2.png'},
            {id : 3 , title : 'content' , Ktitle: '컨텐츠 추가' ,  imgurl : 'taskworld_3.png'},
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
            <br><br>
            github : <a href="https://github.com/tenguri-jeon/National-Museum-of-World-Writing-System" target="_blank" rel="noopener noreferrer">https://github.com/tenguri-jeon/National-Museum-of-World-Writing-System </a>

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
            {id : 1 , con : '바닐라 js 사용하여 자동 슬라이드 효과구현'},
            {id : 2 , con : 'observe() 와 foreach() 함수 사용하여 스크롤에 따라 애니메이션 반응 구현'},
            {id : 3 , con : '보여주기 원하는 갯수를 변수로 받아 paging 기능 구현 및 정렬기능 구현 '},
            {id : 4 , con : 'filter()메서드를 활용하여 데이터 필터링 기능 구현 및 데이터 유효성 검사 기능 구현'},
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
        id : 6 , 
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
        id : 7 , 
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
        react를 활용하여 상태관리와 컴포넌트 간 데이터 흐름, 라우팅을 효율적으로 처리하였습니다.
        `,
        trouble : [

        ],
        function_item : [
            {id : 1 , con : 'input box를 사용하여 상품 정렬 기능 구현'},
            {id : 2 , con : 'React Router 사용하여 페이지 이동 구현'},
            {id : 3 , con : '장바구니 물건의 갯수가 변경됨에 따라 가격이 함께 변경될 수 있도록 react 상태 관리 기능 구현'},
            {id : 4 , con : 'useEffect 와 setTimeout 이용하여 5초 후 모달 사라지는 기능 구현 '},
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
        id : 8, 
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