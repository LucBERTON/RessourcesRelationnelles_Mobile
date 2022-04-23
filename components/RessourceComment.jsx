import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react'
import { TouchableOpacity } from 'react-native-web';


export default function RessourceComment(props) {
    const [comments, majComments] = React.useState([])
    console.log(props)
    React.useEffect(() => {
        const url = `https://127.0.0.1:8000${props.data}`

        fetch(url, {
            method: 'GET',
            headers: {
              "Content-type": "application/json",
              "Accept": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
          majComments(data)
        })
    }, [])

    const renduListComment = ({item}) => {
        return (
            <View>
                <Text>{item.author}</Text>
                <Text>{item.content}</Text>
                <Text>{ console.log(item.date)}</Text>
            </View>
        )
    }


    return (
        <View>
            <FlatList
                data={comments}
                renderItem={renduListComment}
                keyExtractor={item => item.id}
            />
        </View>
    )
}