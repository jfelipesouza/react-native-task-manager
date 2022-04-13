import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack";
import AleternativeRoutes from "./alternativeroutes";

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AleternativeRoutes />
    </NavigationContainer>
  );
};

export default Routes;
