import { View, StyleSheet, TextInput, Button } from "react-native";

export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <View style={styles.chatInputWrp}>
                    <TextInput style={styles.chatInput} />
                </View>
                <View style={styles.sendButton}>
                    <Button title="Send" />
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


