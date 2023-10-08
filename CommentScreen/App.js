import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CommentScreen from './Screen/CommentScreen';
import EditProfileScreen from './Screen/EditProflieScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <CommentScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
