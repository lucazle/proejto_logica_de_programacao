const getUserChoice = (userInput) => 
{
  userInput = userInput.toLowerCase()
  switch(userInput){
    case 'pedra':
      return userInput.toLowerCase()
      break;
    case 'papel':
      return userInput.toLowerCase()
      break;
    case 'tesoura':
      return userInput.toLowerCase()
      break;
    default:
      console.log("Ops, tente novamente!")
      break;
  }
}

function getComputerChoice()
{
    const aleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min)
    const opcoes = ['pedra','papel','tesoura'];
    return (opcoes[aleatorio (0, opcoes.length)]);
}

const determineWinner = (userChoice, computerChoice) => 
{
  if (userChoice == computerChoice){
    return "Jogo empatado"
  }
  else if(userChoice == "pedra"){
    if(computerChoice == "papel"){
      return "O computador ganhou!"
    }else{
      return "Você ganhou!"
    }
  }

  if(userChoice == "papel"){
    if(computerChoice == "tesoura"){
      return "O computador ganhou!"
    }else{
      return "Você ganhou"
    }
  }

  if(userChoice == "tesoura"){
    if(computerChoice == "pedra"){
      return "O computador ganhou!"
    }else{
      return "Você ganhou!"
    }
  }

}

const playGame = () =>
{
  const userChoice = getUserChoice("tesoura");
  const computerChoice = getComputerChoice();

  console.log("Você escolheu: " + userChoice);
  console.log("O computador escolheu: " + computerChoice);
  
  console.log(determineWinner(userChoice, computerChoice));
}

playGame()