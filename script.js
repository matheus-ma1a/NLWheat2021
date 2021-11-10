const nameTela = document.querySelector(".name")

function getGithubDados (){
    const url = "https://api.github.com/users/matheus-ma1a"
    fetch(url)
      .then( (resposta) => {
          return resposta.json()
        } )
      .then( data => {
         nameTela.innerHTML = data.name
        
        } )

}

getGithubDados()