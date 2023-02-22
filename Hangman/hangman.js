var Hangman = /** @class */ (function () {
    function Hangman(word) {
        this.word = word.toUpperCase();
        this.guessStr = "";
        this.wrongGuesses = 0;
        this.correctGuesses = 0;
        var guessDiv = document.getElementById('guessDiv');
        for (var i = 0; i < this.word.length; i++) {
            this.guessStr += "_";
        }
        this.printGuessStr(guessDiv);
    }
    Hangman.prototype.checkGuess = function (letter) {
        var guess = this.guessStr.split('');
        var flag = true;
        for (var i = 0; i < this.word.length; i++) {
            if (letter === this.word[i]) {
                guess[i] = letter;
                this.correctGuesses++;
                flag = false;
            }
        }
        if (flag) {
            this.wrongGuesses++;
        }
        this.guessStr = guess.join('');
        var guessDiv = document.getElementById('guessDiv');
        this.printGuessStr(guessDiv);
    };
    Hangman.prototype.checkWinLoss = function () {
        if (this.wrongGuesses === 6)
            return 0;
        else if (this.correctGuesses === this.word.length)
            return 1;
        else
            return 2;
    };
    Hangman.prototype.printGuessStr = function (divElement) {
        var tempStr = "";
        for (var i = 0; i < this.guessStr.length; i++) {
            tempStr += this.guessStr[i] + " ";
        }
        if (divElement != null) {
            divElement.innerText = tempStr;
        }
    };
    return Hangman;
}());
var hangman = new Hangman("apple");
var letterBtns = document.querySelectorAll('.letterBtns');
letterBtns.forEach(function (button) {
    button.addEventListener("click", function () {
        hangman.checkGuess(button.innerText);
        switch (hangman.checkWinLoss()) {
            case 0:
                console.log("Lose");
                break;
            case 1:
                console.log("Win");
                break;
            case 2:
            default:
                console.log("Continue");
                break;
        }
        button.style.visibility = 'hidden';
    });
});
