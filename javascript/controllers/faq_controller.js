import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  toggleGroup(event) {
    const group = event.currentTarget.closest(".faq-group");

    if (group) {
      group.classList.toggle("active");
    }
  }

  toggleQuestion(event) {
    const item = event.currentTarget.closest(".faq-item");

    if (item) {
      item.classList.toggle("active");
    }
  }
}