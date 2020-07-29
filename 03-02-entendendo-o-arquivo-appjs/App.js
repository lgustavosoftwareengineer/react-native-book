import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Modal, Button } from "react-native";

export default function App() {
  const [modalState, setModalState] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eu amo uma!</Text>
      <Text style={styles.text}>Pandinha fofinha 🐼</Text>
      <Button
        color="#a30f43"
        onPress={() => setModalState(true)}
        title="O quanto você ama a pandinha?"
      />
      <Modal transparent={true} visible={modalState}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTittle}>MAIS QUE TUDO NESSE MUNDO!</Text>
            <Text style={styles.modalText}>AAAAAAAAAAAAAAAAAAAAAA </Text>
            <Text style={styles.modalText}>🗣️🗣️🗣️🗣️🗣️🗣️🗣️🗣️🗣️🗣️🗣️</Text>
            <Button
              color="#f7add7"
              onPress={() => setModalState(false)}
              title="Close?"
            />
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7add7",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#a30f43",
    fontSize: 50,
  },
  text: {
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "#000000aa",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    margin: 50,
    padding: 20,
    minWidth: 300,
    minHeight: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#a30f43",
    borderRadius: 30,
  },
  modalTittle: {
    color: "#f7add7",
    fontSize: 30,
    fontWeight: "bold",
  },
  modalText: {
    color: "white",
    fontSize: 20,
  },
});
