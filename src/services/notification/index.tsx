import PushNotification from "react-native-push-notification";

export const showNotification = (title: string, message: string) => {
  PushNotification.localNotification({
    message: message,
    title: title,
    channelId: "alert",
    smallIcon: "icon",
    largeIcon: "icon",
  });
};

export const handleScheduleNotification = async (
  title: string,
  message: string,
  date: number | string
) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    bigText: message,
    channelId: "alert",
    smallIcon: "icon",
    largeIcon: "icon",
    allowWhileIdle: true,
    date: new Date(date),
  });
};

export const handleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};
