import React, { useState } from 'react'
import { getRandomIntInclusive } from './MathRandom'

export function App() {
  const randomStartingHue = getRandomIntInclusive(0, 360)
  const randomStartingSaturation = getRandomIntInclusive(0, 100)
  const randomStartingLightness = getRandomIntInclusive(0, 100)

  const [hueValue, setHueValue] = useState(`${randomStartingHue}`)
  const [saturationValue, setSaturationValue] = useState(
    `${randomStartingSaturation}`
  )
  const [lightnessValue, setLightnessValue] = useState(
    `${randomStartingLightness}`
  )
  const newBackgroundColor = `hsl(${hueValue},${saturationValue}%,${lightnessValue}%)`
  const newStyle = { backgroundColor: newBackgroundColor }

  return (
    <div>
      <input
        type="range"
        id="hue"
        name="hue"
        min="0"
        max="360"
        defaultValue={randomStartingHue}
        onChange={(event) => setHueValue(event.target.value)}
      />
      <label htmlFor="hue">Hue</label>
      <input
        type="range"
        id="saturation"
        name="saturation"
        min="0"
        max="100"
        defaultValue={randomStartingSaturation}
        onChange={(event) => setSaturationValue(event.target.value)}
      />
      <label htmlFor="saturation">Saturation</label>
      <input
        type="range"
        id="lightness"
        name="lightness"
        min="0"
        max="100"
        defaultValue={randomStartingLightness}
        onChange={(event) => setLightnessValue(event.target.value)}
      />
      <label htmlFor="lightness">Lightness</label>
      <div style={newStyle}>TEST</div>
      <p>Hue value is {hueValue}</p>
      <p>Saturation value is {saturationValue}</p>
      <p>Lightness value is {lightnessValue}</p>
      <p>Background color is {newBackgroundColor}</p>
    </div>
  )
}
