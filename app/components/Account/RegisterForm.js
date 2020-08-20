import React, {useState} from "react";
import { StyleSheet, View } from "react-native";
import {Input, Icon, Button} from "react-native-elements";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  
  return (
    <View style={styles.formContainer}>
        
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
            secureTextEntry={showPassword ? false : true}
            
            rightIcon={
                <Icon 
                    type="material-community"
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    iconStyle={styles.iconRight}
                    onPress={() => setShowPassword(!showPassword)}
                />
            }
        />

        <Input 
            placeholder="Repetir Contraseña"
            containerStyle={styles.inputForm}
            password={true}
            secureTextEntry={showRepeatPassword ? false : true}
            rightIcon={
                <Icon 
                    type="material-community"
                    name={showRepeatPassword ? "eye-off-outline" : "eye-outline"}
                    iconStyle={styles.iconRight}
                    onPress={() => setShowRepeatPassword(!showRepeatPassword)}
                />
            }
        />

        <Button 
            title="Registrar"
            containerStyle={styles.btnContainerRegister}
            buttonStyle={styles.btnRegister}
        />
    </View>
  );
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
    }
});