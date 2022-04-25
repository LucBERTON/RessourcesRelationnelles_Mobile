import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native-web';
import { Suspense } from 'react/cjs/react.production.min';
import CommentAuthor from './CommentAuthor';

export default function RessourceComment(props) {
    const [comment, majComment] = useState([])
    const [author, majAuthor] = useState([])
    useEffect(() => {
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
                majComment(data)
                fetch(`https://127.0.0.1:8000${data.author}`, {
                    method: 'GET',
                    headers: {
                        "Content-type": "application/json",
                        "Accept": "application/json"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        majAuthor(data)
                    })
            })

    }, [])


    return (

        <View styles={styles.commentItem} keyData={props.key}>
                <Text >{author.email}</Text>
                <Text>{comment.content}</Text>
        </View>
    )
}


/*return (
    <View>
        <FlatList
            data={comments}
            renderItem={renduListComment}
            keyExtractor={item => item.id}
        />
    </View>
)*/

const styles = StyleSheet.create({
    commentItem: {
        marginTop: 1000
    }
})
