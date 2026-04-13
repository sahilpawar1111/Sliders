const sliders = [
    {
        img : "https://wallpapercave.com/wp/wp4990451.jpg"
    },
    {
        img : "https://cdn.wallpapersafari.com/84/81/ZGTg0z.jpg"
    },
    {
        img : "https://cdn.wallpapersafari.com/55/15/Ek2XQl.jpg"
    }
];

const slidersContainer = document.querySelector('#sliders img');

let currentQuote = 0;

const nextQuote = ()=> {
    slidersContainer.src = sliders[currentQuote].img;

    currentQuote ++;
}

nextQuote();

const prevQuote = ()=> {
    slidersContainer.src = sliders[currentQuote].img;

    currentQuote --;
}

prevQuote();