import PushNotification from "react-native-push-notification";

type NotificationProps = {
  title: string;
  message: string;
  date: Date;
};

export const showNotification = (title: string, message: string) => {
  PushNotification.localNotification({
    message: message,
    title: title,
    channelId: "alert",
  });
};

export const handleScheduleNotification = (
  title: string,
  message: string,
  date: Date
) => {
  PushNotification.localNotificationSchedule({
    date: date,
    message,
    title,
    channelId: "alert",
    allowWhileIdle: true,
  });
};

export const handleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};
