# WebRTC Video App

A responsive single-page React application that uses the browser WebRTC API to:

- Request camera access
- Display a live video preview
- Automatically capture a photo after 5 seconds
- Display the captured image on the page

---

# Tech Stack

- React
- TypeScript
- Material UI (MUI)
- Vite
- WebRTC (`getUserMedia` API)

---

# Features

- Responsive single-page layout
- Camera permission handling
- Live webcam preview
- Automatic 5-second snapshot capture
- Captured image preview
- Proper media stream cleanup
- Mobile-friendly camera support

---

# Project Structure

```txt
src/
 ├── components/
 │    ├── Instruction.tsx
 │    ├── VideoPreview.tsx
 │    ├── Snapshot.tsx
 │    └── ErrorMessage.tsx
 │
 ├── helpers/
 │    ├── captureSnapshot.ts
 │    └── stopMediaStream.ts
 │
 ├── hooks/
 │    └── useCamera.ts
 │
 ├── App.tsx
 │
 └── main.tsx
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/maxblessed/webrtc-video-app.git
```

Navigate into the project:

```bash
cd webrtc-video-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

# Build for Production

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Camera Access Notes

This application uses the browser WebRTC API:

```js
navigator.mediaDevices.getUserMedia()
```

Camera access requires:

- HTTPS
- localhost during development

If camera access does not work:

- allow browser permissions
- ensure HTTPS is enabled
- verify camera availability

---

# Demo Video

A short demo video showing:

- camera permission request
- live preview
- automatic snapshot capture

Video Recording can be found here in demo folder:

```txt
demo/
 └── demo-recording.mp4
```

---

# Deployment

This project is deployed to:

- Vercel

---

# Live Demo

```txt
https://webrtc-video-app-neon.vercel.app/
```

---

# Author

Thompson Yeb
