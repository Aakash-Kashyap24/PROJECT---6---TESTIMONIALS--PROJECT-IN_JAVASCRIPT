let left = document.querySelector('.left');
let right = document.querySelector('.right');
let quotes = document.querySelector('.review');
let name = document.querySelector('.name');


left.addEventListener('click', () => {
    fetch('https://dummyjson.com/quotes').then((value) => {
        return value.json();
    }).then((value) => {
        // console.log(value.quotes[25].quote)
        let ran = Math.floor(Math.random() * value.quotes.length);
        name.innerHTML = value.quotes[ran].author;
        quotes.innerHTML = value.quotes[ran].quote;
    }).catch((value) => {
        console.log(value);
    })
})


right.addEventListener('click', () => {
    fetch('https://dummyjson.com/quotes').then((value) => {
        return value.json();
    }).then((value) => {
        // console.log(value.quotes[25].quote)
        let ran = Math.floor(Math.random() * value.quotes.length);
        name.innerHTML = value.quotes[ran].author;
        quotes.innerHTML = value.quotes[ran].quote;
    }).catch((value) => {
        console.log(value);
    })
})