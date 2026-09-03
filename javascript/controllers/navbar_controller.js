import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  async connect() {
    try {
      const response = await fetch("/components/navbar.html");

      if (!response.ok) {
        throw new Error("Navbar could not be loaded.");
      }

      const html = await response.text();

      this.element.innerHTML = html;
    } catch (error) {
      console.error("Error loading navbar:", error);
    }
  }
}