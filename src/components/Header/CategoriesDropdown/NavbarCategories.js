import React from 'react';
import { examCategory } from '../../../Dummy_Database';
import MenuItems from './MenuItems';
import "./NavbarCategories.css";




// const headerCategoriesData = [
//     {
//         title:"categories",
//         url:"/services",
//         submenu: [
//             {
//                 image:"ssclogo.png",
//                 title:"ssc",
//                 url:"/",
//                 submenu:[
//                     {
//                         title:"ssc cgl",
//                         image:"ssclogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"ssc chsl",
//                         image:"ssclogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"ssc cpo",
//                         image:"ssclogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"ssc selection post",
//                         image:"ssclogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"ssc je",
//                         image:"ssclogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"ssc steno",
//                         image:"ssclogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"ssc mts",
//                         image:"ssclogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"ssc gd",
//                         image:"ssclogo.png",
//                         url:"/",
//                     },
//                 ]
//             },
//             {
//                 image:"rrblogo.png",
//                 title:"railways",
//                 url:"/",
//                 submenu:[
//                     {
//                         title:"rrb ntpc",
//                         image:"rrblogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:'rrb je',
//                         image:"rrblogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"rrb alp",
//                         image:"rrblogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"rrb si",
//                         image:"rrblogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"rrb group-d",
//                         image:"rrblogo.png",
//                         url:"/",
//                     },
//                 ]
//             },
//             {
//                image:"banklogo.jpg",
//                title:"banking",
//                url:"/",
//                submenu:[
//                 {
//                     title:"sbi po",
//                     image:"banklogo.jpg",
//                     url:"/",
//                 },
//                 {
//                     title:"sbi clerk",
//                     image:"banklogo.jpg",
//                     url:"/",
//                 },
//                 {
//                     title:"ibps po",
//                     image:"banklogo.jpg",
//                     url:"/",
//                 },
//                 {
//                     title:"ibps clerk",
//                     image:"banklogo.jpg",
//                     url:"/",
//                 },
//                 {
//                     title:"rrb po",
//                     image:"banklogo.jpg",
//                     url:"/",
//                 },
//                 {
//                     title:"rrb clerk",
//                     image:"banklogo.jpg",
//                     url:"/",
//                 },
//                ]
//             },
//             {
//                 image:"upsclogo.jpg",
//                 title:"civil services",
//                 url:"/",
//             },
//             {
//                 image:"Statelogo.png",
//                 title:"state",
//                 url:"/",
//                 submenu:[
//                     {
//                         title:"bihar pcs",
//                         image:"bpsclogo.jpg",
//                         url:"/",
//                     },
//                     {
//                         title:"up pcs",
//                         image:"uppsclogo.jpg",
//                         url:"/",
//                     },
//                     {
//                         title:"mp pcs",
//                         image:"mppcslogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"rajsthan pcs",
//                         image:"RPSCLogo.jpeg",
//                         url:"/",
//                     },
//                     {
//                         title:"haryana pcs",
//                         image:"",
//                         url:"/",
//                     },
//                     {
//                         title:"jammu kashmir",
//                         image:"j&kpcslogo.png",
//                         url:"/",
//                     },
//                     {
//                         title:"west bengal pcs",
//                         image:"westbengallogo.png",
//                         url:"/",
//                     }
//                 ]
//             }
            
//         ]
//     }
// ]

const NavbarCategories = () => {
  return (
    <nav>
      <ul className="menus">
        {examCategory.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default NavbarCategories;