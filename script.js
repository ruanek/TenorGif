//creating a new button
document.querySelector("#user_input_form").addEventListener("submit", (evt) => {
    evt.preventDefault()
makeButton(document.getElementById("text").value)
})
//function to make new button
function makeButton(term) {
const btn = document.createElement("button")
btn.setAttribute("class", "submitBtn")
btn.innerText = `Results for ${term}`
//event listner for new button
btn.addEventListener("click", () => {
    //remove gifs from container before showing new ones
    removeGifs(document.querySelector("#gifs_container"))
    const apiKey = "AIzaSyCFx71uTUstEjL3wHjnDElOXma87TSY3xA"
    const URL = `https://tenor.googleapis.com/v2/search?key=${apiKey}&q=${term}`
        fetch(URL)
            .then(resp => resp.json())
            .then((data) => {
           const gifArr = data.results
                for (let i = 0; i < gifArr.length; i++) {
                    const image = document.createElement("img")
                    const imgUrl = data.results[i].media_formats.tinygif.url
                    image.setAttribute("src", imgUrl)
                    image.setAttribute("id", "gifs") 
                    document.querySelector("#gifs_container").appendChild(image)        
            }
        })
    })
    document.querySelector("#btns_container").appendChild(btn)
    document.getElementById("user_input_form").reset()
}

function removeGifs(container) {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild)
    }
}


