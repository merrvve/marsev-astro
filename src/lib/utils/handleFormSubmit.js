// src/handleFormSubmit.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const GOOGLE_APPS_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL"; // Replace with your Google Apps Script URL
  
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
  
      try {
        const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        const result = await response.json();
        console.log(result);
        alert("Sipariş talebiniz başarıyla gönderildi!");
      } catch (error) {
        console.error("Error:", error);
        alert("Sipariş talebinizi gönderirken bir hata oluştu.");
      }
    });
  });
  