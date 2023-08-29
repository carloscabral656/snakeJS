import Scenario from "./entities/Scenario.js"
import Snake from "./entities/Snake.js"

let scenario = new Scenario(50, 100, window)
scenario.renderScenario()
let snake = new Snake()
scenario.setSnake(snake)
scenario.spawSnake(snake)
scenario.createListeners()
scenario.renderSnake(snake)

