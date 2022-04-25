import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-web';



export default function CommentAuthor(props) {


    const [author, majAuthor] = useState([])

    useEffect(() => {
        const url = `https://127.0.0.1:8000${props.author}`

       fetch(url, {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                 majAuthor(data)
            })
    }, [])

    return (
        <View>
            <Text>{author.email}</Text>
        </View>
    )
}