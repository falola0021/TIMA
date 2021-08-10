import React from 'react';
import Style from './Partner.module.css';
import AllAcceptedTable from './accepttable/Table';
import PendingTable from './pendingtable/Table';

export default function Orders() {
  return (
    <div>
      <div className={Style.title}>Orders</div>
      <div>
        <PendingTable />
      </div>
      <div>
        <AllAcceptedTable />
      </div>
    </div>
  );
}
