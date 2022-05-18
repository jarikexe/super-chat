import {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from "react-native";
import {useSelector, useDispatch} from 'react-redux';
import {updateNickName} from '../store/actions/nickname'

export default function HomeScreen({navigation}) {
    const loginName = useSelector(state => state.nickname.nickName);
    const [loginNameHolder, setLoginNameHolder] = useState('');
    const dispatch = useDispatch();

    const changeNickName = () => {
        dispatch(updateNickName(loginNameHolder))
        navigation.navigate('Chat');
    }

    return (
        <View style={styles.container}>
            <Text>{loginName}</Text>
            <TextInput
                style={styles.login}
                onChangeText={(val) => setLoginNameHolder(val)}
                placeholder='Launchpad McQuack'/>
            <View style={styles.loginButton}>
                <Button title='Login' onPress={() => changeNickName()}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        padding: 30,
    },
    login: {
        width: '100%',
        padding: 5,
        borderColor: '#000',
        borderWidth: 2,
        borderStyle: 'solid',
        marginBottom: 10,
    },
    loginButton: {
        width: '100%',
    }
});


