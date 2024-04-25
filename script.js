const jokecontainer=  document.getElementById("joke");
const jokeBtn  = document.getElementById("btn");



async function generateJoke() {
    
       jokecontainer.classList.remove("fade")
      const res = await fetch('https://hindi-jokes-api.onrender.com/jokes?api_key=078a738bcb9bf36766b7b1f24088')
    
      const data = await res.json()
    
      jokecontainer.innerHTML = data.jokeContent
      jokecontainer.classList.add("fade")
    }
    jokeBtn.addEventListener('click', generateJoke)
    generateJoke();