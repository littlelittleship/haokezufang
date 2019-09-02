import React, { Component } from 'react';
// import axios from "axios";
import { Carousel } from 'antd-mobile';
import { axios } from '../../utils/request.js'

// 使用开发环境中的变量,可以不用.js
import { REACT_APP_API_URL } from '../../utils/urls'

// 引入样式文件
// import style from './index.module.css'
import style from './index.module.scss'

// 引入图片
import nav1 from "../../assets/images/nav-1.png";
import nav2 from "../../assets/images/nav-2.png";
import nav3 from "../../assets/images/nav-3.png";
import nav4 from "../../assets/images/nav-4.png";

class index extends Component {
  state = {
    swiperList: [],
    imgHeight: 176,
    navList:[]
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
        {/* 导航部分开始 */}
        <div className={style.home_nav}>
          <div className={style.nav_item}>
            <img src={nav1} alt=""/>
            <p>整租</p>
          </div>
          <div className={style.nav_item}>
            <img src={nav2} alt=""/>
            <p>整租</p>
          </div>
          <div className={style.nav_item}>
            <img src={nav3} alt=""/>
            <p>整租</p>
          </div>
          <div className={style.nav_item}>
            <img src={nav4} alt=""/>
            <p>整租</p>
          </div>
        </div>
        {/* 导航部分结束 */}

      </div>
    );
  }
}
export default index;