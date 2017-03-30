var dark_green = null,
    blue = null,
    yellow = null,
    light_green = null,
    user_score = null,
    computer_score = null,
    wins = 0,
    losses = 0;

document.getElementsByClassName('begin')[0].addEventListener('click', function() {
    reset();
    document.getElementsByClassName('instructions')[0].style.opacity = '0';
    document.getElementById('layer').style.opacity = '0';
    document.getElementById('layer').style.left = '-10000px';
    setTimeout(function() {
        document.getElementsByClassName('begin')[0].innerHTML = "Play Again";
        document.getElementsByClassName('i-text')[0].style.textAlign = 'center';
        document.getElementsByClassName('i-text')[0].style.fontSize = '60px';
        document.getElementsByClassName('i-text')[0].style.lineHeight = '60px';
    }, 1000);
});

function reset() {
    computer_score = Math.floor((Math.random()*(100-50+1))+50);
    document.getElementsByClassName('computer-score-value')[0].innerHTML = computer_score;
    user_score = 0;
    document.getElementsByClassName('user-score-value')[0].innerHTML = user_score;

    var nums = [];
    for (var i = 0; i < 4; i++) {
        var newNum = Math.floor((Math.random()*(10-1+1))+1);
        while (nums.includes(newNum)) newNum = Math.floor((Math.random()*(10-1+1))+1);
        nums.push(newNum)
    }

    dark_green = nums[0];
    blue = nums[1];
    yellow = nums[2];
    light_green = nums[3];

}

function checkScore() {
    if (user_score == computer_score) {
        wins++;
        
        document.getElementsByClassName('instructions')[0].style.opacity = '1';
        document.getElementById('layer').style.opacity = '1';
        document.getElementById('layer').style.left = '0';
        document.getElementsByClassName('i-text')[0].innerText = "You WON!!!!";

    } else if (user_score > computer_score) {
        losses++;
        document.getElementsByClassName('instructions')[0].style.opacity = '1';
        document.getElementById('layer').style.opacity = '1';
        document.getElementById('layer').style.left = '0';
        document.getElementsByClassName('i-text')[0].innerText = "You lost! :(";
    } 

    document.getElementsByClassName('user-score-value')[0].innerHTML = user_score;
}

var gems = document.getElementsByClassName('gem');

gems[0].addEventListener('click', function() {
    user_score += dark_green;
    checkScore();
})

gems[1].addEventListener('click', function() {
    user_score += blue;
    checkScore();
})

gems[2].addEventListener('click', function() {
    user_score += light_green;
    checkScore();
})

gems[3].addEventListener('click', function() {
    user_score += yellow;
    checkScore();
})