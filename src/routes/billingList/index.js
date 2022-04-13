import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { NavBar } from 'antd-mobile'

function BillingList({ roomsBiling: { roomsList, name, }, location }) {
  console.log(location.state, 'BillingList');
  
  return (
    <div className={styles.page}>
      <NavBar mode='light'>账期列表</NavBar>
      
    </div>
  );
}

export default connect(({ roomsBiling }) => ({ roomsBiling }))(BillingList);
