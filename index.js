import Scenario from "./entities/Scenario.js"
import Snake from "./entities/Snake.js"

let scenario = new Scenario(50, 70, window)
scenario.constructScenarioStruct()
scenario.renderScenario()
scenario.createBoundaries()
scenario.createAvailableScenarioApple()


let snake = new Snake()
scenario.setSnake(snake)
scenario.createCrawl()
scenario.createListeners()
scenario.spawSnake()
scenario.spawApple()




