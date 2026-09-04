import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  async connect() {
    try {
      const response = await fetch("/components/footer.html");

      if (!response.ok) {
        throw new Error("Footer could not be loaded.");
      }

      const html = await response.text();

      this.element.innerHTML = html;
    } catch (error) {
      console.error("Error loading footer:", error);
    }
  }
}