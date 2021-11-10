const nameTela = document.querySelector(".name")
const bio = document.querySelector(".bio")

function getGithubDados (){
    const url = "https://api.github.com/users/matheus-ma1a"
    fetch(url)
      .then( (resposta) => {
          return resposta.json()
        } )
      .then( data => {
         nameTela.innerHTML = data.name
         bio.innerHTML = data.bio
        
        } )

}

getGithubDados()