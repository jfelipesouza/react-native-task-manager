import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { SchemaProps } from "../../@types/models/shema";
import { FloatButton } from "../../components/buttons";
import { CardItem, PriorityCard } from "../../components/cards";
import {
  CardContent,
  CardLists,
  Container,
  ListContainer,
  Scroll,
} from "./styled";
import Divisor from "../../components/divisor";
import Header from "../../components/header";
import { getTasks, getUser } from "../../services/database/models/bussiness";
import { UserProps } from "../../@types/models/user";

const Home: React.FC = () => {
  const [priority, setPriority] = useState<SchemaProps[]>([] as SchemaProps[]);
  const [complet, setComplet] = useState<SchemaProps[]>([] as SchemaProps[]);
  const [pending, setPending] = useState<SchemaProps[]>([] as SchemaProps[]);
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const testeValue = {
    _id: "1",
    image:
      "https://media.bitdegree.org/storage/media/images/2018/10/The-Most-Essential-React-Interview-Questions.jpg",
    name: "Felipe Souza",
  };

  const navigation = useNavigation();

  const handleNavigation = async (router: string, params?: {}) => {
    navigation.navigate(router as never, params as never);
  };

  useEffect(() => {
    const loadScreen = async () => {
      const data = await getTasks();
      const userInfo = await getUser();

      userInfo.addListener((value) => {
        userInfo.length > 0 && setUser(value[0]);
      });

      data.addListener((values) => {
        const PRIORITY = values.filtered("priority=true && status=false");
        const COMPLET = values.filtered("status=true && priority=false");
        const PENDING = values.filtered("priority=false && status=false");
        setPriority(PRIORITY as any);
        setComplet(COMPLET as any);
        setPending(PENDING as any);
      });
    };
    loadScreen();
  }, []);

  return (
    <Container>
      <Scroll showsVerticalScrollIndicator={false}>
        <Header data={user} />
        <ListContainer>
          <Divisor indicator={false} title={"Prioriedades"} width={"40%"} />
          <CardLists
            data={priority}
            renderItem={({ item }) => (
              <PriorityCard data={item as SchemaProps} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item._id}
          />
        </ListContainer>

        <ListContainer>
          <Divisor indicator={true} title={"Pendentes"} width={"100%"} />
          {pending.length > 0 && (
            <CardContent>
              <CardLists
                data={pending}
                renderItem={({ item }) => (
                  <CardItem data={item as SchemaProps} />
                )}
                keyExtractor={(item: any) => item._id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: "center" }}
              />
            </CardContent>
          )}
        </ListContainer>

        <ListContainer>
          <Divisor indicator={false} title={"Completas"} width={"100%"} />
          {complet.length > 0 && (
            <CardContent>
              <CardLists
                data={complet}
                renderItem={({ item }) => (
                  <CardItem data={item as SchemaProps} />
                )}
                keyExtractor={(item: any) => item._id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: "center" }}
              />
            </CardContent>
          )}
        </ListContainer>
      </Scroll>
      <FloatButton onPress={() => handleNavigation("newTask")} />
    </Container>
  );
};

export default Home;
