
window.addEventListener('DOMContentLoaded', () => {
    let sub_sound = document.getElementById('sub_sound');
    sub_sound.play();
});

//외부 스크립트 참조 없이 타이핑 애니메이션 구현
//스크립트 알고리즘은 구글검색을 코드를 참조하였음.
document.addEventListener('DOMContentLoaded', () => {
    let text = "      당신은 여느 개발자와 다름 없는 평범하고도 평범한 프론트엔드 개발자입니다. <br><br>\n" +
        "      이러한 평범함에 질려버리고 만 당신은 무언가 색다르고 남들과는 다른 것을 하고싶어 합니다. <br><br>\n" +
        "      그러던 중 NO CSS CLUB이라는 이상한 모임을 알게 되는데, 말 그대로 <br>\n" +
        "      오직 극단적으로 HTML만을 사용하여 웹을 만드는 것이었습니다. 이 황당하고도 어이 없는 모임에 <br>\n" +
        "      당신은 또 신처럼 믿게 되고 빠져버렸습니다. CSS는 필요 없다고 느껴질 정도였죠. <br><br>\n" +
        "\n" +
        "      하지만 이 클럽은 아무나 들여보내주지 않았습니다. 당신은 또 이 클럽의 회원이 되기 위해 <br>\n" +
        "      입단 테스트를 준비하게 되는데... <br><br>\n" +
        "      자, 가볼까요.\n" +
        "      <br><br><br>" +
        "    <button><a href=\"./in_game.html\">다음</a></button>";
    let typingContainer = document.querySelector('.container');
    let index = 0;

    function typing() {
        if (index < text.length) {
            typingContainer.innerHTML = text.slice(0, index + 1);
            index++;
            setTimeout(typing, 35);
        }
        else {
            typingContainer.innerHTML = text;
        }
    }

    typing();
});