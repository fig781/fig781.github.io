import React from 'react'
import { ModelViewer } from 'react-model-viewer';

const Robotics = () => {
  return (
    <ModelViewer
      alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
      src="../../public/models/highlyconfigurablewheel.glb"
      environmentImage="shared-assets/environments/moon_1k.hdr"
      poster="shared-assets/models/NeilArmstrong.webp"
      shadowIntensity={1}
      cameraControls
      touchAction="pan-y"
    />

  )
}

export default Robotics