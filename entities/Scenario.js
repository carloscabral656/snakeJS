import Apple from "./Apple.js"

export default class Scenario {
    
    constructor(width, height, window){
        this.width  = width
        this.height = height
        this.struct = null
        this.bounderies = []
        this.availableScenario = []
        this.constructScenarioStruct()
        this.window = window
        this.snake
        this.apple = new Apple()
        this.callbacksListeners = (event) => this.handleKeys(event)
    }

    constructScenarioStruct(){
        const qtColumns = this.width;
        const qtLines   = this.height;
        const scenario = document.createElement('table')
        for(let lines = 0 ; lines < qtLines; lines++){
            let line = document.createElement('tr')
            for(let columns = 0 ; columns < qtColumns; columns++){
                let column = document.createElement('td')
                column.setAttribute("id",`${columns},${lines}`)
                line.append(column)
            }
            scenario.append(line)
        }
        this.struct = scenario
    }   
    
    renderScenario(){
        const scenario = this.window.document.getElementById("scenario")
        scenario.append(this.struct)
    }
    
    createBoundaries(){
        for(let line = 0 ; line < this.height; line++){
            for(let column = 0 ; column < this.width; column++){
               if(
                    column == 0 || 
                    line   == 0 ||
                    column == (this.width -1) || 
                    line == (this.height -1) 
                ){
                let e = this.window.document.getElementById(`${column},${line}`)
                e.classList.add('bound')
                this.bounderies.push([column, line])
               }
            }
        }
    }

    heatBound(){
        let [x, y] = this.snake.head()
        return (this.bounderies.some(function(b){
            return ( (b[0]==x) && (b[1]==y))
        }))
    }

    cleanSnake(){
        this.snake.body.forEach((b) => {
            let s = this.window.document.getElementById(b.toString())
            s.classList.remove("snake")
        })
    }

    renderSnake(){
        this.snake.body.forEach(b => {
            let s = this.window.document.getElementById(b.toString())
            s.classList.add('snake')
        });
    }

    createListeners(){
        this.window.document.addEventListener("keydown", this.callbacksListeners, false)
    }

    handleKeys(event){
        this.cleanSnake()
        if(event.keyCode == 39){
            this.snake.right()
        } else if(event.keyCode == 38){
            this.snake.up()
        } else if(event.keyCode == 37){
            this.snake.left()
        } else if(event.keyCode == 40){
            this.snake.down()
        }
        this.renderSnake()
        this.heatApple()
        if(this.heatBound()){
            this.snake.die()
        }
        if(!this.snake.isAlive()){   
            alert("Game Over!!")
            this.window.location.reload()
        }
    }

    setSnake(snake){
        this.snake = snake
    }

    heatApple(){
        if(
            this.snake.head()[0] === this.apple.position[0] &&
            this.snake.head()[1] === this.apple.position[1]
        ) {
            this.cleanApple()
            this.snake.eat()
            this.renderSnake()
            this.spawApple()
        }
    }

    cleanApple(){
        this.window.document.getElementsByClassName('apple')[0].classList.remove('apple')
    }

    spawSnake(){
        this.snake.init(this)
        this.renderSnake()
    }

    spawApple(){
        this.apple.setPosition(this)
        this.renderApple()
    }

    renderApple(){
        const apple = this.window.document.getElementById(this.apple.position.toString())
        apple.classList.add('apple')
    }
     
    createCrawl(){
        this.window.setInterval(() => {
            let d = this.snake.direction()
            if(d === 'up'){
                this.cleanSnake()
                this.snake.up()
                this.renderSnake()
            } else if(d === 'left'){
                this.cleanSnake()
                this.snake.left()
                this.renderSnake()
            } else if(d === 'right'){
                this.cleanSnake()
                this.snake.right()
                this.renderSnake()
            } else if(d === 'down'){
                this.cleanSnake()
                this.snake.down()
                this.renderSnake()
            }
            this.renderSnake()
            this.heatApple()
            if(this.heatBound()){
                this.snake.die()
            }
            if(!this.snake.isAlive()){   
                alert("Game Over!!")
                this.window.location.reload()
            }
        }, 100)
    }

    createAvailableScenario(){
        for(const b of this.bounderies){
            for(const s of this.struct){
                if(
                    b[0] == s[0] &&
                    b[1] == s[1]
                ){
                    console.log(b, s)
                }
            }
        }
    }
}