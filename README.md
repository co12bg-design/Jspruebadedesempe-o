# 💡 Cinema reservation SPA


A simple and interactive reservation Single Page Application (SPA) built with vanilla JavaScript focus in a cinema, HTML, and CSS. Users can register, log in, make reservations, and manage reservation, you can add, edit, and delete reservations. Uses `json-server` as a mock backend.

---

## 🖼️ Preview

View of the SPA as a visitor (role: `visitor`).

![Cinema reservation SPA Preview](public/log%20in.png)

---

## 🎯 Key Features

- User registration and login with role validation.
- Interface adapts to a user role (`user` or `Admi`).
- The system is able to make reservations
- Cancel reservations.
- Full CRUD for reservations (Admin only).
- Global view of reservations.

---

## 🚀 How to Run the Project

### 1. Clone the Repository

```bash
git clone hhttps://github.com/co12bg-design/Jspruebadedesempe-o.git
cd Cinema-reservation-spa
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Simulated Backend (json-server)

```bash
npm run server
```

This will launch a JSON server at: [http://localhost:3000](http://localhost:3000)

### 4. Start the Application

In another terminal, run:

```bash
npm run dev
```

This will start the SPA in development mode using Vite. Open your browser at: [http://localhost:5173](http://localhost:5173)

---

## 🧭 How the App Works

### 1. Home Page

- Displays the button: **Log In** and it has the option to remember the user.
- Direct navigation to protected routes is blocked if not logged in.

### 2. Login

- User must enter email and password.
- If credentials are valid, the user is redirected to the dashboard.

---

## 🖥️ Dashboard (Main Panel)

The content varies depending on the **user role**:

### 👤 Role: Visitor

- **Available reservations**: lists all current reservations.
    - If a book has copies (`available > 0`) and hasn't been reserved by the user, it can be **reserved**.
    - When reserving:
        - The available count is decreased by 1.
        - The reservation is stored for the user.
- **My Reservations**: shows books reserved by the visitor.
    - Reservations can be canceled (increasing availability).

### 📚 Role: Admi

- **Reservation Catalog**:
    - Lists all registered reservations.
    - Allows manipulate, editing, and deletion of reservations.

---

## 🧪 Test Credentials

### Librarian
- Email: `user@test.com`
- Password: `A123456`

### Visitor
- Email: `admin@test.com`
- Password: `A123456`

---

## 🛠️ Technologies Used

- **Vite** for development tooling.
- **Vanilla JavaScript** (no frameworks).
- **json-server** for a mock backend.

---

## 📁 Project Structure

```
library-booking-spa/
├── public/                      # Public static files
├── src/                         # Main source code
│   ├── assets/                  # Static assets (e.g., images)
│   │   └── img/
│   ├── auth/                    # User login and registration
│   │   └── guards.js
│   │ 
│   ├── components/                   # reservation management
│   │   ├── reservationCard.js
│   │   └── Slidebar.js
│   ├── Controlls/            # Reservation features
│   │   ├── home.controlls.js
│   │   ├── login.controlls.js
│   │   └── reservationList.js
│   ├── router/                  # SPA routing system
│   │   └── router.js
│   ├── services/                # API functions
│   │   └── reservation.service.js
│   ├── utils                   # Helpers (e.g., session management)
│   │  
│   ├── views/                   # Main views
│   │   ├── homeView.js
│   │   ├── loginView.js
│   │   └── notFound.js
│   ├── main.js                  # Main entry point
│   └── style.css                # Global styles
├── db.json                      # Mock database (json-server)
├── index.html                   # Main HTML file
├── .gitignore                   # Git ignored files
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Locked dependencies                 
└── README.md                    # README 
```

---

## ⚙️ Prerequisites

- Node.js ≥ 18
- npm ≥ 9

---

## 📌 Additional Notes

- Session is stored in `localStorage`.
