import React from 'react'

const mappage = () => {
  return (
    <div className="flex w-full  justify-center" style={{  height: '100vh' }}>
      <div className="w-full 2xl:w-2/3">
        <iframe title="QGIS2Web Map" src="/map.html" frameBorder="0" style={{ width: '100%', height: '100%' }}></iframe>
      </div>
      
    </div>
  )
}

export default mappage