import React,{useState} from "react";
import {View, Text, Button} from "react-native";
import Loading from "../../components/Loading";
import * as firebase from "firebase";
export default function UserLogged(){
    
    const [cargando, setCargando] = useState(false);
    return(
        <View>
            <Text>UserLogged..</Text>
            <Button title="cerrar sesion" onPress={()   => firebase.auth().signOut()} />
            <Loading isVisible={cargando} text="Cerrando Sesion"/>
        </View>
    );
}