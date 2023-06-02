import { application } from "./application.js"

import HelloController from "./hello_controller"
application.register("hello", HelloController)
