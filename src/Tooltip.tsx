import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from "react-native";

interface TooltipProps {
  title?: string;
  content: string;
  titleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  width?: number;
  children: React.ReactNode;
}

const Tooltip = ({
  title,
  content,
  children,
  titleStyle,
  textStyle,
  width = 150,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setVisible(!visible)}>
        {children}
      </TouchableOpacity>
      {visible && (
        <View style={[styles.tooltip, { width }]}>
          {title && <Text style={titleStyle}>{title}</Text>}
          <Text style={textStyle}>{content}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { position: "relative" },
  tooltip: {
    position: "absolute",
    top: -40,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Tooltip;
