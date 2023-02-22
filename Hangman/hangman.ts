class Hangman {
    private word: string;
    private guessStr: string;
    private wrongGuesses: number;
    private correctGuesses: number;

    public constructor(word: string) {
        this.word = word.toUpperCase();
        this.guessStr = "";
        this.wrongGuesses = 0;
        this.correctGuesses = 0;

        const guessDiv = document.getElementById('guessDiv');

        for (let i: number = 0; i < this.word.length; i++)
        {
            this.guessStr += "_";
        }

        this.printGuessStr(guessDiv);
    }

    public checkGuess(letter: string) {
        const guess = this.guessStr.split('');
        let flag: boolean = true;

        for(let i: number = 0; i < this.word.length; i++) {
            if(letter === this.word[i]) {
                guess[i] = letter;
                this.correctGuesses++;
                flag = false;
            }
        }

        if(flag) {
            this.wrongGuesses++;
        }

        this.guessStr = guess.join('');
        const guessDiv = document.getElementById('guessDiv');
        this.printGuessStr(guessDiv);

    }

    public checkWinLoss() {
        if(this.wrongGuesses === 6)
            return 0;
        else if(this.correctGuesses === this.word.length)
            return 1;
        else
            return 2;
    }

    public printGuessStr(divElement: HTMLElement | null) {
        let tempStr: string = "";

        for (let i: number = 0; i < this.guessStr.length; i++)
        {
            tempStr += this.guessStr[i] + " ";
        }

        if (divElement != null) {
            divElement.innerText = tempStr;
        }
    }
}

const hangman = new Hangman("apple");
const letterBtns = document.querySelectorAll('.letterBtns') as NodeListOf<HTMLElement>;

letterBtns.forEach(button => {
    button.addEventListener("click", () => {
        hangman.checkGuess(button.innerText);

        switch(hangman.checkWinLoss()) {
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
    })
  })

