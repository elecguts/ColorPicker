import React from 'react'

export function App() {
  return (
    <div>
      <input type="range" id="hue" name="hue" min="0" max="360" />
      <label htmlFor="hue">Hue</label>
      <input type="range" id="saturation" name="saturation" min="0" max="100" />
      <label htmlFor="saturation">Saturation</label>
      <input type="range" id="lightness" name="lightness" min="0" max="100" />
      <label htmlFor="lightness">Lightness</label>
    </div>
  )
}
