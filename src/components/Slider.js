import React, { useState } from 'react'

const Slider = () => {
  const [hue, setHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lighting, setLighting] = useState(Math.ceil(Math.random() * 100))

  const updateRandomColor = () => {
    setHue(Math.ceil(Math.random() * 360))
    setSaturation(Math.ceil(Math.random() * 100))
    setLighting(Math.ceil(Math.random() * 100))
  }

  return (
    <>
      <div>
        <section className="hue-slider">
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={e => {
              setHue(e.target.value)
              console.log(hue)
            }}
          />
        </section>

        <section className="saturation-slider">
          <input
            type="range"
            min="0"
            max="100"
            value={saturation}
            onChange={e => {
              setSaturation(e.target.value)
              console.log(saturation)
            }}
          />
        </section>

        <section className="lighting-slider">
          <input
            type="range"
            min="0"
            max="100"
            value={lighting}
            onChange={e => {
              setLighting(e.target.value)
              console.log(lighting)
            }}
          />
        </section>

        <button className="random-color" onClick={() => updateRandomColor()}>
          Random Color
        </button>
      </div>

      <div className="display-color-box">
        HSL: {hue}, {saturation}%, {lighting}
        %
        <p
          className="color-box"
          style={{
            backgroundColor: `hsl(${hue}, ${saturation}%, ${lighting}%)`,
            height: 200,
            width: 200
          }}
        />
      </div>
    </>
  )
}

export default Slider
