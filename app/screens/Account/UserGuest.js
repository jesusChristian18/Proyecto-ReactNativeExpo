import React from "react";
import {StyleSheet, View, ScrollView, Text, Image} from "react-native";
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
export default function UserGuest(){
    const navigation = useNavigation();
    
        return(
        <ScrollView centerContent={true} style={styles.viewBody}>
            <Image 
                source={require("../../../assets/img/user-guest.jpg")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu perfil de 5 tenedores</Text>
            <Text style={styles.descripcion}>
                Bienvenidos a Pandarius, encuentra tu mejor restaurante y comentanos como te fue como cliente vip
            </Text>
            <View style={styles.viewBtn}>
           <Button title="Ver tu perfil"
           buttonStyle={styles.btnStyle}
           containerStyle={styles.btnContainer}
           onPress={() => navigation.navigate("login")}
           ></Button>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    viewBody: {
        marginLeft: 30,
        marginRight: 30,
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 40,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10,
        textAlign: "center",
    },
    descripcion:{
        textAlign: "center",
        marginBottom: 20,
        color:"#808080",
       
    },

    btnStyle: {
        backgroundColor: "#00a680"
    },
    btnContainer: {
        width: "70%",
    },

    viewBtn: {
        flex: 1,
        alignItems: "center",
    }
});

