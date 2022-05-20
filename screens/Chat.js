import {View, StyleSheet, TextInput, Button, Text} from "react-native";
import {useEffect, useState} from "react";
import {io} from "socket.io-client";

export default function ChatScreen() {
    //TODO: move to configs (or env var)
    const socket = io("http://192.168.1.102:5000");
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        socket.on("message", msg => {
            setMessages([...messages, msg])
        }
    )});

    const sendMessage = (message) => {
        socket.emit('message', message);
        setMessage('')
    }

    return (
        <View style={styles.container}>
            <View>
                {messages.map(msg => <Text key={msg}>{msg}</Text>)}
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.chatInputWrp}>
                    <TextInput onChangeText={text => setMessage(text)} style={styles.chatInput} value={message} />
                </View>
                <View style={styles.sendButton}>
                    <Button title="Send" onPress={() => sendMessage(message)} />
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
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


