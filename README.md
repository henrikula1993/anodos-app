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

## Tech Stack

| Layer              | Technology                         | Reason                                                                 |
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

## 🛠️ Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/henrikula1993/anodos-app.git
cd anodos-app