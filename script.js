const url = "https://api.github.com/users/"
const main = document.getElementById('main');

const form = document.querySelector('.user-form')
const search = document.getElementById('search'); // input del formulario
const div_hireable = document.querySelector('.hireable')



const getUser = async (username) => {
    const response = await fetch(url + username);
    const response_json = await response.json();
    return response_json;
}

const fetchUser = async(res) => {
    console.log(res);
    let hireable = res.hireable ? "Hireable" : "Not hireable"; 
    
    const html_card = `
        <div class="card">
            <div>
                <img src=${res.avatar_url} alt="" class="avatar">
            </div>
            <div class="user-info">
                <h2>${res.name}</h2>
                <p>${res.bio}</p>
            
                <ul>
                    <li>${res.followers} <strong>Followers</strong></li>
                    <li>${res.following} <strong>Following</strong></li>
                    <li>${res.public_repos} <strong>Repos</strong></li>
                </ul>
                <div class="repos">
                    <a href="" class="repo">Repo1</a>
                    <a href="" class="repo">Repo2</a>
                    <a href="" class="repo">Repo3</a>
                </div>
            </div>
        </div>
    ` 
    main.innerHTML = html_card;
}


// obtener valor del formulario

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let name = search.value
    getUser(name)
    .then(response_json => fetchUser(response_json))
    .catch(err => console.log(err))
    
})
















/* 
function getUser(username){
    axios.get(url + username)
        .then((res) => fetchData(res))
        .catch((err) => console.log(err))
    }

function fetchData(res){
    //image.setAttribute('src', res.avatar_url);
    const html = `
        <div class="card">
        <div>
            <img src=${res.data.avatar_url} alt="" class="avatar">
        </div>
        <div class="user-info">
            <h2>${res.data.name}</h2>
            <p>${res.data.bio}</p>
        
            <ul>
                <li>${res.data.followers} <strong>Followers</strong></li>
                <li>${res.data.following} <strong>Following</strong></li>
                <li>${res.data.public_repos} <strong>Repos</strong></li>
            </ul>
            <div class="repos">
                <a href="" class="repo">Repo1</a>
                <a href="" class="repo">Repo2</a>
                <a href="" class="repo">Repo3</a>
            </div>
        </div>
    </div>
    ` 
    main.innerHTML = html;
}
 */
