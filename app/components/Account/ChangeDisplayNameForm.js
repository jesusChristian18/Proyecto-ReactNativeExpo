import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import {Input, Button} from "react-native-elements";
import * as firebase from "firebase";

export default function ChangeDisplayNameForm(props){
    const {displayName, setShowModal, toastRef, setreloadUserInfo} = props;
    const [newDisplayName, setnewDisplayName] = useState(null);
    const [error, seterror] = useState(null);
    const [isLoading, setisLoading] = useState(false)
    const onSubmit = () => {
        seterror(null);
        if(!newDisplayName){
            seterror("El nombre puede estar vacio")
        }else if(displayName === newDisplayName){
            seterror("El nombre no puede ser igual al actual")
        }else{
            setisLoading(true);
            const update = {
                displayName: newDisplayName
            };
            firebase
            .auth()
            .currentUser.updateProfile(update)
            .then(() => {
                setisLoading(false);
                setreloadUserInfo(true);
                setShowModal(false);
               
            })
            .catch(() => {
                seterror("Error al actualizar el nombre, vuelve a interntarlo");
                setisLoading(false);
            });
        }
    }
    return(
        <View style={styles.view}>
           <Input 
                placeholder="Nombre y apellidos"
                containerStyle={styles.input}
                rightIcon={{
                    type: "material-community",
                    name: "account-circle-outline",
                    color: "#c2c2c2"
                }}
                defaultValue={displayName  || ""}
                onChange={(e) => setnewDisplayName(e.nativeEvent.text)}
                errorMessage={error}
           />

           <Button 
            title="Cambiar Nombre"
            containerStyle= {styles.btnContainer}
            buttonStyle={styles.btn}
            onPress={onSubmit}
            loading={isLoading}
           />
        </View>
    );
}

const styles = StyleSheet.create({
   view: {
       alignItems: "center",
       paddingTop: 10,
       paddingBottom: 10
   },

   input:{
       marginBottom: 10
   },
   btnContainer: {
    marginTop: 20,
    width: "95%"
    
   },
   btn: {
    backgroundColor: "#00a680"
   }
});