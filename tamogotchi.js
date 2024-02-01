const tamogotchi = {
  name: "egg",
  meal: 1,
  energy: 2,
  mood: 4,

  setName: function (newName) {
    this.name = newName
},

  eat: function(){
    if(this.meal < 5){
    this.meal++}
        this.mood--
  },

  sleep: function(){
    if(this.energy < 5){
    this.energy++}
    this.meal--
    },

  play: function(){
    if(this.mood < 5) {
      this.mood++}
    this.energy--
  },

  getStatus: function () {
    const mealStatus = this.meal < 3 ? 'Я голоден ' + this.meal : 'Я сыт ' + this.meal
    const moodStatus = this.mood < 3 ? 'Мне скучно' + this.mood : 'Мне весело ' + this.mood
    const energyStatus = this.energy < 3 ? 'Я хочу спать ' + this.energy : 'Я не хочу спать' + this.energy
    const status = this.energy < 0 || this.meal < 0 || this.energy < 0 ? `Имя: ${this.name} Умер` : ` Имя: ${this.name}, Еда: ${mealStatus}, Энергия: ${energyStatus}, Настроение: ${moodStatus} `   
    return status
  },
  victory: function () {
    if(this.energy >= 5 || this.meal >= 5 || this.energy >= 5){
      console.log("Победа!")
    }
},
}
