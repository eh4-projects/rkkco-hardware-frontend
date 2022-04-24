
import { RiDashboardLine, RiBillFill } from "react-icons/ri";
import { FaUserCog, FaTools, FaUserPlus } from 'react-icons/fa';
import { SiMinutemailer } from "react-icons/si";
import { AiFillShop, AiFillWechat } from "react-icons/ai";
import { userTypes } from "./user-type.config";

const SideBarItems = [
    {
        icon: RiDashboardLine,
        displayName: "Dashboard",
        link: "/dashboard",
        allowed: [userTypes.Guest, userTypes.Admin]
    },
    {
        icon: FaUserCog,
        displayName: "Stock Oveview",
        link: "/stock-overview",
        allowed: [userTypes.OcMember, userTypes.Admin],
    },
    {
        icon: AiFillShop,
        displayName: "Update Stock",
        link: "/update-stock",
        allowed: [userTypes.Guest, userTypes.Admin]
    },
    {
        icon: AiFillWechat,
        displayName: "Item Registration",
        link: "/item-registration",
        allowed: [userTypes.OcMember, userTypes.Admin],
    },
    {
        icon: RiBillFill,
        displayName: "Quotations",
        link: "/quotation",
        allowed: [userTypes.Admin],
    },
    {
        icon: RiBillFill,
        displayName: "Billing",
        link: "/billing",
        allowed: [userTypes.Admin],
    },
    {
        icon: RiBillFill,
        displayName: "Daily Reports",
        link: "/daily-reports",
        allowed: [userTypes.Admin],
    },

];

export { SideBarItems };