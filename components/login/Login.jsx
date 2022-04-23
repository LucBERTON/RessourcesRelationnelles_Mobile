import { StackActions } from "@react-navigation/native"
import React from 'react'
import {View, Text, TextInput,StyleSheet,Button} from 'react-native'
import {storeData, USER_KEY, TOKEN_KEY} from '../../service/StorageService'
import {UserContext} from '../../App'
import jwtDecode from "jwt-decode";



export default function Login({route,navigation}){
    const [email, majEmail] = React.useState('admin@test.fr')
    const [pwd, majPwd] = React.useState('admin')
    const context = React.useContext(UserContext)

    const submit = () => {
        const url = `https://localhost:8000/api/login_check`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: email, password: pwd
            }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then((response)=> response.json())
        .then(async (data) => {
            if (data && data.token) {
              
              context.token.setValue(data.token)

              const decoded = jwtDecode(data.token)
              console.log(decoded)
              
              await storeData(USER_KEY, decoded.username)
              await storeData(TOKEN_KEY, data.token)


                navigation.dispatch(
                    StackActions.replace('home', {
                    })
                  );
            } else {
                navigation.dispatch(
                    StackActions.replace('login', {
                    })
                  );
            }
        })
    }


    return (
        <View>
            <Text>Login</Text>
            <TextInput
            style={styles.input}
            onChangeText={majEmail}
            value={email}
            keyboardType='email-address'
            />
            <TextInput
            style={styles.input}
            onChangeText={majPwd}
            value={pwd}
            secureTextEntry={true}/>
            <Button title="Connexion" onPress={submit} />
            {
                (context.token.value) && (<Button title="Connexion" onPress={submit}/>)
            }
        </View>
    )

}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 2,
        height: 30
    }
});