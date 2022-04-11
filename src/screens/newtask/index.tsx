import React, { useEffect, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import uuid from "react-native-uuid";
import Toast from "react-native-toast-message";
import Icon from "react-native-vector-icons/Ionicons";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { SchemaProps } from "../../@types/models/shema";
import { gradient } from "../../theme";
import { createTask } from "../../services/database/models/bussiness";
import { Input, DateComponent, CheckField } from "../../components/form";
import {
  Container,
  Title,
  HeaderContainer,
  Scroll,
  ActiveButton,
  ActiveButtonText,
  ButtonContainer,
  ButtonIcon,
} from "./styled";
import { TOAST_CONFIG } from "../../services/toast";
import { RootParamsTasksRouter } from "../../@types/stack";
import Divisor from "../../components/divisor";

const NewTask: React.FC = () => {
  const initialValues = {
    status: false,
    priority: false,
    date: "",
    alert: "",
    content: "",
    title: "",
  };
  const { params } = useRoute<RouteProp<RootParamsTasksRouter, "newTask">>();
  const [form, setForm] = useState<SchemaProps>(
    typeof params === "undefined" ? (initialValues as SchemaProps) : params
  );
  const [enabled, setEnabled] = useState(false);

  const { colors, icons } = useTheme();
  const navigation = useNavigation();

  const handleInputChangeValue = (value: string | boolean, type: string) => {
    setForm({ ...form, [type]: value });
  };

  const createID = () => {
    const id = uuid.v4() as string;
    setForm({ ...form, _id: id });
  };

  const verify = () => {
    let result: boolean = false;
    if (
      form.date === "" ||
      form.alert === "" ||
      form.content === "" ||
      form.title === ""
    ) {
      Toast.show({
        type: "error",
        text1: "Atenção!",
        text2: "Preencha todos os campos",
        visibilityTime: 1500,
      });
      return result;
    }
    if (
      form.title !== "" &&
      form.date !== "" &&
      form.alert !== "" &&
      form.content !== "" &&
      typeof form._id === "undefined"
    ) {
      createID();
    }
    if (
      form.date !== "" &&
      form.alert !== "" &&
      form.content !== "" &&
      form.title !== "" &&
      typeof form._id === "string"
    ) {
      result = true;
    }
    return result;
  };

  const onSaveTask = async (data: SchemaProps) => {
    Keyboard.dismiss();
    const response = await createTask(data);

    if (response === true) {
      Toast.show({
        type: "success",
        text1: "Parabéns",
        text2: "Nota salva",
      });
    }
    if (response === false) {
      Toast.show({
        type: "error",
        text1: "Erro!",
        text2: "Não foi possivel salvar a sua nota",
      });
    }
  };

  const handleSubmit = async () => {
    const isVerify = verify();

    if (isVerify === true) {
      await onSaveTask(form);
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const onEnabled = () => {
    setEnabled(true);
  };

  useEffect(() => {
    if (typeof form._id === "string" && enabled === true) {
      handleSubmit();
    }
  }, [form._id]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <HeaderContainer colors={gradient.colors}>
          <ButtonIcon onPressOut={() => handleGoBack()}>
            <Icon
              name={"ios-close"}
              size={icons.xlg}
              color={colors.buttonText}
            />
          </ButtonIcon>
          <Title>
            {form._id ? "Edite sua nota" : "Adicione uma nova nota"}
          </Title>
          <ButtonIcon
            onPressOut={() => {
              handleSubmit();
              onEnabled();
            }}
          >
            <Icon name={"save"} size={icons.lg} color={colors.buttonText} />
          </ButtonIcon>
        </HeaderContainer>

        <Scroll showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior="position" enabled>
            <Input
              width="40%"
              indicator={false}
              title="Titulo"
              placeholder={"Task Name..."}
              placeholderTextColor={colors.ligthGray}
              value={form.title}
              onChangeText={(value) => handleInputChangeValue(value, "title")}
            />

            <Input
              width="60%"
              indicator={false}
              title="Descrição da nota"
              placeholder={"Description..."}
              placeholderTextColor={colors.ligthGray}
              multiline={true}
              value={form.content}
              onChangeText={(value) => handleInputChangeValue(value, "content")}
            />
          </KeyboardAvoidingView>

          <Divisor indicator width={"100%"} title={"Alertas"} />

          <DateComponent
            buttonText={form.date !== "" ? form.date : "Selecione o dia"}
            type={"date"}
            label={"Dia"}
            mode={"date"}
            setDate={(value: string, type: string) =>
              handleInputChangeValue(value, type)
            }
            display={"default"}
          />

          <DateComponent
            buttonText={form.alert !== "" ? form.alert : "Selecione a hora"}
            type={"alert"}
            label={"Hora"}
            mode={"time"}
            setDate={(value: string, type: string) =>
              handleInputChangeValue(value, type)
            }
            display={"clock"}
          />

          <CheckField
            label={"prioriedade"}
            value={form.priority}
            setValue={(value: boolean) =>
              handleInputChangeValue(value, "priority")
            }
            trackColor={{ false: colors.gray, true: colors.primary }}
            thumbColor={form.priority === true ? colors.tint : colors.ligthGray}
          />

          <ButtonContainer>
            <ActiveButton
              activeOpacity={0.5}
              onPressOut={() => {
                handleSubmit();
                onEnabled();
              }}
            >
              <ActiveButtonText>Salvar</ActiveButtonText>
            </ActiveButton>
          </ButtonContainer>
        </Scroll>
        <Toast
          position="top"
          topOffset={60}
          config={TOAST_CONFIG}
          visibilityTime={1500}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default NewTask;
