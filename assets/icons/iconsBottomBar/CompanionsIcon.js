import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CompanionsIcon = (props) => {
  return (
    <Svg
      width={40}
      height={41}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color}
    >
      <Path
        d="M18.75 15.882a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM8 29.132h14v-3.216c0-1.106-.763-2.163-2-2.951-1.27-.809-3.041-1.333-5-1.333-3.866 0-7 2.042-7 4.284v3.216ZM32 29.132h-8.25v-3.216c0-1.559-.842-2.848-1.945-3.79A10.32 10.32 0 0 1 25 21.633c3.866 0 7 2.042 7 4.284v3.216ZM25 19.632a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
        fill={props.color}
      />
    </Svg>
  )
}
