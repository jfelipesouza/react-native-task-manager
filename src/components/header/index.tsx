import React, { useEffect, useState } from "react";
import { Avatar, Container, Content, Image, Subtitle, Title } from "./styled";
import { gradient } from "../../theme";
import AvatarImage from "../../assets/img/avatar.png";
import { useNavigation } from "@react-navigation/native";
import { UserProps } from "../../@types/models/user";

type HeaderProps = {
  data: UserProps;
};
const Header: React.FC<HeaderProps> = ({ data }) => {
  const { colors } = gradient;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const navigation = useNavigation();

  const handleNavigate = (route: string, params?: {}) => {
    navigation.navigate(route as never, params as never);
  };

  useEffect(() => {
    const onLoad = () => {
      if (data.name) {
        setName(data.name);
      }
      if (data.image) {
        setImage(data.image);
      }
    };
    onLoad();
  }, [data]);

  return (
    <Container colors={colors}>
      <Avatar onPress={() => handleNavigate("user", data)}>
        <Image
          source={image === "" ? AvatarImage : { uri: image }}
          resizeMode={"cover"}
        />
      </Avatar>
      <Content>
        <Title>Olá, {name ? name : "Novo Usuario"}</Title>
        <Subtitle>Seja Bem-vindo</Subtitle>
      </Content>
    </Container>
  );
};

export default Header;
