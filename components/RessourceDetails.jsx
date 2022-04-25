import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { Suspense } from 'react/cjs/react.production.min';
import RessourceComment from './RessourceComment';
export default function RessourceDetails({ route, navigation }) {

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
            <View style={[styles.main, styles.commentContainer]}>
                <Text>Commentaires :</Text>

                {ressource.comments.map((comment, index) => {
                    return <RessourceComment  keyIndex={index} data={comment} />
                })}
            </View>


            <Button
                title='Retour à la liste'
                onPress={() => { navigation.goBack() }}
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
    img: {

        width: 50,
        height: 50
    },
    commentContainer: {
        marginTop: 50
    },

    
})