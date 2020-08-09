/* eslint-disable no-undef */
// eslint-disable-next-line max-classes-per-file
const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska",
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky",
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas",
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York",
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia",
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California",
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana",
  },
]



const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  constructor(id, name, index) {
    this.id = id
    this.name = name
    this.index = index
  }
  // 58-63 creates player //

// eslint-disable-next-line no-unused-expressions
addPlayer () {
  const uniqueId = this.id
  const uniqueId = this.name
  
  const listPlayers = gwtElementById('players')
  const li = document.createElement('li')
  li.setAttribute('id', this.index)

  const button1 = document.createElement('button')
  button1.innerHTML = "Red Team"
  button1.addEventListener('click', function () {
    addTeammate(uniqueId, uniqueName, 'Red', 'Red Rogue', this.index)
  })

  const button2 = document.createElement('button')
  button2.innerHTML = "Blue Team"
  button2.addEventListener(click, function () {
    addTeammate(uniqueId, uniqueName, 'Blue', 'Blue Rift', this.index)
  })

  listPlayers.append(li)
  li.appendChild(
    document.createTextNode(
      'Player Name: ${this.name}
      Player Number: ${this.id}'
    )
  )
  li.appendChild(button1)
  li.appendChild(button2)
 }
}

class Teammate extends player { 
  constructor(id, name, color, mascot) {
    super(id, name)
    this.color = color
    this.mascot = mascot
  }

  addBlueTeam() {
    const listBlue = document.getElementById('blue')
    const li = document.createElement('li')
    listBlue.append(li)
    li.appendChild(
      document.createTextNode(
        'Player Name: ${this.name}
        Player Number: &{this.id}
        Team: ${this.color}
        Mascot: ${this.mascot}'
      )
    )

  }
  addRedTeam() {
    const listBlue = document.getElementById('red')
    const li = document.createElement('li')
    listBlue.append(li)
    li.appendChild(
      document.createTextNode(
        'Player Name: ${this.name}
        Player Number: &{this.id}
        Team: ${this.color}
        Mascot: ${this.mascot}'
      )
    )
  }
}

class blueTeammate {
  constructor() {}
}
class redTeammate {
  constructor() {}
}



const listPeopleChoices = () => {
  const listElement = document.getElementById("people")

  arrOfPeople.map((person) => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener("click", function () {
      makePlayer(person.id)
    })
    li.appendChild(button)
    li.appendChild(
      document.createTextNode(`${person.name} - ${person.skillSet}`)
    )
    listElement.append(li)
  })
}

const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
}
