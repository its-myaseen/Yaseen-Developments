import React from 'react'
//When using the alert, it is important to pass the type and message props. The type prop can be either 'success' or 'error', and the message prop should contain the message you want to display in the alert.
// The alert will be displayed at the bottom left corner of the screen with a colored bar on the left side to indicate the type of alert. The color for success is green and for error is red.
import successSound from '../assets/SuccessSound.mp3'
const Alert = (props) => {
    const type = props.type || 'success'
    const message = props.message
    const color = type === 'success' ? '#32f800fd' : '#f80000fd'
    const audio = new Audio(successSound)
    audio.volume = 0.1
    audio.play()
  return (
    <div className='flex items-center fixed bottom-5 left-5 h-10 pl-4 pr-3 bg-gray-900 text-white rounded-lg overflow-hidden z-10'>
      <span className='block absolute left-0 top-0 h-full w-1' style={{backgroundColor: color}}></span>
      <p className='text-white text-sm'>{message}</p>
      <i className="fa-solid fa-xmark text-white text-xl ml-5 hover:text-gray-300 active:text-gray-400 cursor-pointer" onClick={()=>{props.close()}}></i>
    </div>
  )
}

export default Alert
