import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const BuildingIcon = (props) => {
  return (
    <Svg
      width={40}
      height={41}
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
    <Path
      d="M9.491 15.68a1 1 0 0 0-.491.86v1.68c0 .415.336.75.75.75H12v7h3v-7h3.5v7h3v-7H25v7h3v-7h2.25a.75.75 0 0 0 .75-.75v-1.68a1 1 0 0 0-.491-.86l-10-5.91a1 1 0 0 0-1.018 0l-10 5.91ZM10 28.72a.75.75 0 0 1 .75-.75h18.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75h-18.5a.75.75 0 0 1-.75-.75v-1.5Z"
      fill={props.color}
    />
  </Svg>
  )
}
