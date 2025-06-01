import axios from "axios";
const numberOfFacts = document.getElementById("number");
const container = document.getElementById("container");
const button = document.getElementById("submit-button");
const url = `https://meowfacts.herokuapp.com/?count=${2}`;

// //string concatination
// console.log(`${api} is api for cat `)
// console.log("name " + api  + button)

button.addEventListener("click", () => {
  container.innerText=``;
  const response = axios.get(`https://meowfacts.herokuapp.com/?count=${numberOfFacts.value}`);
  response.then((dataresponse) => {
    let {data:{data},} = dataresponse;
    for(let i =0; i <data.length; i++){
      console.log(data[i])
      container.innerHTML += `<p class="fact-paragraph"> ${i+1}. <span> ${data[i]}</p></span><br>`
    }

  });
  response.catch((e) => {
    console.log("Oops, error. Try again later");
  });
})
