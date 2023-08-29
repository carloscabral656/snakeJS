export default class Scenario {
    
    constructor(width, height, window){
        this.width  = width;
        this.height = height;
        this.struct = null;
        this.constructScenarioStruct();
        this.window = window
        this.snake
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

    createListeners(){
        this.window.document.addEventListener("keydown", this.callbacksListeners, false)
    }

    handleKeys(event){
        if(event.keyCode == 39){ // To Rigth
            this.snake.right()
            this.renderSnake()
        } else if(event.keyCode == 38){
            this.snake.up()
            this.renderSnake()
        } else if(event.keyCode == 37){
            this.snake.left()
            this.renderSnake()
        } else if(event.keyCode == 40){
            this.snake.down()
            this.renderSnake()
        }
    }

    setSnake(snake){
        this.snake = snake
    }

    renderSnake(){
        this.cleanMap()
        let body = [...this.snake.body]
        let head = [...this.snake.head()]
        body.unshift(head)
        body.forEach(s => {
            const e = this.window.document.getElementById(s.toString())
            e.classList.add('snake')
        });
    }

    cleanMap(){
        let snake = this.window.document.getElementsByClassName('snake')
        for(let i = 0; i < snake.length ; i++){
            console.log(snake[i].classList.remove('snake'))
        }
    }

    spawSnake(){
        this.snake.init(this)
    }
     
}