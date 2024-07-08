import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <div className="contact__body">
      <div className='contact__main'>
        <div className='contact__main__title'>
            <h1>Say hello.</h1>
            <h2>Toronto, Haliburton and Palm Springs.</h2>
            <div className='contact__number'>
                <div className='contact1'>
                   <span>Dan Molenaar</span>
                   <span>dan@danmolenaar.com</span>
                   <span>+1 416 985 0597</span>
                </div>
                <div className='contact2'>
                    <span>Diane Molenaar</span>
                    <span>diane@mafcohouse.com</span>
                    <span>+1 416 985 8885</span>
                </div>
            </div>
        </div>
      </div>
      <div className='contact__img'>
        <img src='https://cityfurnish.com/blog/wp-content/uploads/2023/07/living-room-filled-with-furniture-red-wall-generative-ai-image-min.jpg' alt='something went wrong'></img>
      </div>
      </div>
    </>
  )
}

export default Contact
