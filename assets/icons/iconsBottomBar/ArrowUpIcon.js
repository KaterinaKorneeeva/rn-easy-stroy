import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const ArrowUpIcon = (props) => {
  return (
    <Svg
    width={40}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    fill= {props.color}
  >
    <Path
      d="m11.207 21.419 3.78-.223a1.25 1.25 0 0 1 1.3 1.013l1.774 9.253a2.057 2.057 0 0 0 4.04 0l1.773-9.253a1.25 1.25 0 0 1 1.301-1.013l3.81.223c1.337.078 2.098-1.5 1.205-2.498l-8.617-9.623a2 2 0 0 0-2.982.002l-8.59 9.622c-.892.998-.13 2.575 1.206 2.497Z"
      fill= {props.color}
    />
  </Svg>
  )
}