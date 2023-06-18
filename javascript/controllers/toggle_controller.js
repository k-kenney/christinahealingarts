import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu", "hamburger", "close"]
  static values = { isOpen: { type: Boolean, default: false } }

  connect() {
    console.log("connected!")
    this.updateMenuVisibility();
    window.addEventListener("resize", this.updateMenuVisibility.bind(this));
  }

  disconnect() {
    window.removeEventListener("resize", this.updateMenuVisibility.bind(this));
  }

  menu() {
    console.log("you clicked the button!")
    console.log(this.menuTarget)
    this.isOpenValue ? this.hide() : this.show()
    this.isOpenValue = !this.isOpenValue
  }

  show() {
    this.menuTarget.style.display = "block"
    this.hamburgerTarget.style.display = "none"
    this.closeTarget.style.display = "block"
  }

  hide() {
    this.menuTarget.style.display = "none"
    this.hamburgerTarget.style.display = "block"
    this.closeTarget.style.display = "none"
  }

  updateMenuVisibility() {
    if (window.innerWidth <= 992) {
      this.hide();
    } else {
      this.show();
    }
  }
}

// import { Controller } from "@hotwired/stimulus"

// export default class extends Controller {
//   static targets = ["menu", "hamburger", "close"]
//   static values = { isOpen: { type: Boolean, default: false } }

//   // initialize() {
//   //   this.isOpen = false
//   // }

//   connect() {
//     console.log("connected!")
//     if (window.innerWidth <= 768) {
//       this.hide()
//     } else {
//       this.show()
//     }
//   }

//   menu() {
//     console.log("you clicked the button!")
//     console.log(this.menuTarget)
//     this.isOpenValue ? this.hide() : this.show()
//     this.isOpenValue = !this.isOpenValue
//   }

//   show() {
//     this.menuTarget.style.display = "block"
//     this.hamburgerTarget.style.display = "none"
//     this.closeTarget.style.display = "block"
//   }

//   hide() {
//     this.menuTarget.style.display = "none"
//     this.hamburgerTarget.style.display = "block"
//     this.closeTarget.style.display = "none"
//   }
// }
