import { Dimensions, StyleSheet, View,Image } from 'react-native';
import { useEffect } from 'react';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withRepeat,
} from 'react-native-reanimated';
import { Pieces, BLOCKSIZE } from './Pieces';

const { width: SCREEN_WIDTH, height:SCREEN_HEIGHT } = Dimensions.get('window');
export const xoffset = 10 - SCREEN_WIDTH/2 
export const yoffset = 50 - SCREEN_HEIGHT/2

const handleRotation = (progress) => {
  'worklet';
  return `${progress.value * 2 * Math.PI}rad`;
};

const SIZE = 80;
export default function App() {
  const index =2
  const progress = useSharedValue(1);
  const scale = useSharedValue(1.5);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ x: 0, y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(() => {
        translateX.value = Pieces[index].x + xoffset + Pieces[index].width / 2;
        translateY.value = Pieces[index].y + yoffset + Pieces[index].height / 2;
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX:withSpring( translateX.value ) }, { translateY: withSpring(translateY.value) }],
    };
  });

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  }, []);
  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 4, true);
    scale.value = withRepeat(withSpring(1), 5, true);
  }, []);
  
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <View style={styles.center_container}>
        <GestureDetector gesture={gesture}>
          <Animated.View style={[reanimatedStyle, rStyle]}>
          <Image source={Pieces[index].img} style={[{width:Pieces[index].width, 
                height:Pieces[index].height}]}/>
          </Animated.View>
        </GestureDetector>
      </View>

    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  circle: {
    position: 'absolute',
    height: SIZE,
    aspectRatio: 1,
    backgroundColor: 'green',
    borderRadius: SIZE / 2,
    opacity: 0.8,
  },
  center_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});