import { RiDashboardLine } from "react-icons/ri";
import { FaUserCog, FaTools, FaUserPlus } from 'react-icons/fa';
import { SiMinutemailer } from "react-icons/si";
import {  AiFillShop, AiFillWechat } from "react-icons/ai";
import { userTypes } from "./user-type.config";
import { BsChatDots } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { BiBellPlus } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";

const SideBarItems=[
    {
        icon:RiDashboardLine,
        displayName:"Admin Portal",
        link:"/dashboard",
        allowed:[userTypes.Guest,userTypes.Admin]
    },
    {
        icon:FaUserCog,
        displayName:"Users",
        link:"/guest-management",
        allowed:[userTypes.OcMember,userTypes.Admin],
    },
    {
        icon:AiFillShop,
        displayName:"Booths",
        link:"/booth-management",
        allowed:[userTypes.OcMember,userTypes.Admin],
    },
    {
        icon:BsChatDots,
        displayName:"Chat",
        link:"/chat",
        allowed:[userTypes.BoothManager,userTypes.Chat,userTypes.Admin],
    },
    // {
    //     icon:AiFillMediumCircle,
    //     displayName:"User",
    //     // link:"/user-management",
    //     allowed:[userTypes.OcMember,userTypes.Admin],
    //     subItems:[
    //         {
    //             icon:FaUserCog,
    //             displayName:"Guest",
    //             link:"/guest-management",
    //             allowed:[userTypes.OcMember,userTypes.Admin],
    //         },
    //         {
    //             icon:AiFillShop,
    //             displayName:"Booths",
    //             link:"/booth-management",
    //             allowed:[userTypes.OcMember,userTypes.Admin],
    //         }
    //     ]
    // },
    {
        icon:SiMinutemailer,
        displayName:"Mail Box",
        link:"/mail-box",
        allowed:[userTypes.OcMember,userTypes.Admin]
    },
    // {
    //     icon:FaUserCog,
    //     displayName:"Chat",
    //     link:"/user-management",
    //     allowed:[userTypes.Admin]
    // },
    // {
    //     icon:AiFillShop,
    //     displayName:"Booth Management",
    //     link:"/booth-view",
    //     allowed:[userTypes.Admin]
    // },
    {
        icon:FaTools,
        displayName:"Customize Booth",
        link:"/booth-registration-content",
        allowed:[userTypes.BoothManager]
    },
    {
        icon:FaUserPlus,
        displayName:"User Creation",
        link:"/user-creation",
        allowed:[userTypes.Admin]
    },
    {
        icon:AiFillWechat,
        displayName:"Chat Lines",
        link:"/chat-lines",
        allowed:[userTypes.BoothManager]
    },
    {
        icon:FaQuestionCircle,
        displayName:"Questions",
        link:"/questions",
        allowed:[userTypes.Admin]
    },
    {
        icon:BiBellPlus,
        displayName:"Notifications",
        link:"/add-notification",
        allowed:[userTypes.Admin]
    },
    {
        icon:IoGameController,
        displayName:"Select Winners",
        link:"/winners",
        allowed:[userTypes.Admin]
    },
];

export {SideBarItems};