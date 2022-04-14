import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import styles from './index.less';
import { NavBar, Icon, List, Checkbox, Button, Toast } from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;
const CheckboxItem = Checkbox.CheckboxItem;

function BillingList({ roomsBiling: { unpayBillingList, finishPayBillingList }, location, history, dispatch }) {
  const { state: { personType, idCard, roomPosition, name, contractNumber } } = location
  const [totalMoney, setTotalMoney] = useState(0)
  const [payData, setPaydata] = useState([])

  const initData = () => {
    dispatch({
      type: 'roomsBiling/fetchBillingList',
      payload: { htbh: contractNumber, lx: personType },
    })
  }

  useEffect(() => {
    initData()
  }, [])

  const toPaymentPage = () => {
    if (totalMoney <= 0) {
      Toast.info('请勾选未支付的账单', 1)
      return null
    }
    history.push('/payment', {payData, totalMoney, rentCompany: payData[0].rentCompany, monitorAccount: payData[0].monitorAccount})
  }


  const getTotalMoney = (e, item) => {
    if(e.target.checked) {
      setTotalMoney(totalMoney + Number(item.zfje))
      payData.push({sqn:item.sqn, date: `${item.rmk1} 至 ${item.rmk2}`, rentCompany: item.jgqymc, monitorAccount: item.jgzh})
    } else {
      const index = payData.findIndex(sub => sub.sqn === item.sqn)
      payData.splice(index, 1)
      setPaydata(payData)
      setTotalMoney(totalMoney - Number(item.zfje))
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <NavBar
          icon={<Icon type="left" />}
          onLeftClick={() => { history.back() }}
          mode='light'>
          账期列表
        </NavBar>
      </div>
      <div className={styles.roomList}>
        <div className={styles.label}>姓名：{name}</div>
        <div className={styles.label}>身份证号：{idCard}</div>
        <div className={styles.label}>房屋坐落：{roomPosition}</div>
        <div className={styles.label}>合同备案号：{contractNumber}</div>
        <div className={styles.list}>
          <List className="my-list">
            {unpayBillingList.length > 0 && unpayBillingList.map(item => {
              const status = item.status === 'U' ? '未支付' : '扣款失败'
              return item.rmk3 === 'Y' ?
                <CheckboxItem key={item.sqn} onChange={(e) => { getTotalMoney(e, item) }}>
                  <Item multipleLine  >
                    押金：{item.yj}
                    <Brief>支付状态：{status}</Brief>
                  </Item>
                </CheckboxItem> :
                <CheckboxItem key={item.sqn} onChange={(e) => { getTotalMoney(e, item) }}>
                  <Item multipleLine  >
                    账期：{`${item.rmk1} 至 ${item.rmk2}`}
                    <Brief>租金金额：{item.zfje}</Brief>
                    <Brief>支付状态：{status}</Brief>
                  </Item>
                </CheckboxItem>
            })}
            {finishPayBillingList.length > 0 && finishPayBillingList.map(item => {
              return item.rmk3 === 'Y' ?
                <CheckboxItem key={item.sqn} disabled>
                  <Item multipleLine  >
                    押金：{item.yj}
                    <Brief>支付状态：已支付</Brief>
                  </Item>
                </CheckboxItem> :
                <CheckboxItem key={item.sqn} disabled>
                  <Item multipleLine  >
                    账期：{`${item.rmk1}至${item.rmk2}`}
                    <Brief style={{ color: '#bbb' }}>租金金额：{item.zfje}</Brief>
                    <Brief style={{ color: '#bbb' }}>支付状态：已支付</Brief>
                  </Item>
                </CheckboxItem>
            })}
          </List>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.total}>合计：{totalMoney}元</div>
        <Button className={styles.payBtn} type='primary' onClick={toPaymentPage}>确认支付</Button>
      </div>
    </div>
  );
}

export default connect(({ roomsBiling }) => ({ roomsBiling }))(BillingList);
