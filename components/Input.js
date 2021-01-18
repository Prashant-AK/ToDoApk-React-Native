import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";
const Input = (props) => {
  const [text, settext] = useState("");

  const { oncancel,onaddtolist, visibility } = props;

  const addtext = (entertext) => {
    settext(entertext);
  };

  const addtolist=()=>{
    onaddtolist(text);
    settext('')
  }
  const cancel=()=>{
    oncancel()
    settext('')
  }
  return (
    <>
      <Modal visible={visibility} animationType="fade">
        <View style={styles.inputcontainer} >
          <TextInput
            style={styles.input}
            placeholder="Enter task"
            value={text}
            onChangeText={(text) => addtext(text)}
          />
            <View style={styles.arrbtn}>
         <View  style={styles.btn}>
         <Button
           color="red"
            title="Cancel"
            onPress={() => cancel()}
          />
         </View>
          <View style={styles.btn}>
          <Button
           color="green"
           title="Add Task"
           onPress={() =>addtolist()}
         />
          </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    backgroundColor:"#e3f2fd",
    alignItems: "center",
    justifyContent: "center",
},
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  arrbtn:{
      flexDirection:'row',
  },
  btn: {
    margin: 20,
    width:'30%'
  },
});

export default Input;
