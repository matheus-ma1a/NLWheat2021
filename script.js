const nameTela = document.querySelector(".name")
const bio = document.querySelector(".bio")
const githubNik = document.querySelector(".githubNik")

const nameDesktop = document.querySelector(".nameDesktop")
const bioDesktop = document.querySelector(".bioDesktop")


function getGithubDados (){
    const url = "https://api.github.com/users/matheus-ma1a"
    fetch(url)
      .then( (resposta) => {
          return resposta.json()
        } )
      .then( data => {
         nameTela.innerHTML = data.name
         bio.innerHTML = data.bio
         githubNik.innerHTML = data.login
         
         nameDesktop.innerHTML = data.name
         bioDesktop.innerHTML = data.bio
         
        
        } )

}

getGithubDados()