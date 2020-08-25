import React,{useState} from "react";
import {StyleSheet, View} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { size, isEmpty } from "lodash";
import Toast from "react-native-easy-toast";
import Loading from "../Loading";
import { validateEmail } from "../../utils/validations";

import * as firebase from "firebase";

import {useNavigation} from "@react-navigation/native";
export default function LoginForm(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue());
  const { toastRef } = props;

  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  
  const [loading, setloading] = useState(false);
  const navigation = useNavigation();

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };


  const onSubmit = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)){
      console.log("entro");
      toastRef.current.show("todos los campos son obligatorios");
    }
  };
    return (
        <View style={StyleSheet.formContainer}>
        <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
        onChange={(e) => onChange(e, "email")}
        //maxLength={10}
        //keyboardType='numeric'

        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />

       <Input
        placeholder="Contraseña"
        containerStyle={styles.inputForm}
        password={true}
        secureTextEntry={showPassword ? false : true}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
          type="material-community"
          name={showPassword ? "eye-off-outline" : "eye-outline"}
          iconStyle={styles.iconRight}
          onPress={() => setShowPassword(!showPassword)}
        />
        }
      />
       <Button
        title="Registrar"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnIniciar}
        onPress={onSubmit}
      />
        </View>
    );
}

function defaultFormValue() {
  return {
    email: "",
    password: "",
  };
}

const styles = StyleSheet.create({
    formContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
    },
    inputForm: {
      width: "100%",
      marginTop: 20,
    },
    btnContainerRegister: {
      marginTop: 20,
      width: "95%",
    },
    btnIniciar: {
      backgroundColor: "#00a680",
    },
    iconRight: {
      color: "#00a680",
    },
  });