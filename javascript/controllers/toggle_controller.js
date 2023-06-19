import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["menu", "hamburger", "close"]

  toggleMenu() {
    this.hamburgerTarget.classList.toggle("d-none")
    this.closeTarget.classList.toggle("d-none")
    this.menuTarget.classList.toggle("mobile-hidden")
  }
}
