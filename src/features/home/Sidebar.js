import React from 'react'

const Sidebar = ({ activeUser, logout }) => {
  return (
    <>
      <button className='logout' onClick={logout}>Logout</button>
      <div className="current-user">
        <div className='user-img'>
          <img src={activeUser.img} alt="User" />
        </div>
        <div className='user-info'>
          <h4>{activeUser.name}</h4>
          <p>{activeUser.twitter}</p>
        </div>
      </div>
      <div className="sideview-all">
        <img src="assets/icons/Vector.png" alt="" />
        <p className='font'>Home</p>
      </div>
      <div className="sideview-all">
        <img src="assets/icons/Shape.png" alt="" />
        <p className='font'>Izvestaji</p>
      </div>
      <div className="sideview-all">
        <img src="assets/icons/Shape1.png" alt="" />
        <p className='font'>Maticni Podaci</p>
      </div>
      <div className="sideview-all">
        <img src="assets/icons/Combined Shape.png" alt="" />
        <p className='font'>Obrasci</p>
      </div>
      <div className='often-used'>
      <p>NAJCESCE KORISCENE</p>
      </div>
      <div className="sideview-all sideview-bottom sideview-special">
        <img src="assets/icons/Rounded_Initial_PP_32px.png" alt="" />
        <p className='font'>Lorem Ipsum</p>
        <img src="assets/icons/Group 4.png" className='number' alt="" />
      </div>
      <div className="sideview-all sideview-bottom">
        <img src="assets/icons/Rounded_Initial_PP_32px.png" alt="" />
        <p className='font'>Lorem Ipsum</p>
      </div>
      <div className="sideview-all sideview-bottom">
        <img src="assets/icons/Rounded_Initial_PPP_32px.png" alt="" />
        <p className='font'>Lorem Ipsum</p>
      </div>
      <div className="sideview-all sideview-bottom">
        <img src="assets/icons/Rounded_Initial_PPPP_32px.png" alt="" />
        <p className='font'>Lorem Ipsum</p>
      </div>
      <div className="sideview-all sideview-bottom">
        <img src="assets/icons/Rounded_Initial_PP_32px.png" alt="" />
        <p className='font'>Lorem Ipsum</p>
      </div>
      <div className="sideview-all sideview-bottom">
        <img src="assets/icons/Rounded_Initial_PPP_32px.png" alt="" />
        <p className='font'>Lorem Ipsum</p>
      </div>
      <div className="sideview-all sideview-bottom">
        <img src="assets/icons/Rounded_Initial_PPPP_32px.png" alt="" />
        <p className='font'>Lorem Ipsum</p>
      </div>
    </>
  )
}

export default Sidebar