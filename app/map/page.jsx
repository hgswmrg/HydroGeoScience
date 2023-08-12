import React from 'react'

const mappage = () => {
  return (
    <div className="flex w-full  justify-center" style={{  height: '100vh' }}>
      <div className="w-full 2xl:w-2/3">
      <iframe
        width="100%"
        height="100%"
        style= {{ border : "0" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://hgswmrg.users.earthengine.app/view/map">
        </iframe>

      </div>
      
    </div>
  )
}

export default mappage