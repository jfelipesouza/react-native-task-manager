/**
 * @format
 */

import "react-native-gesture-handler";
import { AppRegistry, Platform } from "react-native";
import App from "./src";
import { name as appName } from "./app.json";
import PushNotification from "react-native-push-notification";

PushNotification.configure({
  onRegister: function (token) {
    console.log("TOKEN:", token);
  },

  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,

  requestPermissions: Platform.OS === "ios",
});

AppRegistry.registerComponent(appName, () => App);
