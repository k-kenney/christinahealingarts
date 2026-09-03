// 

import { application } from "./application.js";

import HelloController from "./hello_controller.js";
import ToggleController from "./toggle_controller.js";
import FaqController from "./faq_controller.js";

application.register("hello", HelloController);
application.register("toggle", ToggleController);
application.register("faq", FaqController);