





let cl = console.log;

let apiUrl ="https://api.github.com/users/"

const card = document.getElementById("card")
const search = document.getElementById("search")
const form = document.getElementById("form")



const getUser = async(username) => {
    const response = await fetch(apiUrl + username);
    const data = await response.json();
    cl(data); // single obj
    templating(data)
getRepos(username)
}

function templating(data){
    const result = ` <div class="card">
    <div class="row">
        <div class="col-sm-3">
            <div class="userImg">
                <img  class="avatar" src="${data.avatar_url}" alt="${data.name}">
             </div>  
        </div>
        <div class="col-sm-9">
            <h4 class="mb-2">${data.name}</h4>
            <h6 class="mb-2">@${data.login}</h6>
            <p class="mb-4">${data.bio}</p>
            <ul class="info mb-4">
                <li>${data. followers}</li>
                <li>${data.following}</li>
                <li>${data.public_repos}</li>
            </ul>
            <div id="repos" class="mb-4">

            </div>
            <div class="row">
                <div class="col-sm-2">
                    <a href="#" target="_blank" class="link">
                        <i class="fa-solid fa-location-dot mr-2"></i>${data.location}</a>
                </div>
                <div class="col-sm-10">
                    <a href="#" target="_blank" class="link">
                        <i class="fa-solid fa-link mr-2"></i>${data.repos_url}</a>
                </div>
            </div>
        
            <div class="row">
                <div class="col-sm-2">
                    <a href="#" target="_blank" class="link">
                        <i class="fa-brands fa-twitter mr-2"></i>${data.twitter_username}</a>
                </div>
                <div class="col-sm-10">
                    <a href="#" target="_blank" class="link"><i class="fa-solid fa-building mr-2"></i>${data.company}</a>
                </div>
            </div>   
        </div>
    </div>
</div> `
card.innerHTML = result;
}

// getUser("sayali255")



const getRepos = async (username) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(apiUrl + username + "/repos")
    const data = await response.json();
    // cl(data)
    data.forEach(
        (item) => {
            cl(item)

        const ele = document.createElement("a")
              ele.classList.add("repo")
              ele.classList.add("text-white")
              ele.classList.add("my-2")
              ele.href = item.html_url
              ele.innerText = item.name
              ele.target = "_blank"
              repos.appendChild(ele)
    });
}






const onFormSubmit =(eve) => {
    cl(eve)
    let input = eve.target.value;
    cl(input);
  if(input !== ""){
    cl(search.value)
    getUser(search.value)
  }else{
   return false;
  }
}
search.addEventListener("input", onFormSubmit)
                            
// const onFormSubmit =(eve) => {
//         eve.preventDefault();
//         cl(eve)
//         let user = search.value.toLowerCase();
//         cl(user);
//         getUser(user);
//         eve.target.reset();

// }

// form.addEventListener("submit", onFormSubmit)