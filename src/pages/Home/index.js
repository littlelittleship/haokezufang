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
    navList: [{ id: 0, title: '整租', img: nav1 }, { id: 1, title: '合租', img: nav2 }, { id: 2, title: '地图找房', img: nav3 }, { id: 3, title: '去出租', img: nav4 }],
    //租房小组
    homeGroups:[],
    news:[]
  }
  componentDidMount() {
    
    axios.get("/home/swiper")
      .then(res => {
        // this.setState({ swiperList: res.data.body });
        // console.log(REACT_APP_API_URL);
        this.setState({ swiperList: res.body });
      })

    // 租房小组
    axios.get('/home/groups')
    .then(res=>{
      console.log(res)
      this.setState({ homeGroups: res.body });
    })

    //资讯
    axios.get("/home/news")
      .then(res => {
        this.setState({ news: res.body });
        console.log(res);
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
          {
            this.state.navList.map( v=>
            <div key={v.id} className={style.nav_item}>
              <img src={v.img} alt=""/>
              <p>{v.title}</p>
            </div>
            )
          }
          
        </div>
        {/* 导航部分结束 */}

        {/* 租房小组开始 */}
        <div className={style.homeGroups}>
          <div className={style.homeGroups_title}>
            <span>租房小组</span>
            <span>更多</span>
          </div>
          <div className={style.homeGroups_cont}>

            {
              this.state.homeGroups.map(v=>
                <div key={v.id} className={style.cont_item}>
                  <div className={style.item_desc}>
                    <p>{v.title}</p>
                    <p>{v.desc}</p>
                  </div>
                  <div className={style.item_img}>
                    <img src={REACT_APP_API_URL + v.imgSrc} alt=""/>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        {/* 租房小组结束 */}

        {/* 最新资讯开始 */}
        <div className={style.home_news}>
          <div className={style.home_news_title}>最新资讯</div>
          <div className={style.home_news_content}>
            {this.state.news.map(v =>
              <div key={v.id} className={style.news_item}>
                <div className={style.news_item_img}>
                  <img src={REACT_APP_API_URL + v.imgSrc} alt="" />
                </div>
                <div className={style.news_item_info}>
                  <div className={style.news_item_name}>{v.title}</div>
                  <div className={style.news_item_des}>
                    <span className={style.news_item_from} >{v.from}</span>
                    <span className={style.news_item_date} >{v.date}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* 最新资讯结束 */}
      </div>
    );
  }
}
export default index;