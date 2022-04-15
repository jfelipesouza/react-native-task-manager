import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { RootParamsTasksRouter } from "../../../@types/stack";
import Home from "../../home";
import NewTask from "../../newtask";
import User from "../../user";

const { Navigator, Screen } = createStackNavigator<RootParamsTasksRouter>();

const StackRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
      }}
      initialRouteName={"banana"}
    >
      <Screen name="home" component={Home} />
      <Screen name="newTask" component={NewTask} />

      <Screen
        name="user"
        component={User}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Navigator>
  );
};

export default StackRoutes;
