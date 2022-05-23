import {View, StyleSheet, TextInput, Button, Text} from "react-native";
import {useEffect, useState} from "react";
import {io} from "socket.io-client";
import {useSelector} from "react-redux";

const MsgBox = ({nickname, msg}) => {
    return (
        <Text style={styles.msgBox}>
            <Text style={styles.nickName}>{nickname}: </Text>
            <Text>{msg}</Text>
        </Text>
    );
}

const ChatScreen = () => {
    //TODO: move to configs (or env var)
    const socket = io("http://192.168.1.102:5000");
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const loginName = useSelector(state => state.nickname.nickName);

    useEffect(() => {
        socket.on("message", msg => {
                setMessages([...messages, msg])
            }
        )
    });

    const sendMessage = (message) => {
        socket.emit('message', message);
        setMessage('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.msgListContainer}>
                {messages.map(({msg, nickname}) => <MsgBox msg={msg} nickname={nickname}/>)}
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.chatInputWrp}>
                    <TextInput onChangeText={text => setMessage(text)} style={styles.chatInput} value={message}/>
                </View>
                <View style={styles.sendButton}>
                    <Button title="Send" onPress={() => sendMessage({nickname: loginName, msg: message})}/>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    msgBox: {
        backgroundColor: '#3d5afe',
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-start',
        color: '#FFF'
    },
    nickName: {
        width: '100%',
        fontWeight: 'bold',
    },
    msgListContainer: {
        paddingLeft: 15,
        paddingRight: 15
    },
    container: {
        width: '100%',
        justifyContent: 'flex-end',
        height: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: "#f0f0f0",
        padding: 10
    },
    chatInputWrp: {
        width: '80%'
    },
    chatInput: {
        height: 35,
        paddingLeft: 10,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        backgroundColor: "#FFF",
    },
    sendButton: {
        width: '18%',
        paddingLeft: '2%',
        borderRadius: 10,
    }
});

export default ChatScreen;


