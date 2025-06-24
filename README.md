# BookingAppointment

This is a full-stack application that allows users to book appointments via a web form and receive confirmation on WhatsApp using Twilio's WhatsApp API.

---

## 🔧 Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Messaging API:** Twilio WhatsApp API
- **Environment Management:** dotenv
- **Cross-Origin Support:** CORS

---

## 🚀 Features

- Book appointment with name, date, time, and WhatsApp number
- Sends WhatsApp confirmation message to one or more numbers
- Validates user inputs
- Secures API credentials via `.env` file
- Allows broadcasting to multiple users (with opt-in)

---

## 📁 Project Structure

```

/project-root
│
├── public/
│   └── index.html        # Frontend booking form
│
├── server.js             # Express backend
├── .env                  # Environment variables (not committed)
├── .gitignore
├── package.json
└── README.md             # You are here

````

---

## ⚙️ Prerequisites

- Node.js & npm installed
- Twilio account with WhatsApp sender enabled
- Verified Twilio sandbox or approved WhatsApp Business account

---

## 📦 Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/BookingAppointment-app.git
   cd BookingAppointment-app
````

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set up `.env` File**

   Create a `.env` file in the root directory and add:

   ```env
   TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   PORT=3000
   ```

---

## 💻 Run Locally

1. **Start Backend Server**

   ```bash
   node server.js
   ```

2. **Open Frontend**

   Open `public/index.html` in your browser (or serve it with any local static server).

---



## ⚠️ Important Notes

* Twilio can only send WhatsApp messages to:

  * Users who have previously messaged your Twilio number
  * Or users using **approved template messages**
* You must follow [WhatsApp Business Policy](https://www.whatsapp.com/legal/business-policy)

---

## 📎 Future Improvements

* Add MongoDB to store appointments
* Admin dashboard for tracking bookings
* QR code to initiate WhatsApp opt-in chat
* Message templates using Twilio Content API

---

## 🤝 Credits

* [Twilio WhatsApp API Docs](https://www.twilio.com/docs/whatsapp)
* Icons by [FontAwesome](https://fontawesome.com)

