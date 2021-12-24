import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const HistoryIcon = (props) => {
  return (
    <Svg
    width={40}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    fill={props.color}
  >
    <Path
      d="M16.976 11.632c0-.552.44-1 .984-1h4.125c.544 0 .984.448.984 1v18c0 .552-.44 1-.984 1H17.96a.992.992 0 0 1-.984-1v-18ZM8.423 17.632c0-.552.44-1 .984-1h4.125c.543 0 .984.448.984 1v12c0 .552-.44 1-.984 1H9.407a.992.992 0 0 1-.984-1v-12ZM26.513 20.632a.992.992 0 0 0-.984 1v8c0 .552.44 1 .984 1h4.126a.992.992 0 0 0 .984-1v-8c0-.552-.44-1-.984-1h-4.126Z"
      fill={props.color}
    />
  </Svg>
  )
}