export default class Snake {

    constructor(){
        this.body = []
        this.length = 5
        this.alive = true
    }

    head(){
        return this.body[0]
    }

    generateHed(scenario){
        const x = Math.floor(Math.random() *  scenario.width)
        const y = Math.floor(Math.random() *  scenario.height)
        return [x, y]
    }

    init(scenario) {
        let [x, y] = this.generateHed(scenario)
        this.body.push([x, y])
        this.createBody()
    }

    createBody(){
        let head = this.head()
        let x = head[0]
        let y = head[1]
        for(let i = 0 ; i < (this.length-1) ; i++){
            y++
            this.body.push([x, y])
        }
    }

    /*
        This method verifys if the next moviment is equals to the second element in array.
        It's usage is to verify if the next moviment is reverse.
    */
    blockReverseMovement(nextMoviment){
        return (
            nextMoviment[0] === this.body[1][0] &&
            nextMoviment[1] === this.body[1][1]
        )
    }

    /*
        Verify if the next moviment is present in array.
        This indicates that the collision ocurred.
    */
    headHeatBody(head){
        return this.body.some((b, i, _) => {
            if(i !== 0){
                return (
                    b[0] === head[0] &&
                    b[1] === head[1]
                )
            }
        })
    }

    up(){
        let currenthead = this.head()
        let nextHead = [currenthead[0], currenthead[1]-1]
        console.log(this.blockReverseMovement(nextHead))
        console.log(nextHead)
        console.log(this.head())
        if(this.blockReverseMovement(nextHead)) return;
        if(!this.headHeatBody(nextHead)){
            this.body.unshift(nextHead)
            this.body.pop()
        }else{
            this.die()
        }
    }

    right(){
        let currenthead = this.head()
        let nextHead = [currenthead[0]+1, currenthead[1]]
        if(this.blockReverseMovement(nextHead)) return;
        if(!this.headHeatBody(nextHead)){
            this.body.unshift(nextHead)
            this.body.pop()
        } else {
            this.die()
        }
    }

    left(){
        let currenthead = this.head()
        let nextHead = [currenthead[0]-1, currenthead[1]]
        if(this.blockReverseMovement(nextHead)) return;
        if(!this.headHeatBody(nextHead)){
            this.body.unshift(nextHead)
            this.body.pop()
        }else{
            this.die()
        }
    }

    down(){
        let currenthead = this.head()
        let nextHead = [currenthead[0], currenthead[1]+1]
        if(this.blockReverseMovement(nextHead)) return;
        if(!this.headHeatBody(nextHead)){
            this.body.unshift(nextHead)
            this.body.pop()
        }else{
            this.die()
        }
    }

    eat(){
        let last = this.body[this.body.length-1]
        this.body.push([last[0], last[1]-1])
    }

    die(){
        this.alive = false
    }
    
    isAlive() { return this.alive === true }
        
    

    toString(){
        let head = this.head()
        const snake = {
            head: head,
            body: this.body
        }
        return snake
    }

}