import React, { useState } from 'react'

export function App() {
  const [hueValue, setHueValue] = useState('180')
  const [saturationValue, setSaturationValue] = useState('50')
  const [lightnessValue, setLightnessValue] = useState('50')
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
        defaultValue="180"
        onChange={(event) => setHueValue(event.target.value)}
      />
      <label htmlFor="hue">Hue</label>
      <input
        type="range"
        id="saturation"
        name="saturation"
        min="0"
        max="100"
        defaultValue="50"
        onChange={(event) => setSaturationValue(event.target.value)}
      />
      <label htmlFor="saturation">Saturation</label>
      <input
        type="range"
        id="lightness"
        name="lightness"
        min="0"
        max="100"
        defaultValue="50"
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
