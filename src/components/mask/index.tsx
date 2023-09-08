import * as React from "react"
import { Dimensions, View } from "react-native"
import Svg, { SvgProps, Defs, Mask, Rect, Polyline } from "react-native-svg"

const { width, height } = Dimensions.get('window')
const poly1 = `
    ${width*0.1},${height*0.48}
    ${width*0.1},${height*0.45}
    ${width*0.2},${height*0.45}
`
const poly2 = `
    ${width*0.9},${height*0.48}
    ${width*0.9},${height*0.45}
    ${width*0.8},${height*0.45}
`
const poly3 = `
    ${width*0.1},${height*0.52}
    ${width*0.1},${height*0.55}
    ${width*0.2},${height*0.55}
`
const poly4 = `
    ${width*0.9},${height*0.52}
    ${width*0.9},${height*0.55}
    ${width*0.8},${height*0.55}
`

const MaskComponent = (props: SvgProps) => (
<View style={{position:'absolute',zIndex:99}}>
      <Svg height={`${height}`} width={`${width}`}>
        <Defs>
          <Mask id="mask" x="0" y="0" height={`${height}`} width={`${width}`}>
            <Rect x="0" y="0" height={`${height}`} width={`${width}`} fill="white" />
            <Rect x={`${width*0.1}`} y={`${height*0.45}`} height={`${height*0.1}`} width={`${width*0.8}`} fill="black" />
          </Mask>
        </Defs>
        <Rect x="0" y="0" height={`${height}`} width={`${width}`} fill="black" opacity={.9} mask="url(#mask)" />
        <Polyline points={poly1} fill="none" stroke="white" strokeWidth="3" />
        <Polyline points={poly2} fill="none" stroke="white" strokeWidth="3" />
        <Polyline points={poly3} fill="none" stroke="white" strokeWidth="3" />
        <Polyline points={poly4} fill="none" stroke="white" strokeWidth="3" />
      </Svg>
    </View>

)
export default MaskComponent
