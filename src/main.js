// query selector variables go here 👇
//poster elements
var posterImage = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var posterGrid = document.querySelector('.saved-posters-grid');

//forms
var formMain = document.querySelector('.main-poster');
var formCustom = document.querySelector('.poster-form');
var formSaved = document.querySelector('.saved-posters')
//buttons
var buttonRandomPoster = document.querySelector('.show-random');
var buttonMakeYourOwnPoster = document.querySelector('.show-form');
var buttonFormToMain = document.querySelector('.show-main');
var buttonShowSaved = document.querySelector('.show-saved');
var buttonSaveToMain = document.querySelector('.back-to-main');
var buttonShowMyPoster = document.querySelector('.make-poster');
var buttonSaveThisPoster = document.querySelector('.save-poster');
//fields
var fieldImage = document.getElementById('poster-image-url');
var fieldTitle = document.getElementById('poster-title');
var fieldQuote = document.getElementById('poster-quote');


// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇

window.addEventListener('load', createRandomPoster);
buttonRandomPoster.addEventListener('click', createRandomPoster);
buttonMakeYourOwnPoster.addEventListener('click', showPosterForm);
buttonFormToMain.addEventListener('click', returnToMain);
buttonShowSaved.addEventListener('click', showSavedPosters);
buttonSaveToMain.addEventListener('click', returnFromSaved);
buttonShowMyPoster.addEventListener('click', createCustomPoster);
buttonSaveThisPoster.addEventListener('click', savePoster);
posterGrid.addEventListener('dblclick', function(e) {
  deletePoster(e);
});


// functions and event handlers go here 👇

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomPoster() {
  posterImage.src = images[getRandomIndex(images)];
  posterTitle.innerText = titles[getRandomIndex(titles)];
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
  currentPoster = new Poster(posterImage.src, posterTitle.innerText, posterQuote.innerText);
}

function showPosterForm() {
  formMain.classList.add("hidden");
  formCustom.classList.remove("hidden");
}

function returnToMain() {
  formCustom.classList.add("hidden");
  formMain.classList.remove("hidden");
}

function showSavedPosters() {
  formMain.classList.add("hidden");
  formSaved.classList.remove("hidden");
  addHTMLToDataModel();
}

function returnFromSaved() {
  formSaved.classList.add("hidden");
  formMain.classList.remove("hidden");
}

function addHTMLToDataModel() {
  var posterHTML = "";

  for (var i = 0; i < savedPosters.length; i++) {
    posterHTML += `<article class = 'mini-poster'>
      <img src=${savedPosters[i].imageURL} />
      <h2>${savedPosters[i].title}</h2>
      <h4>${savedPosters[i].quote}</h4>
    </article>`;
  }

  posterGrid.innerHTML = posterHTML;
};



function createCustomPoster() {
  event.preventDefault();
  //display custom vales on mainPoster page
  posterImage.src = fieldImage.value;
  posterTitle.innerText = fieldTitle.value;
  posterQuote.innerText = fieldQuote.value;
  //creates new object instance of Poster
  currentPoster = new Poster(fieldImage.value, fieldTitle.value, fieldQuote.value);

  pushToArray();
  returnToMain();
}

function pushToArray() {
  images.push(fieldImage.value);
  titles.push(fieldTitle.value);
  quotes.push(fieldQuote.value);
}


function savePoster() {
  if(!savedPosters.includes(currentPoster)) {
    savedPosters.push(currentPoster);
  }
}

function deletePoster(e) {
  //assigns the event object of the closest 'article' dblClick to a variable
  var closest = e.target.closest('article')
  //removes the article from the display
  e.target.closest('article').remove();

  //this exactly compares the information within the event object to the object properties of the savedPosters array
  for (var i =0; i < savedPosters.length; i++) {
    if (closest.children[0].src === savedPosters[i].imageURL && closest.children[1].innerText === savedPosters[i].title
      && closest.children[2].innerText === savedPosters[i].quote) {
        //If there is an exact match for imgsrc, title, and quote - the index and its values will be removed from the savedPosters array
        savedPosters.splice(i, 1);

      }
  }
}
