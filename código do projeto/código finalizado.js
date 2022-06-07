const getUserChoice = (userInput) =>{
    if(userInput.toLowerCase () == "pedra"){
        return "Sua opção foi pedra";
    } else if(userInput.toLowerCase () == "papel"){
        return "Sua opção foi papel";
    }else if(userInput.toLowerCase () == "tesoura"){
           return "Sua opção foi tesoura";
    }
}
console.log(getUserChoice("peDRa"));

//2ª função em falta

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

//4ª função em falta