import React, { useState } from 'react';
import Style from './Partner.module.css';
import Stats from './stats/Stats';
import CommissionTable from './commissionstable/Table';

export default function Transac() {
  const [carddetails] = useState({
    title1: 'All Accepted Orders',
    val1: '20',
    icon1: <i className='fa fa-user'></i>,
    color1: Style.card1,

    title2: 'All Completed Orders',
    val2: '20',
    icon2: <i className='fa fa-user'></i>,
    color2: Style.card2,

    title3: 'All Pending Orders',
    val3: '20',
    icon3: <i className='fa fa-user'></i>,
    color3: Style.card3,

    title4: 'All Orders',
    val4: '20',
    icon4: <i className='fa fa-user'></i>,
    color4: Style.card4,
  });

  return (
    <div>
      <div className={Style.title}>Transactions</div>
      <div className={Style.statcards}>
        <Stats
          title={carddetails.title1}
          val={carddetails.val1}
          icon={carddetails.icon1}
          background={carddetails.color1}
        />
        <Stats
          title={carddetails.title2}
          val={carddetails.val2}
          icon={carddetails.icon2}
          background={carddetails.color2}
        />
        <Stats
          title={carddetails.title3}
          val={carddetails.val3}
          icon={carddetails.icon3}
          background={carddetails.color3}
        />
        <Stats
          title={carddetails.title4}
          val={carddetails.val4}
          icon={carddetails.icon4}
          background={carddetails.color4}
        />
      </div>
      <div>
        <CommissionTable />
      </div>
    </div>
  );
}
