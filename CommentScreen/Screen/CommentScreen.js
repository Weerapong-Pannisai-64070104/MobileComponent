import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const CommentScreen = () => {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);
    const user = { name: 'John', img: require("../assets/favicon.png") };

    const addComment = () => {
        if (comment) {
            setCommentsList([...commentsList, { text: comment, likes: 0 }]);
            setComment('');
        }
    };

    const likeComment = (index) => {
        const updatedComments = [...commentsList];
        updatedComments[index].likes += 1;
        setCommentsList(updatedComments);
    };

    return (
        <View style={styles.container}>
            {/* <Text style={{ fontSize: 24, marginBottom: 16 }}>Comment Screen</Text> */}
            <View style={styles.CommentBar}>
                <TextInput style={{ width: 330 }}
                    placeholder="กรอกความคิดเห็น"
                    value={comment}
                    onChangeText={(text) => setComment(text)}
                    multiline={true}
                />
                <TouchableOpacity onPress={addComment}>
                    <Entypo name="paper-plane" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.commentsContainer}>
                {commentsList.map((item, index) => (
                    <View style={styles.CommentContainer} key={index}>
                        <View><Image style={styles.NameImg} source={user.img} /></View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.Name}>{user.name}</Text>
                            <Text>{item.text}</Text>
                        </View>
                        <TouchableOpacity onPress={() => likeComment(index)}>
                            <View style={{ justifyContent: 'center', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                                <Octicons name="feed-heart" size={24} color="#EF3240" />
                                <Text > {item.likes}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    CommentBar: {
        width: 375,
        minHeight: 45, // กำหนดความสูงขั้นต่ำ
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        alignSelf: 'center',
        display: 'flex',
        padding: 5,
        marginBottom: 5,
        justifyContent: 'space-between',
    },
    commentsContainer: {
        width: 375,
        flex: 1,
        marginBottom: 5,
    },
    CommentContainer: {
        display: 'flex',
        width: 375,
        minHeight: 128, // กำหนดความสูงขั้นต่ำ
        alignItems: 'center',
        gap: 14,
        flexShrink: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 16,
        padding: 5,
        margin: 2,
        color: 'white',
        borderBottomWidth: 3,
        borderColor: 'black',
        justifyContent: 'space-between',
    },
    NameImg: {
        width: 50,
        height: 50,
        borderRadius: 360,
        border: '1px solid #fff',
        marginRight: 10,
    },
    Name: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

export default CommentScreen;
