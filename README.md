# 💳 Interactive Card Details Form

An interactive credit card form built with React.  
Users can type card details and see the card preview update in real time, with validation handled via React Hook Form.

---

## 🛠 Technologies

- React 18 (Create React App)
- React Hook Form (form validation)
- SCSS / SASS (modular styles)

---

## ✨ Features

- Real-time credit card preview while typing
- Form validation and error messages (required fields + formats)
- Responsive layout (desktop & mobile backgrounds)
- Confirmation screen after successful submission (“Thank you”)

---

## 🧠 The Process

- The UI is split into small components:
  - `Card` renders the card preview
  - `Form` manages inputs and validation using React Hook Form
  - `Thankyou` renders the success screen after submit
- Card preview updates by lifting the form values to `App` state and passing them into `Card`.
- Styling is organized using SCSS partials per component for maintainability.

---

## 📚 What I Learned

- Building user-friendly forms with React Hook Form
- Displaying validation errors in a clean UI
- Updating UI in real-time based on user input
- Organizing SCSS into reusable partials and keeping styles scalable

---

## 🔮 Improvements

- Add stricter formatting (auto-spacing card number, uppercase name)
- Improve accessibility (ARIA labels, focus management, error announcements)
- Add automated tests for validation and UI behavior
- Deploy a live demo (Vercel / Netlify)

---

## ▶️ Running the Project

Clone the repository:

```bash
git clone https://github.com/AlexFranciscoDev/Interactive-card.git
