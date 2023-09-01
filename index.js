import Scenario from "./entities/Scenario.js"
import Snake from "./entities/Snake.js"
import Apple from "./entities/Apple.js"

let scenario = new Scenario(50, 100, window)
scenario.renderScenario()
scenario.createBoundaries()
let snake = new Snake()
scenario.setSnake(snake)
scenario.createListeners()
scenario.spawSnake()
scenario.spawApple()

