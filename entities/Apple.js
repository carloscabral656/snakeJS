export default class Apple{

    constructor(){
        this.position = []
    }

    setPosition(scenario){  
        const x = Math.floor(Math.random() *  scenario.width)
        const y = Math.floor(Math.random() *  scenario.height) 
        this.position = [x, y]     
    }
}