 const cards = [{
         name: 'cat',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
         color: 'orange'
     },
     {
         name: 'crow',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
         color: 'orange'
     },
     {
         name: 'dog',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
         color: 'orange'
     },
     {
         name: 'dove',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
         color: 'orange'
     },
     {
         name: 'dragon',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
         color: 'orange'
     },
     {
         name: 'horse',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
         color: 'orange'
     },
     {
         name: 'hippo',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
         color: 'orange'
     },
     {
         name: 'fish',
         prefix: 'fa-',
         type: 'animal',
         family: 'fas',
         color: 'orange'
     },
     {
         name: 'carrot',
         prefix: 'fa-',
         type: 'vegetable',
         family: 'fas',
         color: 'green'
     },
     {
         name: 'apple-alt',
         prefix: 'fa-',
         type: 'vegetable',
         family: 'fas',
         color: 'green'
     },
     {
         name: 'lemon',
         prefix: 'fa-',
         type: 'vegetable',
         family: 'fas',
         color: 'green'
     },
     {
         name: 'pepper-hot',
         prefix: 'fa-',
         type: 'vegetable',
         family: 'fas',
         color: 'green'
     },
     {
         name: 'user-astronaut',
         prefix: 'fa-',
         type: 'user',
         family: 'fas',
         color: 'blue'
     },
     {
         name: 'user-graduate',
         prefix: 'fa-',
         type: 'user',
         family: 'fas',
         color: 'blue'
     },
     {
         name: 'user-ninja',
         prefix: 'fa-',
         type: 'user',
         family: 'fas',
         color: 'blue'
     },
     {
         name: 'user-secret',
         prefix: 'fa-',
         type: 'user',
         family: 'fas',
         color: 'blue'
     }
 ];
 const cardsContainer = document.querySelector(".cards-container")
 const title = document.querySelector('.title')
 let picture = document.querySelector('.picture')
 const blueRoba = []

 for (let i = 0; i < cards.length; i++) {
     const cardsList = `
	 <div class="title">
        ${cards[i].type}
    </div>
    <div class="picture">
        <i class="${cards[i].family} ${cards[i].prefix}${cards[i].name}"></i>
    </div>
    <script src="data.js"></script>
	`;

     cardsContainer.innerHTML += cardsList
     if (cards[i].color === "orange") {
         const picture = document.querySelector('.picture')
         picture.classList.add("orange-font")
     }
 }

 function myFunction(item) {
     if (cards.color === "orange") {
         const picture = document.querySelector('.picture')
         picture.classList.add("orange-font")
     }
 }
 cards.forEach(myFunction);
 picture.classList.add("orange-font")
 picture.classList.add("orange-font")
 console.log(blueRoba)
     //filtri per tipo
 const animalCards = cards.filter((elm) => {
     if (elm.type === "animal") {
         return true;
     }
     return false;
 })

 const vegetableCards = cards.filter((elm) => {
     if (elm.type === "vegetable") {
         return true;
     }
     return false;
 })

 const usreCards = cards.filter((elm) => {
     if (elm.type === "user") {
         return true;
     }
     return false;
 })