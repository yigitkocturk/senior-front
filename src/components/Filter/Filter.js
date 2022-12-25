import React from 'react'
import "./Filter.css"

function Filter() {
  return (
    <div className='container'>
      <h1>#Filter</h1>
      <div className='container'>
        <a href="/alcohol" >
          <div className='a'>#Alcohol</div>
        </a><br />
        <a href="/smokingaddiction" >
          <div className='a'>#Smoking Addiction</div>
        </a><br />
        <a href="/drugs" >
          <div className='a'>#Drugs</div>
        </a><br />
        <a href="/gambling" >
          <div className='a'>#Gambling</div>
        </a><br />
        <a href="/technology" >
          <div className='a'>#Technology</div>
        </a><br />
      </div>
    </div>
  )
}

export default Filter