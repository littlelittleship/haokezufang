import React from 'react'

import { withRouter  } from "react-router-dom";
//withRouter是一个方法,负责接收路由对象，用了这个就能接受props，不用传参数
import { TabBar } from 'antd-mobile';

class HKLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // selectedTab: 'redTab',
      // hidden: false,
      // fullScreen: false,
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#21b97a"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<i className="iconfont icon-ind"></i>}
            selectedIcon={<i className="iconfont icon-ind"></i>}
            selected={this.props.match.url === '/'}
            onPress={() => {
              console.log(123321)
                this.props.history.push('/')
            }}
          >
            {this.props.match.url === '/' && this.props.children}
          </TabBar.Item>
          <TabBar.Item   
            icon={<i className="iconfont icon-findHouse"></i>}
            selectedIcon={<i className="iconfont icon-findHouse"></i>}
            title="找房"
            key="List"
            badge={'new'}
            selected={this.props.match.url === '/List'}
            onPress={() => {
              this.props.history.push('/List')
            }}
          >
            {this.props.match.url === '/List' && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-infom"></i>}
            selectedIcon={<i className="iconfont icon-infom"></i>}
            title="资讯"
            key="News"
            dot
            selected={this.props.match.url === '/News'}
            onPress={() => {
              this.props.history.push('/News')
            }}
          >
            {this.props.match.url === '/News' && this.props.children}
          </TabBar.Item>
          <TabBar.Item
            icon={<i className="iconfont icon-my"></i>}
            selectedIcon={<i className="iconfont icon-my"></i>}
            title="我的"
            key="Profile"
            selected={this.props.match.url === '/Profile'}
            onPress={() => {
              this.props.history.push('/Profile')
            }}
          >
            {this.props.match.url === '/Profile' && this.props.children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}



export default withRouter(HKLayout);