// Image credits: Kickstarter
const games = ` [
  {
    "name": "Spider Man: Across the Spider-Verse",
    "description": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    "pledged": 1572,
    "goal": 10000,
    "backers": 9,
    "img": "./assets/spiderverse.jpg"
  },
  {
    "name": "Avengers: Endgame",
    "description": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    "pledged": 29446,
    "goal": 20000,
    "backers": 321,
    "img": "./assets/avengersendgame.jpg"
  },
  {
    "name": "The Hunger Games: The Ballad of Songbirds & Snakes",
    "description": "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
    "pledged": 442602,
    "goal": 78480,
    "backers": 3869,
    "img": "./assets/hungergames.jpg"
  },
  { 
    "name": "Harry Potter and the Deathly Hallows: Part 2",
    "description": "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
    "pledged": 109,
    "goal": 8000,
    "backers": 3,
    "img": "./assets/harrypotter.jpg"
  },
  {
    "name": "Black Panther: Wakanda Forever",
    "description": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "pledged": 698,
    "goal": 5140,
    "backers": 9,
    "img": "./assets/blackpanther.jpg"
  },
  {
    "name": "Guardians of the Galaxy Vol. 3",
    "description": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "pledged": 44,
    "goal": 18133,
    "backers": 2,
    "img": "./assets/guardiansofthegalaxy.jpg"
  },
  {
    "name": "Despicable Me 4",
    "description": "Gru and Lucy and their girls — Margo, Edith and Agnes — welcome a new member to the Gru family, Gru Jr., who is intent on tormenting his dad. Meanwhile, Gru faces a new nemesis in Maxime Le Mal and his femme fatale girlfriend Valentina, forcing the family to go on the run.",
    "pledged": 69608,
    "goal": 500000,
    "backers": 3193,
    "img": "./assets/despicableme4.jpg"
  },
  {
    "name": "Frozen 2",
    "description": "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
    "pledged": 1036,
    "goal": 3099,
    "backers": 32,
    "img": "./assets/frozen2.jpg"
  },
  {
    "name": "Inside Out 2",
    "description": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    "pledged": 147975,
    "goal": 10000,
    "backers": 1039,
    "img": "./assets/insideout2.jpg"
  },
  {
    "name": "Star Wars: The Force Awakens",
    "description": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
    "pledged": 13039,
    "goal": 1183,
    "backers": 1446,
    "img": "./assets/starwars.jpg"
  },
  {
    "name": "Kung Fu Panda 4",
    "description": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    "pledged": 94139,
    "goal": 100000,
    "backers": 9264,
    "img": "./assets/kungfupanda4.jpg"
  }
]
`
const template = `
{
"name": "",
"description": "",
"pledged": 0,
"goal": 0,
"backers": 0,
"img": ""
},
`

export default games;