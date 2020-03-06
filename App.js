import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Modal } from 'react-native';

import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

export default function App() {
  const [goalList, setGoalList] = useState([]);

  const addGoal = newGoal => {
    setGoalList([...goalList, newGoal]);
  }
  const onDelete = achievedGoal => {
    setGoalList(goalList.filter(goal => goal !== achievedGoal));
  }

  return (
    <View style={estilos.container}>
      <GoalInput
        onAddGoal={addGoal}
      />
      <FlatList
        data={goalList}
        keyExtractor={(item, index) => `numero-item-${index}`}
        renderItem={item => <GoalItem item={item.item} onDelete={onDelete} /> }
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 50
  },
});
