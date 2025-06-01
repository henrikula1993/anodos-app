# Anodos App

## Features

- Real-time crypto data from CoinGecko API
- Pull-to-refresh to update market data
- Coin detail screen on item tap
- Loading and error state handling
- Offline support via local caching
- Light/Dark mode toggle using Context API
- Search functionality to filter coins

---

## 🛠️ Workflow Description

### 🔍 Problem Approach

I began by identifying a clean and scalable way to fetch, display, and cache public API data in a mobile-friendly UI.

### 📋 Task Structuring

Tasks were broken down into the following steps:

1. **Project Setup**
   - Initialized the project with Expo
   - Configured React Native Paper for UI
   - Set up folder structure and navigation

2. **Theme Management**
   - Created a global theme toggle using Context API

3. **Data Layer**
   - Integrated CoinGecko API
   - Set up React Query for data fetching and caching
   - Enabled offline access using AsyncStorage

4. **UI & UX**
   - Built reusable components (coin cards, loading, error)
   - Designed Home and Detail screens
   - Implemented pull-to-refresh and search filter

5. **Testing & Debugging**
   - Used console logs and Expo's built-in debugger
   - Manually tested flows on iOS and Android with Expo Go

### ✅ Feature Validation

Each feature was tested after implementation:

- Verified data fetching and caching under different network conditions
- Ensured smooth navigation between screens
- Checked dark/light mode toggle
- Checked search

---

## Tech Stack

| Layer              | Technology                          | Reason                                                                 |
|--------------------|-------------------------------------|------------------------------------------------------------------------|
| Framework          | React Native (Expo)                 | Simplifies cross-platform development for Android & iOS               |
| State Management   | Context API (for theme)             | Lightweight UI-level state for global theme toggle                    |
| Data Fetching      | React Query                         | Handles caching, background sync, stale/refresh logic, and offline UX |
| Caching/Storage    | AsyncStorage                        | Enables React Query persistence and offline support                   |
| Styling            | React Native Paper                  | Utility-first styling UI components               |
| Navigation         | React Navigation                    | Manages screen stack and navigation transitions                       |

---

## Folder Structure

- /anodos-app
- ├── /components # Reusable UI components (Loader, ErrorState)
- ├── /context # ThemeContext using React Context API
- ├── /hooks # Custom hooks for data fetching via React Query
- ├── /navigation # Navigation stack config
- ├── /screens # HomeScreen, DetailScreen
- ├── /services # API logic and data fetchers
- ├── /storage # React Query persistence setup for offline mode (AsyncStorage)
- ├── App.tsx
- └── README.md

---

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/henrikula1993/anodos-app.git
cd anodos-app

npm install
# or
yarn install

#Start Expo
npx expo start

#Start Android
npx expo run:android

#Start iOS
npx expo run:ios

### Live Preview with Expo Go

To preview the app live using **Expo Go**, log in with the following credentials:

- **Email:** henrikula7@gmail.com  
- **Password:** enoeno@1993

Then, open the Expo Go app and find the project under the "Projects" with name anodosapp:
