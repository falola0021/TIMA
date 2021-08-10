import React, { useState, useEffect } from 'react';
import Style from './Partner.module.css';

import { Link } from 'react-router-dom';

function Side() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [activeSubIndex, setActiveSubIndex] = React.useState(null);

  const handleOnClick = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
    setActiveSubIndex(null);
  };

  const handleSubIndexClick = (subindex) => {
    setActiveSubIndex(subindex);
    setActiveIndex(null);
  };

  const items = [
    {
      name: 'Dashboard',
      icon: 'fa fa-th-large mr-2',
      url: '/partner',
      subitem: [
        {
          name: 'Orders',
          icon: 'fa fa-motorcycle mr-2',
          url: '/partner/orders',
        },
        {
          name: 'Transactions',
          icon: 'fa fa-wallet mr-2',
          url: '/partner/transactions',
        },
        {
          name: 'Profile',
          icon: 'fa fa-user mr-2',
          url: '/partner/profile',
        },
      ],
    },
  ];

  return (
    <>
      <div className={Style.sidebar}>
        <div className={Style.brandlogodiv}>
          <img
            className={Style.brandlogo}
            src='https://res.cloudinary.com/timang/image/upload/v1597037522/WhatsApp_Image_2020-08-09_at_7.58.33_PM_h85jes.jpg'
          />
        </div>
        <div className={Style.partnername}>Falola Adedayo</div>

        <div className={Style.itembox}>
          {items.map((el, index) => (
            <Link key={index} to={el.url}>
              <div
                onClick={() => handleOnClick(index)}
                className={
                  activeIndex == index && activeIndex !== null
                    ? Style.itemactive
                    : Style.iteminactive
                }>
                <i className={el.icon}></i> <span>{el.name}</span>
              </div>
              {el.subitem &&
                el.subitem.map((item, subindex) => (
                  <Link key={subindex} to={item.url}>
                    <div
                      onClick={() => handleSubIndexClick(subindex)}
                      className={
                        activeSubIndex == subindex
                          ? Style.itemactive
                          : Style.iteminactive
                      }>
                      <i className={item.icon}></i> <span>{item.name}</span>
                    </div>
                  </Link>
                ))}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Side;
