var guessNumberGame = {
    numberOfGuesses: 0,
    playing: false,
    textElement: document.getElementsByTagName("p")[0],
    luckyNumber: Math.floor((Math.random()*5) + 1),
    buttons: document.querySelectorAll(".showBtns"),
    clickPlay: function() {
        const playBtn = document.getElementById("playBtn");
        for(var i = 1; i < 6; i++) 
        {
            const id = "btn" + i;
            const btn = document.getElementById(id);
            btn.style.background = "Green";
            btn.innerHTML = i;
        }
        this.playing = true;
        this.playingMode(this.playing);
    },
    choose: function(param) {
        if (this.playing) 
        {
            this.numberOfGuesses++;
            const btn = param;
            const numberClicked = btn.innerHTML;
            if (this.numberOfGuesses < 3)
            {
                if (numberClicked == this.luckyNumber) 
                {
                    btn.innerHTML = "<img src='images/star_face.png' />";
                    this.textElement.innerHTML = "Correct Guess!<br>You have found it in " + this.numberOfGuesses + " tries.";
                    for(var i = 0; i < this.buttons.length; i++) {
                        this.buttons[i].style.background = "pink";
                        this.buttons[i].disabled = true;
                    }
                    document.getElementById("playBtn").disabled = true;
                }
                else
                {
                    const attemptsLeft = 3 - this.numberOfGuesses;
                    this.textElement.innerHTML = "Wrong guess! Try again...<br>Ateempts left: " + attemptsLeft;
                }
            }
            else if (this.numberOfGuesses == 3)
            {
                if (numberClicked == this.luckyNumber) 
                {
                    btn.innerHTML = "<img src='images/star_face.png' />";
                    this.textElement.innerHTML = "Correct Guess!<br>You have found it in " + this.numberOfGuesses + " tries.";
                    for(var i = 0; i < this.buttons.length; i++) {
                        this.buttons[i].style.background = "pink";
                        this.buttons[i].disabled = true;
                    }
                    document.getElementById("playBtn").disabled = true;
                }
                else
                {
                    this.textElement.innerHTML = "Game Over!";
                    this.playing = false;
                    for(var i = 0; i < this.buttons.length; i++) {
                        this.buttons[i].style.background = "#fb7979";
                        this.buttons[i].disabled = true;
                    }
                    document.getElementById("playBtn").disabled = true;
                }
            }
        }
    },
    playingMode: function(bool) {
        if (bool) 
        {
            document.getElementById("playBtn").style.background = "#d9e2e2";
            document.getElementById("resetBtn").style.background = "orange";
        }
        else 
        {
            document.getElementById("playBtn").style.background = "orange";
            document.getElementById("resetBtn").style.background = "#d9e2e2";
        }
    },
    clickReset: function() {
        this.playing = false;
        this.playingMode(this.playing);
        this.textElement.innerText = "There is something cool waiting behind one of the buttons... You have to guess which one! You have a total of three guesses. Good luck!";
        this.luckyNumber = Math.floor((Math.random()*5) + 1);
        this.numberOfGuesses = 0;
        for(var i = 0; i < this.buttons.length; i++) {
            this.buttons[i].style.background = "rgb(221, 221, 221)";
            this.buttons[i].innerText = 0; 
            this.buttons[i].disabled = false;
        }
        document.getElementById("playBtn").disabled = false;
    }
};