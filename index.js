let wins = parseInt(localStorage.getItem("wins")) || 0;
    let losses = parseInt(localStorage.getItem("losses")) || 0;
    let ties = parseInt(localStorage.getItem("ties")) || 0;

    function updateScoreboard() {
      document.getElementById("wins").innerText = "Wins: " + wins;
      document.getElementById("losses").innerText = "Losses: " + losses;
      document.getElementById("ties").innerText = "Ties: " + ties;
    }

    function play(userChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      let resultMessage = "";
      if (userChoice === computerChoice) {
        resultMessage = `Both chose ${userChoice}. It's a tie!`;
        ties++;
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
      ) {
        resultMessage = `You chose ${userChoice}, computer chose ${computerChoice}. You win!`;
        wins++;
      } else {
        resultMessage = `You chose ${userChoice}, computer chose ${computerChoice}. You lose!`;
        losses++;
      }

      localStorage.setItem("wins", wins);
      localStorage.setItem("losses", losses);
      localStorage.setItem("ties", ties);

      updateScoreboard();
      document.getElementById("result").innerText = resultMessage;

      // Show alert
      alert(resultMessage);
    }

    function resetScore() {
      wins = 0;
      losses = 0;
      ties = 0;
      localStorage.setItem("wins", wins);
      localStorage.setItem("losses", losses);
      localStorage.setItem("ties", ties);
      updateScoreboard();
      document.getElementById("result").innerText = "Scores have been reset.";

      // Show reset alert
      alert("All scores have been reset!");
    }

    updateScoreboard();