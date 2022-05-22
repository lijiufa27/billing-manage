//首先加载express
const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
//端口号
const port = 9000
//引入自定义的mysql文件
// const db = require('./db.js')

let filePath = path.resolve('./test.pdf');
let data = fs.readFileSync( path.resolve(filePath));
data = Buffer.from(data).toString('base64');



app.use(express.json())
// 获取订单信息
app.post('/jsotnb/zhyc/selectWlddByNoProcess', (req, res) => {
    console.log(req.body);
        res.send({
            success: true,
            msg: '请求成功',
            payload: {
                name: 111
            }
        })
})
// // 物流下单
app.post('/jsotnb/zhyc/selectBillByNoProcess', (req, res) => {
    console.log(req.body);
        res.send({
            success: true,
            msg: '请求成功',
            payload: {
                waybillNo: '9899797'
            }
        })
})
// 物流面单打印
app.post('/jsotnb/zhyc/selectpostFaceListProcess', (req, res) => {
    console.log(req.body);
        res.send({
            success: true,
            msg: '请求成功',
            payload: {
                basePdf: data
            }
        })
})
//物流订单轨迹详情
app.post('/jsotnb/zhyc/selectWlgjByNoProcess', (req, res) => {
    console.log(req.body);
        res.send({
            success: true,
            msg: '请求成功',
            payload: {
                name: 111
            }
        })
})

app.post('/iifstrl/apis/iifs-bris/route/jsotnb/queryPlanBillProcess', (req, res) => {
    console.log('queryPlanProcess');
    res.send({
        success: true,
        msg: '请求成功',
        payload: {
            rentPlanInfoList: [
                {
                    // 账期
                    rmk1: '2020-11-14',
                    rmk2: '2020-12-14',
                    // Y押金 Z租金
                    rmk3: 'Z',
                    // 支付金额
                    zfje: '1800',
                    // 押金
                    yj: 1800,
                    // U未扣款  S已支付 F扣款失败
                    status: 'U',
                    jgzh: '61715757675',
                    jgqymc: 'xxxxx企业',
                    sqn: 123
                },
                {
                    // 账期
                    rmk1: '2021-11-14',
                    rmk2: '2021-12-14',
                    // Y押金 Z租金
                    rmk3: 'Z',
                    // 支付金额
                    zfje: '1800',
                    // 押金
                    yj: 1800,
                    // U未扣款  S已支付 F扣款失败
                    status: 'S',
                    jgzh: '6757517675',
                    jgqymc: 'xxxxx企业',
                    sqn: 1234
                },
                {
                    // 账期
                    rmk1: '2021-11-14',
                    rmk2: '2021-12-14',
                    // Y押金 Z租金
                    rmk3: 'Z',
                    // 支付金额
                    zfje: '1800',
                    // 押金
                    yj: 1800,
                    // U未扣款  S已支付 F扣款失败
                    status: 'U',
                    jgzh: '6757576475',
                    jgqymc: 'xxxxx企业',
                    sqn: 12345
                },
                {
                    // 账期
                    rmk1: '2021-11-14',
                    rmk2: '2021-12-14',
                    // Y押金 Z租金
                    rmk3: 'Z',
                    // 支付金额
                    zfje: '1800',
                    // 押金
                    yj: 1800,
                    // U未扣款  S已支付 F扣款失败
                    status: 'U',
                    jgzh: '6757576675',
                    jgqymc: 'xxxxx企业',
                    sqn: 12311
                },
                {
                    // 账期
                    rmk1: '2021-11-14',
                    rmk2: '2021-12-14',
                    // Y押金 Z租金
                    rmk3: 'Y',
                    // 支付金额
                    zfje: '1800',
                    // 押金
                    yj: 1800,
                    // U未扣款  S已支付 F扣款失败
                    status: 'U',
                    jgzh: '6757578675',
                    jgqymc: 'xxxxx企业',
                    sqn: 123121
                },
                {
                    // 账期
                    rmk1: '2021-11-14',
                    rmk2: '2021-12-14',
                    // Y押金 Z租金
                    rmk3: 'Y',
                    // 支付金额
                    zfje: '1800',
                    // 押金
                    yj: 1800,
                    // U未扣款  S已支付 F扣款失败
                    status: 'U',
                    jgzh: '67575744675',
                    jgqymc: 'xxxxx企业',
                    sqn: 12388
                },
                {
                    // 账期
                    rmk1: '2021-11-14',
                    rmk2: '2021-12-14',
                    // Y押金 Z租金
                    rmk3: 'Y',
                    // 支付金额
                    zfje: '1800',
                    // 押金
                    yj: 1800,
                    // U未扣款  S已支付 F扣款失败
                    status: 'U',
                    jgzh: '67575788675',
                    jgqymc: 'xxxxx企业',
                    sqn: 12399
                },
                {
                    // 账期
                    rmk1: '2021-11-14',
                    rmk2: '2021-12-14',
                    // Y押金 Z租金
                    rmk3: 'Y',
                    // 支付金额
                    zfje: '1800',
                    // 押金
                    yj: 1800,
                    // U未扣款  S已支付 F扣款失败
                    status: 'U',
                    jgzh: '67575722675',
                    jgqymc: 'xxxxx企业',
                    sqn: 123999
                },
                {
                    // 账期
                    rmk1: '2021-11-14',
                    rmk2: '2021-12-14',
                    // Y押金 Z租金
                    rmk3: 'Y',
                    // 支付金额
                    zfje: '1800',
                    // 押金
                    yj: 1800,
                    // U未扣款  S已支付 F扣款失败
                    status: 'U',
                    jgzh: '675756667675',
                    jgqymc: 'xxxxx企业',
                    sqn: 123018
                }
            ]
        }
    })
})

app.post('/iifstrl/apis/iifs-bris/route/jsotnb/jsotnbDirectPayProcess', (req, res) => {
    console.log(req.body);
    res.send({
        success: true,
        msg: '请求成功',
        payload: {
            idIdNo: '234832483268462384'
        }
    })
})

/**
 *  roomsList: action.payload.htList,
        idCard: action.payload.zjhm,
        person: action.payload.xm
      };
 */

app.listen(port, () => console.log('server is start,port is', port))
