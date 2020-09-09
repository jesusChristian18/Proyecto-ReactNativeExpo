import React from "react";
import { SocialIcon } from "react-native-elements";

export default function LoginFacebook() { 

    const login = () =>{
        console.log("login...");
    }

    return(
        <SocialIcon
        title="Iniciar Sesion con Facebook"
        button
        type="facebook"
        onPress={login}/>
    )
 }