export default class Apple{

    constructor(){
        this.position = []
    }

    setPosition(scenario){  
        let t = this.generatePosition(scenario)
        x = t[0]
        y = t[1]
        console.log(x, y)
        let isInBouderies = false
        do{
            isInBouderies = scenario.bounderies.some(function(b){
                return (
                        b[0] === x &&
                        b[1] === y
                )
            })
            if(isInBouderies)  {
                console.log("Antigo", x, y, isInBouderies)
                let t = this.generatePosition(scenario)
                x = t[0]
                y = t[1]
            }
        }while(!isInBouderies)
        this.position = [x, y]
    }

    generatePosition(scenario){
        let x = Math.floor(Math.random() *  scenario.width)
        let y = Math.floor(Math.random() *  scenario.height) 
        return [x, y]
    }

    
}