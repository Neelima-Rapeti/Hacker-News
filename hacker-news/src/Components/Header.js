import React from 'react'

function Header() {
  return (
    <>
      <div className='row container-header'>
        <div className='col-2'>
          <p className='logo-text'>Hacker News</p>
        </div>
        <ul className='col-8 header-list'>
          <li>new</li> |
          <li>past</li> |
          <li>comments</li> |
          <li>ask</li> |
          <li>show</li> |
          <li>jobs</li> |
          <li>submit</li>
        </ul>
        <div className='col-2'>
          <p className='header-login'>login</p>
        </div>
      </div>
    </>
  )
}

export default Header
