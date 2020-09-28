import React, {useState} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {ListItem} from "react-native-elements";
import {map} from "lodash";
import Modal from "../Modal";
import ChangeDisplayNameForm from "./ChangeDisplayNameForm";
export default function AccountOptions(props){
    const {userInfo, toastRef, setreloadUserInfo} = props;
    const [showModal, setShowModal] = useState(false);
    const [renderComponent, setrenderComponent] = useState(null)
    const selectComponent = (key) => {
       switch (key) {
           case "displayName":
               setrenderComponent(
                   <ChangeDisplayNameForm
                        displayName={userInfo.displayName}
                        setShowModal={setShowModal}
                        toastRef={toastRef}
                        setreloadUserInfo={setreloadUserInfo}
                   />
                   );
               setShowModal(true);
               break;
            case "email":
               setrenderComponent(
                   <Text>email</Text>);
               setShowModal(true);
               break;
            case "password":
               setrenderComponent(
                   <Text>password</Text>);
               setShowModal(true);
               break;     
           default:
               setrenderComponent(null);
               setShowModal(false);
               break;
       }
    }
    const menuOptions = generateOptions(selectComponent);
    //console.log(menuOptions);

   
    return (
        <View>
           {map(menuOptions,( menu, index) => (
               <ListItem 
                key={index}
                title={menu.title}
                leftIcon={{
                    type: menu.iconType,
                    name: menu.iconNameLeft,
                    color: menu.iconColorLeft,
                }}
                rightIcon={{
                    type: menu.iconType,
                    name: menu.iconNameRight,
                    color: menu.iconColorRight,
                }}
                containerStyle={styles.menuItems}
                onPress = {menu.onPress}
               />
           ))}
           {renderComponent && (
                <Modal isVisible={showModal} setIsVisible={setShowModal}>
                {renderComponent}
            </Modal>
           )}
          
        </View>
    );
}

function generateOptions(selectComponent){
    return [
        {
            title: "Cambiar Nombre y Apellidos",
            iconType: "material-community",
            iconNameLeft: "account-circle",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectComponent("displayName")
        },
        {
            title: "Cambiar Email",
            iconType: "material-community",
            iconNameLeft: "at",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectComponent("email")
        },
        {
            title: "Cambiar Contraseña",
            iconType: "material-community",
            iconNameLeft: "lock-reset",
            iconColorLeft: "#ccc",
            iconNameRight: "chevron-right",
            iconColorRight: "#ccc",
            onPress: () => selectComponent("password")
        },
    ]
}
const styles = StyleSheet.create({
    menuItems: {
        borderBottomWidth: 1,
        borderBottomColor:"#e3e3e3",
        
    }
});