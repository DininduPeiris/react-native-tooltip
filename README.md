# 🧭 React Native Tooltip

A lightweight, customizable, and dependency-free **Tooltip component for React Native**, built with TypeScript.  
Show contextual information when users interact with any element in your app — supports multiple positions, custom styling, and titles.

---

## 📦 Installation

Install via npm or yarn:

```bash
npm install @dinindupeiris99/react-native-tooltip
# or
yarn add @dinindupeiris99/react-native-tooltip
```

## 🚀 Usage

Here’s a simple example showing how to use the tooltip in your React Native project:

```tsx
import React from "react";
import { View } from "react-native";
import Tooltip from "@dinindupeiris99/react-native-tooltip";

const App = () => {
  return (
    <View>
      <Tooltip
        title="Info"
        content="This is a helpful tooltip!"
        position="top"
        width={200}
      >
        <Text>Press me</Text>
      </Tooltip>
    </View>
  );
};

export default App;
```

## ⚙️ Props

| Prop         | Type                                     | Default      | Description                                             |
| ------------ | ---------------------------------------- | ------------ | ------------------------------------------------------- |
| `title`      | `string`                                 | `undefined`  | Optional title displayed above the tooltip content.     |
| `content`    | `string`                                 | **Required** | Main tooltip text.                                      |
| `titleStyle` | `StyleProp<TextStyle>`                   | `undefined`  | Custom styles for the title text.                       |
| `textStyle`  | `StyleProp<TextStyle>`                   | `undefined`  | Custom styles for the content text.                     |
| `width`      | `number`                                 | `undefined`  | Fixed tooltip width.                                    |
| `maxWidth`   | `number`                                 | `undefined`  | Maximum tooltip width.                                  |
| `position`   | `"top" \| "bottom" \| "left" \| "right"` | `"top"`      | Where the tooltip should appear relative to the target. |
| `style`      | `StyleProp<ViewStyle>`                   | `undefined`  | Container style for the tooltip wrapper.                |
| `children`   | `React.ReactNode`                        | **Required** | Element that triggers the tooltip on press.             |

## 🧠 Features

✅ No external dependencies
✅ Lightweight and easy to integrate
✅ Customizable styles for title and content
✅ Four positions: top, bottom, left, right
✅ Simple press-to-toggle visibility
✅ Cross-platform (iOS, Android)

## 🎨 Example Preview

Here’s how the tooltip appears for different positions:

| Position   | Description                                |
| ---------- | ------------------------------------------ |
| **Top**    | Appears above the target element           |
| **Bottom** | Appears below the target element           |
| **Left**   | Appears to the left of the target element  |
| **Right**  | Appears to the right of the target element |

## 🧩 Styling

The component includes sensible defaults, but you can override styles easily:

```tsx
<Tooltip
  title="Notice"
  content="You can style this text!"
  titleStyle={{ color: "red", fontWeight: "600" }}
  textStyle={{ color: "gray" }}
  position="bottom"
>
  <Text style={{ color: "blue" }}>Custom Styled Tooltip</Text>
</Tooltip>
```

## 🧱 Built With

⚛️ React Native
💪 TypeScript

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request on GitHub.

## 📄 License

MIT © [Dinindu Peiris](https://github.com/DininduPeiris)

## 🌟 Support

If you like this package, please consider giving it a ⭐ on [npm](https://www.npmjs.com/~dinindupeiris)
 or [GitHub](https://github.com/DininduPeiris)
!
