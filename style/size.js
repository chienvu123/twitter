import { Dimensions } from "react-native";
const device = {
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height
};
const width = {
  smaller: 24,
  small: 30,
  normal: 36,
  big: 42,
  bigger: 48
};
const height = {
  smaller: 24,
  small: 30,
  normal: 36,
  big: 42,
  bigger: 48
};
const fontSize = {
  h0: 36,
  h1: 32,
  h2: 28,
  h3: 22,
  h35: 20,
  h4: 18,
  h5: 16,
  h6: 12,
  h7: 10
};
const image = {
  width: 100,
  height: 200,
  item: {
    size: 56,
    borderRadius: 28
  }
};

export { width, height, fontSize, device, image };
