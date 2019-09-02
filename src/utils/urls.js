// 设置好开发环境和生产环境中的路径后，用 process.env来获取路径，不用引入，将其值赋值给另一个变量，暴露出去

//结果失败了
export const REACT_APP_API_URL=process.env.REACT_APP_API_URL;
