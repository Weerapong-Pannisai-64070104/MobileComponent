import React, { useState } from 'react';
import { StyleSheet, View, TextInput, FlatList, Text, Image, Pressable } from 'react-native';

const FollowerScreen = () => {

    const [data, setData] = useState([
        { id: 1, img: require("../assets/favicon.png"), name: 'Item 1' },
        { id: 2, img: require("../assets/adaptive-icon.png"), name: 'Item 2' },
        { id: 3, img: require("../assets/icon.png"), name: 'Item 3' },
        // เพิ่มข้อมูลเพิ่มเติมที่คุณต้องการกรอง
    ]);

    
    return (
        <View style={styles.container}>
            <View>
                
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.NameContainer}>
                        
                            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                                <View><Image style={styles.NameImg} source={item.img} /></View>
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>{item.name}</Text>
                            </View>
                            
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    SearchBar: {
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
    },
    NameContainer: {
        display: 'flex',
        width: 430,
        height: 85,
        alignItems: 'center',
        gap: 14,
        flexShrink: 0,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderRadius: 16,
        padding: 5,
        margin: 2,
        color: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    NameImg: {
        width: 50,
        height: 50,
        borderRadius: 360,
        border: '1px solid #fff'
    },
    ButtonETC: {
        width: 120,
        height: 28,
        borderRadius: 30,
        margin: 5,
        backgroundColor: '#6667ab',
        justifyContent: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        alignItems: 'center',
    },
});

export default FollowerScreen;




// ################################################  TypeScript  ##########################################################

// import React, { useState, FC } from 'react';
// import { StyleSheet, View, TextInput, FlatList, Text, Image, Pressable, ImageSourcePropType } from 'react-native';

// interface Item {
//     id: number;
//     img: ImageSourcePropType;
//     name: string;
// }

// const FollowerScreen: FC = () => {

//     const [data, setData] = useState<Item[]>([
//         { id: 1, img: require("../assets/favicon.png"), name: 'Item 1' },
//         { id: 2, img: require("../assets/adaptive-icon.png"), name: 'Item 2' },
//         { id: 3, img: require("../assets/icon.png"), name: 'Item 3' },
//         // เพิ่มข้อมูลเพิ่มเติมที่คุณต้องการกรอง
//     ]);

    
//     return (
//         <View style={styles.container}>
//             <View>
                
//                 <FlatList
//                     data={data}
//                     keyExtractor={(item) => item.id.toString()}
//                     renderItem={({ item }) => (
//                         <View style={styles.NameContainer}>
                        
//                             <View style={{alignItems: 'center', flexDirection: 'row'}}>
//                                 <View><Image style={styles.NameImg} source={item.img} /></View>
//                                 <Text style={{ color: 'black', fontSize: 15, fontWeight: "bold", marginLeft: 10 }}>{item.name}</Text>
//                             </View>
                            
//                         </View>
//                     )}
//                 />
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginTop: 5,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     SearchBar: {
//         width: 375,
//         height: 45,
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: 10,
//         borderWidth: 1,
//         borderColor: "gray",
//         borderRadius: 10,
//         alignSelf: 'center',
//         justifyContent: 'center',
//         display: 'flex',
//         padding: 5,
//     },
//     NameContainer: {
//         display: 'flex',
//         width: 430,
//         height: 85,
//         alignItems: 'center',
//         gap: 14,
//         flexShrink: 0,
//         backgroundColor: 'white',
//         flexDirection: 'row',
//         borderRadius: 16,
//         padding: 5,
//         margin: 2,
//         color: 'white',
//         borderBottomColor: 'gray',
//         borderBottomWidth: 1,
//     },
//     NameImg: {
//         width: 50,
//         height: 50,
//         borderRadius: 360,
//         border: '1px solid #fff'
//     },
//     ButtonETC: {
//         width: 120,
//         height: 28,
//         borderRadius: 30,
//         margin: 5,
//         backgroundColor: '#6667ab',
//         justifyContent: 'center',
//         textAlign: 'center',
//         alignSelf: 'center',
//         alignItems: 'center',
//     },
// });

// export default FollowerScreen;