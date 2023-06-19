import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu", "hamburger", "close"]

  static values = { isOpen: Boolean }

  connect() {
    // console.log(this.element)
    this.updateMenuVisibility()
    window.addEventListener("resize", this.updateMenuVisibility.bind(this))
  }

  disconnect() {
    window.removeEventListener("resize", this.updateMenuVisibility.bind(this))
  }

  menu() {
    // console.log("you clicked the button!")
    // console.log(this.menuTarget)
    if (this.isOpenValue) {
      this.hide()
    } else {
      this.show()
    }
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
      this.hide()
    } else {
      this.show()
    }
  }
}
