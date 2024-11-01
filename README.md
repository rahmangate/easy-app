Here’s an updated README file with instructions to clone the repository, set up the EasyTeam SDK, and configure necessary environment variables:

---

# Welcome to your EasyTeam app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/rahmangate/easy-app.git
   cd easy-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install EasyTeam SDK prerequisites**

   - Install `react-native-safe-area-context` and `react-native-url-polyfill`:

     ```bash
     npm install react-native-safe-area-context react-native-url-polyfill
     ```

   - Import `react-native-url-polyfill` at the top of your entry-point file to ensure the polyfill is applied automatically:

     ```javascript
     import 'react-native-url-polyfill/auto';
     ```

4. **Install EasyTeam SDK components**

   To integrate EasyTeam front-end components, follow these steps:

   - Create a `.npmrc` file with the following content:

     ```
     @easyteam:registry=https://registry.npmjs.org/
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
     ```

   - Set up the `NPM_TOKEN` environment variable as provided by the EasyTeam support team.

   - Run the following command to install EasyTeam components:

     ```bash
     npm install @easyteam/ui
     ```

5. **Add Configuration Variables**

   Add the following required variables in your `config/index.js` file:

   ```javascript
   export const PARTNER_ID = '<YOUR_PARTNER_ID>';
   export const BASE_API = '<YOUR_BASE_API_URL>';
   export const BASE_PATH = '<YOUR_BASE_PATH>';
   ```

   Replace `<YOUR_PARTNER_ID>`, `<YOUR_BASE_API_URL>`, and `<YOUR_BASE_PATH>` with the appropriate values provided by EasyTeam.

## Set Up EasyTeam SDK

1. **Wrap your app with the `EasyTeamProvider`**

   In the root of your React Native app, import the `EasyTeamProvider` from the SDK and wrap your app with it:

   ```javascript
   import { EasyTeamProvider } from '@easyteam/ui';

   <EasyTeamProvider
     token="<YOUR_TOKEN>"
     employees={[]}
     basePath={BASE_PATH}
     customFont={null}
     isGlobalTimeTrackingEmbed={false}
   >
     <App />
   </EasyTeamProvider>
   ```

   Update the `token`, `employees`, `customFont`, and `isGlobalTimeTrackingEmbed` props as needed.

## Run the App

1. **Use Node.js version 20+**

   ```bash
   nvm use 20
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Get a Fresh Project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn More

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the Community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

---

This README now includes all instructions for cloning, setting up the EasyTeam SDK, adding configuration variables, and running the app. Let me know if there are any additional details you'd like to add!