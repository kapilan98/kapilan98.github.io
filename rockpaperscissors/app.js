const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    //console.log(playBtn)
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playMatch = () =>{

  	const options=document.querySelectorAll(".options button");
  	const playerhand=document.querySelector(".player-hand");
  	const computerhand=document.querySelector(".computer-hand");
  	const hands=document.querySelectorAll(".hands img")

  	hands.forEach(hand =>{
  		hand.addEventListener('animationend',function(){
  				

  			isreset();
  			this.style.animation="";	
  		})
  	})
  	const computeroptions=["rock","paper","scissors"];

  	options.forEach(option => {
  		option.addEventListener('click',function()
  		{
  		const computernumber=Math.floor(Math.random()*3);
  		const computerchoice=computeroptions[computernumber];
  		//calling compare hands function


  		setTimeout(()=>{
  		comparehands(this.textContent,computerchoice)	

  		//update Images
  		playerhand.src=`./assests/${this.textContent}.png`
  		computerhand.src=`./assests/${computerchoice}.png`

  		},2000)

  		//console.log("works");
  		playerhand.style.animation="shakeplayer 2s ease";
  		computerhand.style.animation="shakecomputer 2s ease"
  		});
  	});

  }

  const updateScore = () =>{
  	const playerscore=document.querySelector(".player-score p")
  	const computerscore=document.querySelector(".computer-score p")

  	playerscore.textContent=pScore;
  	computerscore.textContent=cScore;
  }
  let isreset = () =>{

  	if((cScore===3)||(pScore===3))
 	{
 		
 		const again=document.querySelector(".again")
 		let winners=document.querySelector(".winners")
 		//let againbutton=document.querySelector(".but")
 		
 		if(cScore>pScore)
 			winners.textContent="Computer won the Match";
 		else if(cScore<pScore)
 			winners.textContent="You won the Match";
 		else
 			winners.textContent="Match drawn!"
 		var x = document.getElementById("myAudio"); 
 		x.play();
 		again.classList.add("fadeIn")
 		winner.textContent="";
 			game();
  		
 	}
  }
  const comparehands = (playerchoice,computerchoice) =>{
//	console.log(playerchoice,computerchoice)

  	var winner=document.querySelector(".winner")
  	//console.log(winner)
  	if(playerchoice===computerchoice)
  	{
  		winner.textContent='It is a tie';
		//console.log(winner)
  		return;
  	}
  	 if(playerchoice==='rock')
  	 	{
  	 		if(computerchoice==="paper")
  	 		{
  				winner.textContent='Ouch!... Computer Wins.';
  				cScore++;
  				updateScore();
  				return;
  			}
  			else
  			{
  				winner.textContent="Yeah!...You Win";
  				pScore++;
  				updateScore();
  				return
  			}
  		}

  		 if(playerchoice==='paper')
  	 	{
  	 		if(computerchoice==="scissors")
  	 		{
  				winner.textContent='Ouch!... Computer Wins.';
  				cScore++;
  				updateScore();
  				return;
  			}
  			else
  			{
  				winner.textContent="Yeah!...You Win";
  				pScore++;
  				updateScore();
  				return;
  			}
  		}


  		 if(playerchoice==='scissors')
  	 	{
  	 		if(computerchoice==="paper")
  	 		{
  				winner.textContent='Yeah!...You win';
  				cScore++;
  				updateScore();	
  				return;
  			}
  			else
  			{
  				winner.textContent="Ouch!... Computer Wins.";
  				cScore++;
  				updateScore();
  				return;
  			}
  		}		
  }
startGame();
playMatch();
}
game();