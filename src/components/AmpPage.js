import React from 'react'

export const config = { amp: true }

export const Amp = () => {
  return (
    <>
      <div>AMP TEST</div>
      <style jsx>{`
        div {
          color: red;
        }
      `}</style>
    </>
  )
}

export default Amp
