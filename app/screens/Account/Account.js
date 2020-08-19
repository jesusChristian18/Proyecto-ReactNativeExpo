import React, {useState, useEffect} from "react";

import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";
import Loading from "../../components/Loading";

export default function Accounts(){
    const [login, setLogin] = useState(null);
    useEffect(() =>{
      firebase.auth().onAuthStateChanged ((user) => {
          
          !user ? setLogin(false) : setLogin(true);

         
     
      });
    }, []);
    
    if(login == null) return <Loading isVisible={true} text="cargando..."></Loading>;
    //metodo 1 con el if  = ? y else = :
  /*   return login ? <UserLogged></UserLogged> :<UserGuest></UserGuest>; */

  //metodo 2 con el if y else
    if(login){
        return <UserLogged></UserLogged>;
    }
    else{
        return <UserGuest></UserGuest>;
    }
}