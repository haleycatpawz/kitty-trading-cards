// object array containing all of the animal's (or wild cat's) card information
var animalArray = [
  {
    "name": "Jaguar",
    "image": "/images/jaguar1.png",
    "altText": "a jaguar",
    "interestingFact": "Jaguars are the only big cats that can swim and are often found near water",
    "scientificName": "Panthera onca",
    "avgLength": "4-7 feet (without tail)",
    "avgLifespan": 10 + "-" + 15 + " years",
    "habitat": "Rainforests, wetlands, and grasslands",
    "descriptionText": "Jaguars are large, spotted cats known for their powerful bite. They are solitary hunters that prey on a variety of animals, including deer, tapirs, and caimans. Jaguars face threats such as habitat loss and human conflict"
  },
  {
    "name": "Cheetah",
    "image": "/images/cheetah1.png",
    "altText": "cheetah perched in a desert",
    "interestingFact": "Cheetahs are the world's fastest land animals, reaching speeds of up to 75 mph.",
    "scientificName": "Acinonyx jubatus",
    "avgLength": "4-5 feet (without tail)",
    "avgLifespan": 10 + "-" + 15 + " years",
    "habitat": "Grasslands and open plains",
    "descriptionText": "Cheetahs are the fastest land animals, known for their speed and spotted coats. They are solitary hunters of antelopes and face threats like habitat loss and human conflict."
  },
  {
    "name": "Eurasian Lynx",
    "image": "/images/lynx1.png",
    "altText": "a lynx with its eyes closed",
    "interestingFact": "Eurasian Lynxes have distinctive tufts of hair on their ears, which are thought to enhance their hearing in the snow.",
    "scientificName": "Lynx lynx (Eurasian lynx)",
    "avgLength": "28-51 inches (without tail)",
    "avgLifespan": 10 + "-" + 15 + " years",
    "habitat": "Forests, woodlands, & mountainous areas.",
    "descriptionText": "Eurasian lynxes are solitary, small-prey hunters with distinctive ear tufts and thick fur for cold climates. They live in forests and mountains in Europe and Asia."
  },
  {
    "name": "Leopard",
    "image": "/images/leopard1.png",
    "altText": "Leopard in a forest area",
    "interestingFact": "Leopards are excellent climbers and are often seen resting in trees.",
    "scientificName": "Panthera pardus",
    "avgLength": "3-6 feet (without tail)",
    "avgLifespan":"10-17 years",
    "habitat": "Forests, grasslands, and mountains",
    "descriptionText": "Leopards are agile, spotted cats known for their hunting prowess. They are solitary hunters that face threats like habitat loss and poaching."
  },
  {
    "name": "Lion",
    "image": "/images/lion1.png",
    "altText": "a lion in a desert",
    "interestingFact": "Lions are the only social cats, living in groups called prides.",
    "scientificName": "Panthera leo",
    "avgLength": "4-7 feet (without tail)",
    "avgLifespan":"10-15 years",
    "habitat": "Grasslands and savannas",
    "descriptionText": "Lions are large, muscular cats with a tawny coat and a mane (in males). They are social animals that hunt in prides. Lions face threats such as habitat loss, poaching, and human conflict."
  },
  {
    "name": "Tiger",
    "image": "/images/tiger1.png",
    "altText": "a tiger",
    "interestingFact": "Tigers are the largest cats in the world.",
    "scientificName": "Panthera tigris",
    "avgLength": "4-10 feet (without tail)",
    "avgLifespan": "10-15 years ",
    "habitat": "Forests, grasslands, and mountains",
    "descriptionText": "Tigers are striped cats known for their powerful hunting abilities. They are solitary animals that prey on a variety of animals. Tigers face threats such as habitat loss, poaching, and human conflict."
  }

]

// amount of animal cards/info that we have
let amountOfCards = animalArray.length - 1;
// which animal card is currently showing
let currentCardIndex = 0;

// functions called when page initially loads
changeCard()
trackCardIndex()

// function for when left button is clicked
function onButtonClickLeft() {
  if (currentCardIndex > 0) {
    currentCardIndex = currentCardIndex - 1
  } else {
  }
  changeCard()
  trackCardIndex()
}

// function for when right button is clicked

function onButtonClickRight() {
  if (currentCardIndex < amountOfCards) {
    currentCardIndex = currentCardIndex + 1
  } else {
  }
  changeCard()
  trackCardIndex()

}
// function to track which card is currently showing on screen
// using this function and object solely for testing purposes. Opacity will be set to and invisible.  
function trackCardIndex(){
document.getElementById("cardIndexNumber").innerHTML = currentCardIndex + 1;
}


// initialize all values function
// in the function below, we set all of the card's information according to which card the user should be viewing
function changeCard() {
  document.getElementById("nameTextBox").innerHTML = animalArray[currentCardIndex].name;
  document.getElementById("animalImage").src = animalArray[currentCardIndex].image;
  document.getElementById("animalImage").alt = animalArray[currentCardIndex].altText;
  document.getElementById("animalFact").innerHTML = animalArray[currentCardIndex].interestingFact;
  document.getElementById("scientificName").innerHTML = " " + animalArray[currentCardIndex].scientificName;
  document.getElementById("avgLength").innerHTML = " " + animalArray[currentCardIndex].avgLength;
  document.getElementById("avgLifespan").innerHTML = " " + animalArray[currentCardIndex].avgLifespan;
  document.getElementById("habitat").innerHTML = " " + animalArray[currentCardIndex].habitat;
  document.getElementById("descriptionText").innerHTML = " " + animalArray[currentCardIndex].descriptionText;

  changeButtonColors()
}

//change button colors function
// when this function is called, it'll gray out left or right buttons if the user is at the end of the cards or start. 
function changeButtonColors() {
  if (currentCardIndex == 0) {
    document.getElementById("leftButton").style.backgroundColor = "gray";
    document.getElementById("leftButton").style.cursor = "default";
  }
  else {
    document.getElementById("leftButton").style.backgroundColor = "#967b5c";
    document.getElementById("leftButton").style.cursor = "grab";
    
  }
  if (currentCardIndex == amountOfCards) {
    document.getElementById("rightButton").style.backgroundColor = "gray";
    document.getElementById("rightButton").style.cursor = "default";
  }
  else {
    document.getElementById("rightButton").style.backgroundColor = "#967b5c";
    document.getElementById("rightButton").style.cursor = "grab";
  }
}


// adding an event listener to the left button 
const theleftButton = document.getElementById('leftButton');
theleftButton.addEventListener('click', onButtonClickLeft);

// adding an event listener to right button
const theRightButton = document.getElementById('rightButton');
theRightButton.addEventListener('click', onButtonClickRight);
