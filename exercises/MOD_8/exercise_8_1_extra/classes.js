const DRUM_RANDOM_NUMBER = Math.floor(Math.random() * 6) + 1;

const BULLET_POSITION_RANDOM = Math.floor(Math.random() * 6) + 1;

const PLAYERS_LOGGED = [];

function logPlayers() {
    const PLAYERS = Number(document.getElementById("numOfPlayers").value);
  
    if (PLAYERS < 1 || PLAYERS > 6) {
      PLAYERS = 6;
    }
    for (i = 0; i <= PLAYERS; i++) {
      const PLAYER = new Player({
        id: i,
        name: `Player`,
        nickname: `Player ${i}`,
        alive: true,
      });
      PLAYERS_LOGGED.push(PLAYER);
    }
  }

class Revolver {
  chamberPosition;
  bulletPosition;

  constructor(chamberPosition, bulletPosition) {
    this.chamberPosition = chamberPosition;
    this.bulletPosition = bulletPosition;
  }
  shoot() {
    if (this.chamberPosition === this.bulletPosition) {
      return true;
    } else {
      return false;
    }
  }
  nextTurn() {
    if (this.chamberPosition === 6) {
      this.chamberPosition++;
    }
  }
  inform() {
    return `The actual position of the drum is: ${this.chamberPosition}\nand the bullet is currently at ${this.bulletPosition}`;
  }
}
const GUN = new Revolver(DRUM_RANDOM_NUMBER, BULLET_POSITION_RANDOM);

class Player {
  id;
  name;
  nickname;
  alive;

  constructor(id, name, nickname, alive) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.alive = alive;
  }
  play() {
    if (GUN.shoot()) {
      this.alive = false;
      console.log(GUN.inform());
    } else {
      this.alive = true;
      console.log(GUN.inform());
      GUN.nextTurn();
    }
  }
}



class Game {
   constructor( {
    players,
    revolver,
  })
  endGame(PLAYER) {
    if (PLAYER.alive) {
      return false;
    } else {
      return true;
    }
  }
  round() {
    PLAYERS_LOGGED[PLAYER - 1].play();

    if (this.endGame(PLAYERS_LOGGED[PLAYER - 1])) {
      alert(`Game over, all players are 💀💀💀💀💀💀`);
    }
  }
}
const START_SHOOTING = new Game({});
