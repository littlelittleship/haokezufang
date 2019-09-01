import React, { Component } from 'react';
import axios from "axios";
import { Carousel, WingBlank } from 'antd-mobile';

class index extends Component {
  state = {
    swiperList: [],
    imgHeight: 176
  }
  componentDidMount() {
    axios.get("http://hkzf.zbztb.cn/home/swiper")
      .then(res => {

        this.setState({ swiperList: res.data.body });
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