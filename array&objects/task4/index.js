const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya', 'Bulat'];
const divElement = document.getElementById('list');

function addNamesToList(names){
    html = ``
    for (let i = 0; i < names.length; i++){
        html += `
        <li>${names[i]}</li>`;
    }
    return `<ul>${html} 
    </ul>`;
}

function render(){
    divElement.innerHTML = '';
    divElement.insertAdjacentHTML('beforeend', addNamesToList(names));
}

render()