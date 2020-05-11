// 路由器

import Home from '../contairs/HomeContairs.js';
import Bank from '../contairs/BankContairs.js';
import Document from '../contairs/DocumentContairs.js';
import Frame from '../contairs/FrameContairs.js';
import Sample from '../contairs/SampleContairs.js';
import Demo from '../component/Demo/Demo.jsx'

export default [
  // {
  //   path:'路由路径',
  //   component: 路由组件,
  //   exact:true,
  // },

  {
    path:'/',
    component: Demo,
    exact:true,
    routes:[
      {
        path:'/home',
        component: Home,
        exact:true,
      },
      {
        path:'/bank',
        component: Bank,
        exact:true,
      },
      {
        path:'/document',
        component: Document,
        exact:true,
      },
      {
        path:'/frame',
        component: Frame,
        exact:true,
      },
      {
        path:'/sample',
        component: Sample,
        exact:true,
      },
    ],
  },
  

]