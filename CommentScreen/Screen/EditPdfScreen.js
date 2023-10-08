import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import { MultipleSelectList } from 'react-native-dropdown-select-list'

const EditPdfScreen = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    // const [tag, setTag] = useState('');

    const [selected, setSelected] = React.useState("");

    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]

    const handleSaveProfile = () => {
        // นี่คือตำแหน่งที่คุณจะทำการบันทึกข้อมูลโปรไฟล์
    };

    return (
        <View>
            <Pressable style={styles.ButtonUpdate} onPress={handleSaveProfile}>
                        <Text style={{ color: '#6667ab', justifyContent: 'center', fontWeight: 'bold' }}>Save</Text>
                    </Pressable>
            <ScrollView>
                <View style={styles.container}>

                    {/* <Text>Edit Profile</Text> */}
                    
                    <TextInput
                        placeholder="   ชื่อสรุป"
                        value={name}
                        onChangeText={text => setName(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="   คำอธิบายสรุป"
                        value={description}
                        onChangeText={text => setDescription(text)}
                        style={styles.input}
                    />
                    {/* <TextInput
                        placeholder="Tag"
                        value={tag}
                        onChangeText={text => setTag(text)}
                        style={styles.input}
                    /> */}

                    <MultipleSelectList
                        setSelected={(val) => setSelected(val)}
                        data={data}
                        save="value"
                        label="Categories"
                        styles={styles.selectList}
                        placeholder='Tag '
                        badgeStyles={{ backgroundColor: '#6667ab' }}
                        backgroundColor={{ backgroundColor: 'white' }}
                        boxStyles={styles.selectList}
                    />
                    {/* <View style={styles.ButtonUpdate}>
                <Button
                    onPress={handleSaveProfile}
                    title="Press Me"
                    color="black"
                    width="300"
                    borderRadius="40"
                />
            </View> */}
                    <Pressable style={styles.ButtonSelectPDF} onPress={handleSaveProfile}>
                        <Text style={{ color: 'white', justifyContent: 'center', fontWeight: 'bold' }}>Select file PDF</Text>
                    </Pressable>
                </View></ScrollView></View>

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
    input: {
        width: 375,
        height: 45,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        display: 'flex',
        padding: 5,
        margin: 20,
    },
    ButtonSelectPDF: {
        width: 375,
        height: 45,
        borderRadius: 30,
        margin: 20,
        backgroundColor: 'black',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
    ButtonUpdate: {
        margin: 10,
        textAlign: 'right',
        alignSelf: 'flex-end'
    },
    NameImg: {
        width: 140,
        height: 140,
        borderRadius: 360,
        border: '1px solid #fff',
    },
    selectList: {
        width: 375,
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 10,
        padding: 5,
        margin: 20,
    }
});

export default EditPdfScreen;
