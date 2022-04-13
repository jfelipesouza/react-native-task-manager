import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Notification } from "../notification";

const { Navigator, Screen } = createStackNavigator();

const AleternativeRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4DACA6",
        },
        headerTitleStyle: {
          color: "#fff",
          textTransform: "capitalize",
        },
      }}
    >
      <Screen name={"notification"} component={Notification} />
    </Navigator>
  );
};

export default AleternativeRoutes;
