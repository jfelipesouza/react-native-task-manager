import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import {
  Modal,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import {
  ActionButton,
  Card,
  CardContent,
  CardDescrition,
  Inline,
  CardHeader,
  CardSubtitle,
  CloseIcon,
  Container,
  Title,
  Confirm,
  ActionText,
} from "./styled";
import Divisor from "../divisor";
import { SchemaProps } from "../../@types/models/shema";
import {
  createTask,
  deleteTask,
} from "../../services/database/models/bussiness";
import { useNavigation } from "@react-navigation/native";

export type ModalProps = {
  visible: Boolean;
  data: SchemaProps;
  close: () => void;
};

export const NoteModal: React.FC<ModalProps> = ({ visible, data, close }) => {
  const { colors, icons } = useTheme();
  const navigation = useNavigation();

  const [form, setForm] = useState({
    _id: data._id,
    alert: data.alert,
    date: data.date,
    content: data.content,
    title: data.title,
    priority: data.priority,
    status: data.status,
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialValue = data;

  const scaleValue = useRef(new Animated.Value(2)).current;

  const show = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 100);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };

  const handleChangeValue = (value: boolean, type: string) => {
    if (type === "status") {
      setForm({ ...form, status: value, priority: value === true && false });
    }
    if (type === "priority") {
      setForm({ ...form, status: false, priority: value });
    }
  };

  const handleSave = async () => {
    if (
      initialValue.priority !== form.priority ||
      initialValue.status !== form.status
    ) {
      setLoading(true);
      const result = await createTask(form);
    }
  };

  const handleDeleteTask = async () => {
    const result = await deleteTask(form);
  };

  const handleEditTask = async (route: string, params?: {}) => {
    navigation.navigate(route as never, params as never);
    close();
  };

  useEffect(() => {
    show();
  }, [visible]);

  return (
    <Modal transparent hardwareAccelerated={true} visible={showModal}>
      <Container activeOpacity={1} onPress={() => close()}>
        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
          <Card>
            <CardHeader>
              <Inline>
                <View>
                  <ActivityIndicator
                    animating={loading}
                    color={colors.primary}
                    size={"large"}
                  />
                </View>
                <Title>{data.title}</Title>
                <TouchableOpacity onPressOut={() => handleSave()}>
                  <Icon name={"save"} size={23} color={colors.primary} />
                </TouchableOpacity>
              </Inline>
              <CardSubtitle>
                Realisar até {data.date} as {data.alert}
              </CardSubtitle>
            </CardHeader>
            <ScrollView>
              <CardContent>
                <Divisor title="Descrição" indicator={false} width="100%" />
                <CardDescrition>{data.content}</CardDescrition>
                <Divisor title="Ações" indicator width="30%" />
                <Inline>
                  <CardSubtitle>Competada</CardSubtitle>
                  <Confirm
                    value={form.status}
                    onValueChange={(value) => {
                      handleChangeValue(value, "status");
                    }}
                    trackColor={{
                      false: colors.ligthGray,
                      true: colors.primary,
                    }}
                    thumbColor={form.status ? colors.tint : colors.gray}
                    ios_backgroundColor="#3e3e3e"
                  />
                </Inline>
                <Inline>
                  <CardSubtitle>Prioriedade</CardSubtitle>
                  <Confirm
                    value={form.priority}
                    onValueChange={(value) => {
                      handleChangeValue(value, "priority");
                    }}
                    trackColor={{
                      false: colors.ligthGray,
                      true: colors.primary,
                    }}
                    thumbColor={form.priority ? colors.tint : colors.gray}
                    ios_backgroundColor="#3e3e3e"
                  />
                </Inline>
                <Inline>
                  <ActionButton
                    type="edit"
                    onPress={() => handleEditTask("newTask", form)}
                  >
                    <ActionText>Editar</ActionText>
                  </ActionButton>

                  <ActionButton
                    type="delete"
                    onPressOut={() => handleDeleteTask()}
                  >
                    <ActionText>Deletar</ActionText>
                  </ActionButton>
                </Inline>
              </CardContent>
            </ScrollView>
          </Card>
        </Animated.View>
        <CloseIcon onPressOut={() => close()} activeOpacity={0.5}>
          <Icon
            name={"close-outline"}
            size={icons.xxxlg}
            color={colors.cardColor}
          />
        </CloseIcon>
      </Container>
    </Modal>
  );
};
