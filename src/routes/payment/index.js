import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { NavBar } from 'antd-mobile'

function Payment({roomsBiling: { roomsList, name}, history }) {
  console.log(history, 'Payment');
  


  return (
    <div className={styles.page}>
      <NavBar mode='light'>付款</NavBar>
      
    </div>
  );
}

export default connect(({ roomsBiling }) => ({ roomsBiling }))(Payment);
