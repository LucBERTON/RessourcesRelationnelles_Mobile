import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function RessourceDetails({route, navigation}) {

    let ressource = route.params.ressource
    console.log(ressource)

  return (
    <View style={styles.container}>
            <View>
                    <Text style={styles.txt}>{ressource.title} </Text>
                    <Text style={styles.txt}>Auteur : {ressource.author} </Text>
                    <Text style={styles.txt}>{ressource.submitDate} </Text>
                    <Text style={styles.txt}> {ressource.content} </Text>
                </View>
            <View style={[styles.main, styles.liste]}>
                <Text>Commentaires :</Text>

                {ressource.comments.map((comment, index) => {
                    return <Text key={index}>{comment}</Text>
                })}
            </View>


            <Button
                title='Retour à la liste'
                onPress={() => {navigation.goBack()} }
                ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    liste: {
        borderWidth: 1,
        borderRadius: 30,
        borderColor: 'black',
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        flex: 0


    },
    img: {

        width: 50,
        height: 50
    }
})