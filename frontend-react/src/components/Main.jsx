import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className='container'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>Stock prediction apps utilize algorithms to analyze historical stock data, market trends, and technical indicators to identify patterns and predict future price movements. Some apps incorporate sentiment analysis by examining news articles, social media posts, and other textual data to gauge market sentiment and its potential impact on stock prices.</p>
                <Button text='Login' class='btn-outline-info' />
            </div>
      </div>
    </>
  )
}

export default Main