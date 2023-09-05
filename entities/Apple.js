export default class Apple{

    constructor(){
        this.position = []
    }

    setPosition(scenario){  
        let [x, y] = this.generatePosition(scenario)
        this.position = [x, y]
    }

    generatePosition(scenario){
        let x = Math.floor(Math.random() *  scenario.width-1)
        let y = Math.floor(Math.random() *  scenario.height-1) 
        return [x, y]
    }

    
}