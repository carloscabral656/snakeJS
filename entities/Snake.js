export default class Snake {

    constructor(){
        this.body = []
        this.length = 10
    }

    head(){
        return this.body[0]
    }

    init(scenario) {
        const x = Math.floor(Math.random() *  scenario.width)
        const y = Math.floor(Math.random() *  scenario.height)
        this.body.push([x, y])
        this.createBody()
    }

    createBody(){
        let head = this.head()
        let x = head[0]
        let y = head[1]
        for(let i = 0 ; i < this.length ; i++){
            y++
            this.body.push([x, y])
        }
    }

    up(){
        let head = this.head()
        this.body.unshift([head[0], head[1]-1])
        this.body.pop()
    }

    right(){
        let head = this.head()
        this.body.unshift([head[0]+1, head[1]])
        this.body.pop()
    }

    left(){
        let head = this.head()
        this.body.unshift([head[0]-1, head[1]])
        this.body.pop()
    }

    down(){
        let head = this.head()
        this.body.unshift([head[0], head[1]+1])
        this.body.pop()
    }

    toString(){
        let head = this.head()
        const snake = {
            head: head,
            body: this.body
        }
        return snake.toString()
    }

}