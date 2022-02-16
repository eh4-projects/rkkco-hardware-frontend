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
        displayName:"Dashboard",
        link:"/dashboard",
        allowed:[userTypes.Guest,userTypes.Admin]
    },
    {
        icon:FaUserCog,
        displayName:"Stock",
        link:"/stock",
        allowed:[userTypes.OcMember,userTypes.Admin],
    },
    {
        icon:AiFillShop,
        displayName:"Update Stock",
        link:"/update-stock",
        allowed:[userTypes.Guest,userTypes.Admin]
    },
    {
        icon:AiFillWechat,
        displayName:"Item Registration",
        link:"/item-registration",
        allowed:[userTypes.OcMember,userTypes.Admin],
    },

];

export {SideBarItems};