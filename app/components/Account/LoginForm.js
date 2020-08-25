import React from "react";
import {StyleSheet, View} from "react-native";
import { Input, Icon, Button } from "react-native-elements";

export default function LoginForm() {
    return (
        <View style={StyleSheet.formContainer}>
        <Input
        placeholder="Correo electronico"
        containerStyle={styles.inputForm}
       
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
        secureTextEntry={true}
       
        rightIcon={
          <Icon
            type="material-community"
            name={"eye-outline"}
            iconStyle={styles.iconRight}
            
          />
        }
      />
        </View>
    )
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
    btnRegister: {
      backgroundColor: "#00a680",
    },
    iconRight: {
      color: "#00a680",
    },
  });