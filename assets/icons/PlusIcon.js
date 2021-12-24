import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const PlusIcon = (props) => {
  return (
    <Svg
      width={26}
      height={27}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 26.632c7.18 0 13-5.82 13-13s-5.82-13-13-13-13 5.82-13 13 5.82 13 13 13Zm-.27-18.417a.812.812 0 0 0-.813.813v3.52H8.396a.813.813 0 0 0-.813.813v.542c0 .448.364.812.813.812h3.52v3.521c0 .449.364.813.813.813h.542a.812.812 0 0 0 .812-.813v-3.52h3.521a.813.813 0 0 0 .813-.813v-.542a.813.813 0 0 0-.813-.813h-3.52v-3.52a.812.812 0 0 0-.813-.813h-.542Z"
        fill="#5965ED"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 .632)" d="M0 0h26v26H0z" />
      </ClipPath>
    </Defs>
    </Svg>
  )
}
