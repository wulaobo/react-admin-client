import React, { Component } from 'react'

import {BrowserRouter,Switch,Route} from 'react-router-dom'
// import { Button, message } from 'antd'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component {

    render() {
        // return <div>
        //     <Button type="primary" onClick={ this.myHandler }>测试antd</Button>
        // </div>
        return (
            <BrowserRouter>
                {/* Switch 组件表示如果匹配上了其中一个路由，其他的路由就不会匹配了 */}
                <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }

    // myHandler = ()=>{
    //     message.success('成功啦。。。')
    // }

}