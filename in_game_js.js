//마우스 커서 컨트롤
//구글검색을 통해 참조하였음
document.addEventListener('mousedown', () => {
    document.body.classList.add('cursor-click');
});

document.addEventListener('mouseup', () => {
    document.body.classList.remove('cursor-click');
});



// document.addEventListener('DOMContentLoaded', function() {
//     let ready_sound = document.getElementById('ready_sound');
//     // 음소거 해제 (사용자 상호작용 후에만 작동할 수 있음)
//     setTimeout(function() {
//         ready_sound.muted = false;
//     }, 500); // 1초 후에 음소거 해제
// });







//도전자명 입력
let user = prompt('도전자 성함을 입력하세요.');
document.querySelector('.user').innerHTML = user + '님의 도전';
//구금검색을 통해 로컬스토리기 기능을 숙지하여 이용하였음.
localStorage.setItem('localStorageName', user);


window.addEventListener('load', () => {
    let ready_sound = document.getElementById('ready_sound');
    ready_sound.play();
})


//시작 전 준비 카운트
let readyContainer = document.getElementById('ready');
let readyNum = document.querySelector('.ready_content h1');
let readyCount = 5;
let readyTime = setInterval(() => {
    readyCount--;
    readyNum.innerHTML = readyCount + '초 뒤 시작';
}, 1000)

let readyBg = document.getElementById('dark_bg');

setTimeout(() => {
    clearInterval(readyTime);
    readyContainer.classList.add('active');
    readyBg.classList.add('active');
}, 5000)





//남은시간 카운트
let countNum = document.querySelector('.count');
let remainTime = document.querySelector('.remain');
let remainTimeCount = 125;
let time = setInterval(() => {
    remainTimeCount--;
    remainTime.innerHTML = remainTimeCount + '초 남음'


}, 1000)

setTimeout(() => {
    clearInterval(time);
}, 125000)




//실패 팝업
let failContainer = document.getElementById('fail');


setTimeout(() => {
    failContainer.classList.add('active');
    readyBg.classList.remove('active');
}, 125000)





//매뉴얼 모달 슬라이드
let btnManual = document.querySelector('.manual');
let main_contents = document.querySelector('.reg_container');
let config = document.querySelector('.config');
let manual_sound = document.getElementById('manual_sound');


btnManual.addEventListener('click', () => {
    if(main_contents.classList.contains('active_config')) {
        manual_sound.play();
        main_contents.classList.remove('active_config');
        config.classList.remove('active');
        console.log('Dev: if통과');
    }
    else {
        manual_sound.play();
        main_contents.classList.add('active_config');
        config.classList.add('active');
        console.log('Dev: else통과');
    }
})



//매뉴얼 모달 내 힌트 버튼 클릭
let hintBtn = document.querySelector('.hint');
let hintText = document.querySelector('.hintText');
let count = 0;


setTimeout(() => {
    manual_sound.play();
    main_contents.classList.add('active_config');
    config.classList.add('active');
}, 5000)


hintBtn.addEventListener('click', () => {

    if(count === 0) {
        hintBtn.innerHTML = '[힌트(접기)]';
        hintText.innerHTML = '다 찾은 것 같은데 아직 남았다고요? <br> 상단 내비게이션과 매뉴얼 창을 제외하고는 <br> 모두 게임영역입니다. 잘 찾아보세요!';
        count++;
    }
    else if(count === 1) {
        hintBtn.innerHTML = '[힌트(펼치기)]';
        hintText.innerHTML = '';
        count--;
    }

})



//버튼클릭 동작
let btnHome = document.querySelector('.home');
let btnFailhome = document.querySelector('.fail_home')
let btnRetry = document.querySelector('.retry');

btnHome.addEventListener('click', () => {
    window.location.href = './index.html';
})
btnFailhome.addEventListener('click', () => {
    window.location.href = './index.html';
})
btnRetry.addEventListener('click', () => {
    window.location.href = './in_game.html';
})





//REMAIN 구현
let displayRemain = document.querySelector('.count');
let remainElement = 14;





//게임구현
let gm_regContainerP = document.querySelector('.top');
let gm_title = document.querySelector('.title');
let gm_titleText = document.querySelector('.title h1');

let clearContainer = document.getElementById('clear');

gm_title.addEventListener('click', () => {
    gm_titleText.classList.remove('active');
    console.log('성공적으로 제거됨:', gm_title);
})


let divs = document.querySelectorAll('div');
let correct_sound = document.getElementById('correct_sound');
let clear_sound = document.getElementById('clear_sound');

divs.forEach(event => {
    event.addEventListener('click', (i) => {
        /*초반에 작성한 코드로는 한 번 클릭시 여러 개의 클래스가 동시에 삭제되는 버그가 있어
        구글검색을 통해 stopPropagation() 기능을 참조하여 코드를 수정하였음

        메서드의 상세한 기능은 ChatGPT가 설명해주었으며 클릭된 요소의 자식 요소까지
        전파되는 것을 방지하는 기능으로 이해함*/

        i.stopPropagation();


        if(event.classList.length > 0) {
            console.log('클래스를 포함하고 있음');
            correct_sound.play()

            event.className = '';
            console.log('클래스가 성공적으로 제거됨: ', event);

            remainElement--;
            displayRemain.innerHTML = remainElement + '개 남음';




            if(remainElement === 0){  //성공
                clearContainer.classList.add('active');
                readyBg.classList.remove('active');
                clear_sound.play();

                setTimeout(() => {
                    window.location.href = './clear.html';
                }, 3000);
            }
        }
        else {
            console.log('클래스를 포함하고 있지 않음');
        }

    })

})




