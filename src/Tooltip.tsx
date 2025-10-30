import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        {children}
      </TouchableOpacity>
      {visible && (
        <View style={styles.tooltip}>
          <Text style={styles.text}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { position: 'relative' },
  tooltip: {
    position: 'absolute',
    top: -40,
    backgroundColor: '#333',
    padding: 8,
    borderRadius: 4,
  },
  text: { color: '#fff' },
});

export default Tooltip;
