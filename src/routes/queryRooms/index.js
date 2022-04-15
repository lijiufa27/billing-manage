import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router'
import { Button, List, InputItem, NavBar, Picker, Toast } from 'antd-mobile'
import styles from './index.less';



const Item = List.Item;
const Brief = Item.Brief;

const pickerData = [
  [
    {
      label: '租客',
      value: '承租方',
    },
    {
      label: '房东',
      value: '出租方',
    },
  ],
];

function QueryRoom({ dispatch, roomsBiling: { roomsList, name, }, history }) {
  const [idCard, setIdCard] = useState('')
  const [person, setPerson] = useState('')

  const queryRooms = () => {
    if(idCard.length !== 18) {
      Toast.info('请输入正确的身份证号', 1)
      return null
    }else if (!person) {
      Toast.info('请选择主体', 1)
      return null
    }
    dispatch({
      type: 'roomsBiling/fetchQuery',
      payload: { zjhm: idCard, rlx: person[0] },
    })
  }

  const getIdCard = (val) => {
    setIdCard(val)
  }

  const toBillingList = (item) => {
    const personType = person[0] === '承租方' ? 'I' : 'O'
    history.push('/billingList', {contractNumber: item.htbh,name, personType, idCard, roomPosition: item.zl})
  }


  return (
    <div className={styles.page}>
      <NavBar mode='light'>房源查询</NavBar>
      <List>
        <InputItem type='text' clear maxLength={18} placeholder='请输入身份证号' onChange={getIdCard} value={idCard}>身份证号</InputItem>
        <Picker
          data={pickerData}
          cascade={false}
          extra="请选择"
          value={person}
          onChange={v => { setPerson(v) }}
          onOk={v => { setPerson(v) }}
        >
          <List.Item arrow="horizontal">主体</List.Item>
        </Picker>
      </List>
      <div className={styles.btn}>
        <Button type="primary" onClick={queryRooms}>查询</Button>
      </div>

      {roomsList.length > 0 && <div className={styles.roomList}>
        <div className={styles.label}>姓名：{name}</div>
        <div className={styles.list}>
          <List className="my-list">
            {roomsList.map(item => 
              <Item key={item.htbh} multipleLine arrow="horizontal" onClick={() => toBillingList(item)}>
                房屋坐落：{item.zl}
                <Brief>合同备案号：{item.htbh}</Brief>
              </Item>
            )}
          </List>
        </div>
      </div>}
    </div>
  );
}

export default connect(({ roomsBiling }) => ({ roomsBiling }))(QueryRoom);
