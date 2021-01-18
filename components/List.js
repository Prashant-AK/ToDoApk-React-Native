import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const List = (props) => {
  const {title,id,ondelete}=props;
    return (
    <>
      <TouchableOpacity onPress={()=> ondelete(id)}>
        <View style={styles.list}>
          <View style={styles.listtext}>
            <Text>{title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  listtext: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    backgroundColor: "whitesmoke",
  },
});

export default List;
