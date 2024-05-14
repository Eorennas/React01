import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export default function Home() {
const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <Text>Tela home</Text>
            <Button title='ir para sobre ' onPress={() => {navigation.navigate('Sobre') }} />
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
