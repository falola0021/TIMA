import React from 'react'
import Style from './Stats.module.css'

function Stats ({title, val, icon, background}) {
  return (
    <div className={background}>
      <div className={Style.title}>
        {title}
      </div>
      <div className={Style.valcontainer}>
        <div className={Style.val}>
          {val}
        </div>
        <div className={Style.icon}>
          {icon}
          {/* <i className='fa fa-user'></i> */}
        </div>
      </div>
    </div>
  )
}

export default Stats
