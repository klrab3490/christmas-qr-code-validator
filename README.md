# 🎟️🎄 Christmas Celebration 2024 - Food Coupon Validator 🎄🎟️

A simple, efficient, and secure web application designed to validate food coupons for the 2024 Christmas Celebration. This app streamlines the process of verifying and managing food coupons to ensure a seamless festive experience. 

## Features ✨

- **Real-Time Coupon Validation**: Quickly check the validity of food coupons using unique codes.
- **Firebase Integration**: Securely store and update coupon data in Firebase Realtime Database.
- **User-Friendly Interface**: Built with Next.js for fast and responsive user interactions.
- **One-Time Validation**: Each coupon can be validated only once to prevent misuse.
- **Bulk Operations**: Easily manage large numbers of coupons for event attendees.

---

## Tech Stack 🛠️

- **Frontend**: [Vite + React](https://vite.dev/) with TypeScript and Tailwind CSS.
- **Backend**: Firebase Realtime Database for seamless data management.
- **Deployment**: Hosted on [Vercel](https://vercel.com/).

---

## Installation & Setup ⚙️

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/klrab3490/christmas-qr-code-validator.git
   cd christmas-coupon-validator
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Set up the Realtime Database and obtain your Firebase configuration.
   - Add the configuration to the `.env.local` file:
     ```env
      VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
     VITE_FIREBASE_DATABASE_URL=https://your_project_id.firebaseio.com
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:`.

---

## Usage Instructions 📖

1. **Admin Login**:
   - Admins can log in using their credentials to access the validation portal.

2. **Validate Coupons**:
   - Enter the coupon code in the search bar to check its validity as well as a camera to scan the code.
   - If valid, the system marks the coupon as redeemed in Firebase.

3. **View Validated Coupons**:
   - Admins can view and manage redeemed coupons via the admin dashboard.

---

## Folder Structure 📂

```
📁 christmas-coupon-validator
├── 📁 public          # Static assets (images, fonts, etc.)
├── 📁 src
│   ├── 📁 assets          # Route definitions and page components for the Next.js app
|   ├── 📁 components      # Reusable UI components
|   │   ├── 📁 theme       # Theming configurations by ShadCN
|   │   ├── 📁 ui          # Reusable UI components styled with ShadCN
│   ├── 📁 config          # Contains Firebase configuration files
│   ├── 📁 lib             # Contains Necessary
│   ├── 📁 pages           # Contains All Pages
├── 📄 .env.local      # Environment variables for development (not shared)
├── 📄 package.json    # Dependencies and scripts
├── 📄 README.md       # Project documentation
```

---

## Live Demo 🌐

Check out the live version: [Christmas Celebration 2024 Validator](https://your-deployment-url.vercel.app)

---

## Contributions 🤝

Contributions are welcome! If you'd like to enhance this project:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`.
3. Make your changes and commit them: `git commit -m 'Add new feature'`.
4. Push to your branch: `git push origin feature/your-feature-name`.
5. Open a pull request.

---

## License 📜

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements 🙏

- Built with ❤️ using [Next.js](https://nextjs.org/).
- Hosted on [Vercel](https://vercel.com/).
- Powered by [Firebase](https://firebase.google.com/).

---
