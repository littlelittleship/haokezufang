import React, { Component } from 'react';
// import axios from "axios";
import { Carousel } from 'antd-mobile';
import { axios } from '../../utils/request.js'

// 使用开发环境中的变量,可以不用.js
import { REACT_APP_API_URL } from '../../utils/urls'

class index extends Component {
  state = {
    swiperList: [],
    imgHeight: 176
  }
  componentDidMount() {
    
    axios.get("/home/swiper")
      .then(res => {
        // this.setState({ swiperList: res.data.body });
        console.log(REACT_APP_API_URL);
        this.setState({ swiperList: res.body });
      })
  }

  render() {
    const {swiperList}=this.state;
    return (
      <div className="hk_home">
        {/* 轮播图 开始 */}
        <div className="home_swiper">
          {swiperList.length&& <Carousel
            autoplay
            infinite
          >
            {this.state.swiperList.map(val => (
              <a
                key={val.id}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={'http://hkzf.zbztb.cn'+val.imgSrc}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // 解决图片高度的bug使用 
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>}
         
        </div>
        {/* 轮播图 结束 */}
      </div>
    );
  }
}
export default index;