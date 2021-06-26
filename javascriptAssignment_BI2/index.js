let btnElement = document.getElementById("btn");
let outputElement = document.getElementById("output");
let bodyElement = document.getElementById('body');
let timeofdayElement = document.getElementById('timeofday')

let quote = [
    '"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
    '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',
    '"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
    `"Don't judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson`,
    '"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
    '"Tell me and I forget. Teach me and I remember. Involve me and I learn." -Benjamin Franklin',
    '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller',
    '"It is during our darkest moments that we must focus to see the light." -Aristotle',
    '"Whoever is happy will make others happy too." -Anne Frank',
    '"Do not go where the path may lead, go instead where there is no path and leave a trail." -Ralph Waldo Emerson',
]
let colors = ['#d50000','#00e5ff','#ff6d00','#004d40','#263238','#ff5722','#f50057','#4a148c','#ffab00','#40c4ff'];


btnElement.addEventListener('click',()=>{
    let randomColor =  colors[Math.floor(Math.random() * colors.length)];
    bodyElement.style.backgroundColor =randomColor;
    btnElement.style.backgroundColor = randomColor;
    outputElement.style.color=randomColor;
    let randomQuotes = quote[Math.floor(Math.random() * quote.length)]
    outputElement.textContent = randomQuotes;
})

let date = new Date();
let currentHours = date.getHours();
let currentMinutes = date.getMinutes()


if(currentHours >=0 && currentHours<12){
    timeofdayElement.textContent = "morning"
}else if(currentHours>=12 && currentHours<18){
    timeofdayElement.textContent = "afternoon"
}else if(currentHours>=18 && currentHours<24){
    timeofdayElement.textContent ="evening/night"
}



