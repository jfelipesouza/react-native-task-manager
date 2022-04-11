import React, { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { launchImageLibrary } from "react-native-image-picker";
import { RootParamsTasksRouter } from "../../@types/stack";
import { UserProps } from "../../@types/models/user";
import { Input } from "../../components/form";
import { UpdateUser } from "../../services/database/models/bussiness/updateUser";
import {
  Avatar,
  AvatarImage,
  Container,
  Content,
  Header,
  HeaderButton,
  Icon,
  Scroll,
} from "./styled";
import UserImage from "../../assets/img/avatar.png";
import uuid from "react-native-uuid";
import Toast from "react-native-toast-message";
import { TOAST_CONFIG } from "../../services/toast";

const User: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const { params } = useRoute<RouteProp<RootParamsTasksRouter, "user">>();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState(params._id);

  const goBack = () => {
    navigation.goBack();
  };

  const handleClick = async () => {
    const result = await launchImageLibrary({ mediaType: "photo" });
    const { assets } = result;
    if (assets) {
      setImage(assets[0].uri as string);
    }
  };

  const handleSaveForm = async () => {
    Keyboard.dismiss();
    const form: UserProps = {
      _id: id,
      name: name !== "" ? name.trim() : undefined,
      image: image !== "" ? image : undefined,
    };
    const response = await UpdateUser(form);

    if (response) {
      Toast.show({
        text1: "Parabéns",
        text2: "Informação atualizada com sucesso",
        type: "success",
      });
    } else {
      Toast.show({
        text1: "Error!!!",
        text2: "Não foi possivel atualizar as informações",
        type: "error",
        visibilityTime: 2000,
      });
    }
  };

  useEffect(() => {
    if (params.image) {
      setImage(params.image);
    }
    if (params.name) {
      setName(params.name);
    }
    if (typeof params._id === "undefined") {
      setId(uuid.v4().toString());
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderButton onPress={() => goBack()}>
          <Icon name={"arrow-back"} />
        </HeaderButton>

        <HeaderButton onPress={() => handleSaveForm()}>
          <Icon name={"save"} />
        </HeaderButton>
      </Header>
      <Scroll>
        <Content behavior="position" enabled>
          <Avatar onPress={() => handleClick()}>
            <AvatarImage
              resizeMethod="scale"
              resizeMode="cover"
              source={
                image === ""
                  ? UserImage
                  : {
                      uri: image,
                    }
              }
            />
          </Avatar>

          <Input
            indicator={false}
            title={"Como quer ser chamado"}
            width={"100%"}
            placeholder={"Ex: José Bezerra"}
            placeholderTextColor={colors.ligthGray}
            value={name}
            onChangeText={(value) => setName(value)}
          />
        </Content>
      </Scroll>
      <Toast
        position="top"
        topOffset={60}
        config={TOAST_CONFIG}
        visibilityTime={1500}
      />
    </Container>
  );
};

export default User;
