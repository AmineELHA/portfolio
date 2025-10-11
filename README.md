# My Portfolio

Welcome to my personal portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

## Features

- Responsive design that works on all devices
- Animated sections for better user experience
- Contact form with Firebase integration
- Modern UI using shadcn/ui components
- Optimized performance with Vite

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion (for animations)
- Firebase (for contact form submission)
- React Hook Form (for form handling)
- Zod (for validation)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Enable Firestore in your Firebase project
   - Go to Project Settings > General and find your Firebase configuration
   - Create a `.env` file in the project root with the following variables:
     ```env
     VITE_FIREBASE_API_KEY=your_firebase_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_firebase_app_id
     VITE_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
     ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint
- `npm run tw:build` - Build Tailwind CSS
- `npm run tw:watch` - Watch Tailwind CSS changes

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/<your-username>/portfolio)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/<your-username>/portfolio)

Manual deployment:
1. Run `npm run build` to create a production build
2. Upload the `dist` folder to your hosting provider
3. Set environment variables in your hosting platform for Firebase configuration

## Customization

To customize this portfolio for your own use:

1. Update the content in the section components (`src/sections/`)
2. Modify the navigation links in `src/layouts/MainLayout.tsx`
3. Change the color scheme by updating the `tailwind.config.js` file
4. Update the contact form handling in `src/sections/ContactSection.tsx`
5. Replace placeholder images and text with your own information

## Firebase Integration

The contact form is integrated with Firebase Firestore to store messages. To use this feature:
1. Create a Firebase project at the Firebase console
2. Enable Firestore database
3. Add your Firebase configuration to the `.env` file
4. The form submissions will be stored in a 'contact-messages' collection in Firestore

## License

This project is open source and available under the [MIT License](LICENSE).