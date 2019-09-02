import React, { Component, Fragment } from 'react';
import { NavBar, Icon } from 'antd-mobile';

import { axios } from "../../utils/request";

class index extends Component {


  componentDidMount() {
    // 1 获取所有的城市
    axios.get("/area/city?level=1")
      .then(res1 => {
        console.table(res1.body);
      })

    // 2 获取热门城市
    axios.get("/area/hot")
      .then(res1 => {
        console.log(res1);
        
      })
  }


  render() {
    return (
      <div className="city_list">
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => this.props.history.go(-1)}
        >城市选择</NavBar>

      </div>
    );
  }
}
export default index;