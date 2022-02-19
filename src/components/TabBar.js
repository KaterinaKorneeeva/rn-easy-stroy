import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import { BuildingIcon } from '../../assets/icons/iconsBottomBar/BuildingIcon';
import { CompanionsIcon } from '../../assets/icons/iconsBottomBar/CompanionsIcon';
import { COLORS } from '../theme';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {

          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              style={styles.containerTab}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              key = {index}
            >
              {index === 0
                ? <BuildingIcon
                  color={COLORS.WHITE}
                  opacity={isFocused ? 1 : 0.5}
                />
                :
                <CompanionsIcon
                  color={COLORS.WHITE}
                  opacity={isFocused ? 1 : 0.5}
                />
              }
              <Text style={{ color: COLORS.WHITE, opacity: isFocused ? 1 : 0.5 }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 40,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    backgroundColor: COLORS.BLUE,
    width: 194,
    height: 80,
    borderRadius: 20,
    elevation: 2,
    padding: 10,
  },

  containerTab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBar;