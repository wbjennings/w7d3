console.log('If you can see this msg then it is clearly working, pal.');

const button = document.createElement('button');

button.id = 'dark-mode';

const body = document.getElementsByTagName('body')[0];
body.appendChild(button);

button.innerText = 'Dark Mode';
let buttonClick = 0;

button.addEventListener('click',()=>{
    if(button.innerText==='Dark Mode') {
        darkMode();
    } else {
        lightMode();
    }
});

function darkMode() {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
    button.innerText = 'Light Mode';
};

function lightMode() {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    button.innerText = 'Dark Mode';
};

const subHeading = document.getElementById('sub-heading');

subHeading.innerText = 'Will';

if (subHeading.innerText === 'Will') {
    document.getElementsByClassName('main-heading')[0]
    .innerText = "DOM MANIP";
}

//create a div 300x300 put some text inside the box. bkgrnd color

const divBtn = document.getElementById('divBtn');

divBtn.addEventListener('click',()=> {
    const div = document.createElement('div');
    div.innerHTML = 'This is a div';
    div.style = 'background-color: green;';
    div.style.width = '300px;';
    div.style.height = '300px;';
    document.body.appendChild(div);
});

const studentArray = ['Will', 'Bob', 'Todd', 'Sam', 'Jack'];
const studentArrayTwo = ['Doug', 'Fred', 'Gary', 'Blake'];
const studentContainer = document.querySelector("#student-container");

const titleCase = (astring) => astring[0].toUpperCase() + astring.substring(1);

for (let [i,student] of studentArray.entries()) {
    let listItem = document.createElement('li')
    listItem.id = i + 1;
    listItem.innerText = student[0].toUpperCase() + student.substring(1);
    studentContainer.append(listItem);
};


for (let [i,student] of studentArray.entries()) {
    studentContainer.innerHTML = student;
}

//Build a form
//Add event listener to form
//take form data and make api call
//take api data and send to html

const pokemonApi = document.querySelector('#pokemon-api');

pokemonApi.addEventListener('submit', async (event)=>{
    event.preventDefault();
    const pokeName = getPokeName();
    const data = await pokeApiCall(pokeName);
    handlePokeData(data);
});

//Day3HW - Added a form to take in a title and description for to-do's. Shows as red until clicked showing as "complete"
const todoList = document.querySelector('#todo-list');
todoList.addEventListener('submit', async (event) =>{
    event.preventDefault();
    const todoTitle = document.querySelector('#title').value;
    const todoDescription = document.querySelector('#description').value;
    const div = document.createElement('div');
    const p = document.createElement('p');
    div.id = todoTitle;
    p.innerText = todoDescription;
    div.style = 'background-color: red;';
    div.appendChild(p);
    document.querySelector('.to-do').appendChild(div);
    div.addEventListener('click', ()=> div.remove());
});

function getPokeName(){
    const pokeName = document.querySelector('#pokemon').value;
    return pokeName;
};

async function pokeApiCall(pokemon) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (res.ok) {
        const data = res.json();
        console.log(data.name);
        return data;
    };
};

function handlePokeData({name, sprites: { versions } }) {
    //create html node div
    // create a pt ag
    // put pokename in ptag innertext
    // take img element for poke sprite
    // add p tag and the img to div
    // add div to our aside
    const div = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');
    div.id = `card-${name}`;
    p.innerText = name;
    img.src = versions['generation-v']['black-white'].animated.front_shiny;
    div.appendChild(p);
    div.appendChild(img);
    document.querySelector('.aside').appendChild(div);
    div.addEventListener('click', ()=> div.remove() )
};