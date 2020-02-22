import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [goalInput, setGoal] = useState('');

  const addGoal = () => {
    if (goalInput) {
      onAddGoal(goalInput);
      setGoal('');
    }
  }

  return (
    <View style={estilos.addDiv}>
      <TextInput
        placeholder="Ingresa una meta"
        style={estilos.input}
        value={goalInput}
        onChangeText={setGoal}
      />
      <Button
        title="Agregar"
        onPress={addGoal} 
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  addDiv: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: '#252525',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  }
});

export default GoalInput;