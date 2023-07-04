import { application } from "./application.js"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import ToggleController from "./toggle_controller"
application.register("toggle", ToggleController)

