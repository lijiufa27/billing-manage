import dva from 'dva';
import 'antd-mobile/dist/antd-mobile.css'
import './index.css';
const createHistory = require('history').createHashHistory;
// const createHistory = require('history').createBrowserHistory;


// 1. Initialize
const app = dva({
    history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/roomsBiling').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
