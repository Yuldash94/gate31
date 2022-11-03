const url = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7';

function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const card = document.getElementById('result')
const btn = document.getElementById('btn')
const input = document.getElementById('search')

fetch(url)
    .then(response => response.json())
    .then(data => {
        let texts = data
        console.log(texts)
        return texts.map(text => {
            let div = createNode('div')
            div.classList.add('card')
            let title = createNode('h1')
            let body = createNode('p')
            let chbox = createNode('input')
            chbox.setAttribute('type', 'checkbox')
            title.innerHTML = `${text.title}`
            body.innerHTML = `${text.body}`
            chbox.addEventListener('click', () => {
                div.classList.toggle('checked')
            })
            append(div, title)
            append(div, body)
            append(div, chbox)
            append(card, div)
        })
    })
    .catch(error => console.log(error))


function filter(evt) {
    evt.preventDefault();
    var inputValue = input.value.toUpperCase(); 
    var cards = document.querySelectorAll('.card');
    cards.forEach(
      function getMatch(info) {
        title = info.querySelector('h1');
        titleContent = title.innerHTML.toUpperCase();
        
        if (titleContent.includes(inputValue)) {
          info.classList.add('show');
          info.classList.remove('hide'); 
        }
        else {
          info.classList.add('hide');
          info.classList.remove('show');
        }
      }
    )
}

btn.addEventListener('click', filter)