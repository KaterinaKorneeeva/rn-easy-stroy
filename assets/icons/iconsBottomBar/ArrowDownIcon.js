import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const ArrowDownIcon = (props) => {
  return (
    <Svg
    width={40}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    fill= {props.color}
  >
    <Path
      d="m28.834 20.345-3.75.222a1.242 1.242 0 0 1-1.29-1.012l-1.76-9.254a2.045 2.045 0 0 0-2.005-1.67c-.98 0-1.82.701-2.005 1.67l-1.76 9.254a1.242 1.242 0 0 1-1.29 1.013l-3.781-.223c-1.326-.079-2.082 1.5-1.196 2.498l8.551 9.623c.79.888 2.17.887 2.96-.003l8.524-9.621c.884-.998.128-2.575-1.198-2.497Z"
      fill= {props.color}
    />
  </Svg>
  )
}