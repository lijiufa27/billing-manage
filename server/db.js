    //导出
    module.exports = (sql,callback) => {
        const mysql = require('mysql')
        const conn = mysql.createConnection({
            host:'localhost',
            // user、password需手动添加,与数据库保持一致
            user:'lijiufa',
            password:'root',
            database:'test'
        })
        // 建立连接
        conn.connect()
        conn.query(sql,callback)
        console.log(sql);
        // 断开连接
        // conn.end()
    }

