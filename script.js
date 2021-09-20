const words = ["Hello, my name is Clive.", "I'm an ordinary software engineer.", "Nice to meet you :)"];
let i = 0;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {
            document.getElementById('text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        };
        setTimeout(loopTyping, 200);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById('text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        setTimeout(loopDeleting, 50);
    };
    loopDeleting();
};

typingEffect();