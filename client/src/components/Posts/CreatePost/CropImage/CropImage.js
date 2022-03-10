import { useState } from "react"

import ReactCrop from "react-image-crop"

const CropImage = ({ image }) => {
  const [crop, setCrop] = useState({ aspect: 1 / 1 })

  return (
    <div>
      <ReactCrop
        src={image}
        crop={crop}
        onChange={(newCrop) => setCrop(newCrop)}
      />
    </div>
  )
}

export default CropImage
