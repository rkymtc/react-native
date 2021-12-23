
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import Header from './src/header';
import TodoItem from './src/todoitem';
import AddTodo from './src/addTodo';

export default function App() {

  const [todos, setTodos] = useState([{}]);


  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }
  const renderItem = ({ item, index }) => {

    if (index < 4) {
      <TodoItem item={index} pressHandler={pressHandler} />
      console.log(item)
    }
    else if (index > 4) {
      <TodoItem item={index} pressHandler={pressHandler} color={"red"} />
    }
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos]
    })
  }


  return (

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />

        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});