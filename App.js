import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Input from "./components/Input";
import List from "./components/List";

const App = () => {
  const [list, setlist] = useState([]);
  const [visible, setvisible] = useState(false);
  // console.log(list)
  // console.log(text);

  const addtolist = (addgoal) => {
    setlist((current) => [
      ...current,
      { value: addgoal, key: Math.random().toString() },
    ]);
    setvisible(false);
    // console.log(list);
  };

  const removeList = (textkey) => {
    setlist((currentlist) => {
      return currentlist.filter((goal) => goal.key !== textkey);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Todo List App</Text>

      <Button
        title="Add new goal"
        color="#ff3d00"
        onPress={() => setvisible(true)}
      />
      <Input
        visibility={visible}
        oncancel={() => setvisible(false)}
        onaddtolist={addtolist}
      />

      <FlatList
        style={{ paddingTop: 20 }}
        keyExtractor={(item, index) => item.key}
        renderItem={(itemData) => (
          <List
            ondelete={removeList}
            id={itemData.item.key}
            title={itemData.item.value}
          />
        )}
        data={list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1f5fe",
    marginTop: 50,
    padding: 30,
  },
  head: { padding: 20, fontSize: 30, fontStyle: "italic", color: "#8e24aa" },
});
export default App;
