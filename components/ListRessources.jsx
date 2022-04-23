import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react'
import { TouchableOpacity } from 'react-native-web';



export default function ListRessources( {navigation}) {

    const [ressources, majRessources] = React.useState([])
    
    React.useEffect(() => {
        const url = `https://127.0.0.1:8000/api/ressources`

        fetch(url, {
            method: 'GET',
            headers: {
              "Content-type": "application/json",
              "Accept": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
          majRessources(data)
        })
    }, [])



    

    
    const renduListRessources = ({ item }) => {
        return (
            <TouchableOpacity
                style={[styles.view, styles.card]}
                onPress={() => navigation.navigate('ressourceDetails', {ressource: item})}>
                <View>
                    <Text style={[styles.txt, styles.title]}>Titre: {item.title} </Text>
                    <Image source={{uri: item.imageUrl}} style={styles.img}/>
                    <Text style={styles.txt}>Auteur : {item.author} </Text>
                    <Text style={styles.txt}>Date de soumission : {item.submitDate} </Text>
                </View>
            </TouchableOpacity>
        )
    }


  return (
    <View>
            <FlatList
                data={ressources}
                renderItem={renduListRessources}
                keyExtractor={item => item.id}
            />
        </View>
  )
}



const styles = StyleSheet.create({
    img: {
        width: 300,
        height: 300,
        marginBottom:20,
        marginTop: 20,
        marginLeft: 50,
    },
    view: {
        flexDirection: 'row',
        padding: 10,
       
    },
    card: {
        borderBottomWidth: 1,
        borderColor: 'blue',
        marginTop: 50,
        marginBottom: 50
    },
    txt: {
        marginLeft: 20,
        paddingTop: 10
    },
    title:{
        fontSize: 30
    }
});
