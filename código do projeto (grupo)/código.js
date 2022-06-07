
const getUserChoice = (userInput) =>{
  if(userInput.toLowerCase () == "pedra"){
      return"pedra";
  } else if(userInput.toLowerCase () == "papel"){
      return"papel";
  }else if(userInput.toLowerCase () == "tesoura"){
          return"tesoura";
  }else{
      return("Opção Inválida")
  }
}

function getComputerChoice ()
{
    let numero = Math.floor(Math.random() * 3);
    
    switch (numero){
      case 0:
        return "pedra"
        break;
      case 1:
        return "papel"
         break;
      case 2:
        return "tesoura"
        break;
  }
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

const playGame = () => {
  const userChoice = getUserChoice("pedra");
  const computerChoice = getComputerChoice();

  console.log("Usuário: " + userChoice);
  console.log("Computador: " + computerChoice);

   console.log(determineWinner(userChoice, computerChoice))
}

playGame()