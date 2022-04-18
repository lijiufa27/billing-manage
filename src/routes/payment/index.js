import React, { useEffect } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { NavBar, Icon, Button, Toast } from 'antd-mobile'

function Payment({ roomsBiling: { payCode }, location, history, dispatch, roomsBiling }) {
  const { state: { payData, totalMoney, rentCompany, monitorAccount } } = location

  const initData = () => {
    let sqnList = []
    payData.forEach(item => {
      sqnList.push(item.sqn)
    })

    dispatch({
      type: 'roomsBiling/fetchPayCode',
      payload: { sqnList, totalMoney },
    })
  }

  const copyText = () => {
    const input = document.getElementById('input');
    input.value = String(payCode);
    // 聚焦
    input.focus();
    // 选择需要复制的文本
    if (input.setSelectionRange) {
      input.setSelectionRange(0, input.value.length);
    } else {
      input.select();
    }
    try {
      const result = document.execCommand('copy');
      Toast.info(result ? '内容已复制' : '复制失败，请重试~');
    } catch (e) {
      Toast.error('复制失败，请重试~');
    }

  }

  useEffect(() => {
    initData()
  }, [])

  return (
    <div className={styles.page}>
      <NavBar
        icon={<Icon type="left" />}
        onLeftClick={() => { history.back() }}
        mode='light'>
        付款
      </NavBar>
      <div >
        <div className={styles.date}>
          <span className={styles.label}>
            账期：
          </span>
          <div className={styles.list}>
            {payData.length > 0 && payData.map(item => (
              <div key={item.date} className={styles.dateList}>{item.date}</div>
            ))}
          </div>
        </div>
        <div className={styles.label}>金额：{totalMoney}元</div>
        <div className={styles.label}>租赁企业：{rentCompany}</div>
        <div className={styles.label}>监管账户：{monitorAccount}</div>
        <div className={styles.label}>收款识别码账号：{payCode}</div>
        <div className={styles.input_wrap} >
          <input id="input" type="text" readOnly />
        </div>
        <Button style={{ margin: '15px' }} type='primary' onClick={copyText}>复制收款识别码账号</Button>
      </div>
      <div className={styles.tip}>
        <div className={styles.addBorder}>
          温馨提示：{rentCompany}已与我行签订租金监管协议，
          请复制并向收款识别码账号内转账，确保您的资金进入监管账户，
          保障您的合法权益。
        </div>
      </div>
    </div>
  );
}

export default connect(({ roomsBiling }) => ({ roomsBiling }))(Payment);
