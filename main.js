let arrayOfChuck;

document.getElementById("more").style.display = "none"

// This function waits for the web page to be loaded, when it does it will run the code inside of it which happens to be getPosts()
window.onload = function () {
  getPosts();
};

// This function is going to make a fetch request to the URL inside its parameter brackets (). Then it will turn the response (data it's getting back), saved here as res. The res.json will not be saved as posts and saved into the variable, arrayOfPosts
const getPosts = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((res) => res.json())
    .then((users) => (arrayOfChuck = users));
};

// This function logs the results in your browser's console
const displayFact = () => {
    document.getElementById("button").style.display = "none"
    document.getElementById("fact-display").innerHTML = arrayOfChuck.value
    document.getElementById("more").style.display = "initial"
};

const more = () => {
  getPosts()
  console.log(arrayOfChuck.value)
  document.getElementById("fact-display").innerHTML = ""
    getPosts()
    setTimeout(() => {
      document.getElementById("fact-display").innerHTML = arrayOfChuck.value;
    }, "90");
    console.log("fart")
 
}


