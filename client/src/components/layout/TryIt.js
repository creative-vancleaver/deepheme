import React from 'react'

const TryIt = () => {
    
  return (

    <div className='pt-5 pb-5' style={{
        backgroundColor: '#4f306d',
    }}>
        <h1 className='text-center mb-5' style={{
            color: '#fff',
            fontSize: '70px !important',
            // fontWeight: 'bold',
        }}>Try it yourself</h1>
        <h5 className='text-center' style={{
            color: '#fff',
            fontSize: '30px',
            // paddingBlock: '0',
        }}>
 
            Visit our lab website
        </h5>
        <h5 className='text-center' style={{
            color: '#fff',
            fontSize: '30px',
            // paddingBlock: '0',
        }}>
            for a live demo
        </h5>

        <div className="try-it-btn-box pt-5">

        <button className='align-self-center' style={{
            
            color: '#4f306d',
            backgroundColor: '#fff !important',
            border: 'none',
            borderRadius: '10px',
            width: '400px',
            height: '75px',
            cursor: 'pointer',
            fontSize: '1.3rem',
        }}>Free Demo</button>

        </div>
    </div>

  )
}

export default TryIt