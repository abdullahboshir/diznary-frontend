
import { USER_ROLE } from "@/constant/role";
import { DrawerItem, TUserRole } from "@/types";
import {
  MdAdminPanelSettings,
  MdOutlineSupervisorAccount,
  MdCampaign,
  MdPersonAddAlt,
  MdWarehouse,
  MdDining,
  MdAccountCircle,
  MdNotifications,
  MdReport,
  MdHelp,
  MdBusiness,
  MdLockReset,
} from "react-icons/md";

export const drawerItems = (role: TUserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenu: DrawerItem[] = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: MdAccountCircle,
    },
    {
      title: "Notifications",
      path: `${role}/notifications`,
      icon: MdNotifications,
    },
    {
      title: "Change Password",
      path: `${role}/change-password`,
      icon: MdLockReset,
    },
    {
      title: "Dining Report",
      path: `${role}/dining-report`,
      icon: MdReport,
    },
    {
      title: "Support / Help",
      path: `${role}/support`,
      icon: MdHelp,
    },
  ];

  const adminSharedMenus: DrawerItem = {
    title: "User Management",
    icon: MdAdminPanelSettings,
    children: [
      {
        title: "Admin",
        path: `${role}/admin`,
        icon: MdAdminPanelSettings,
      },
      {
        title: "Manager",
        path: `${role}/manager`,
        icon: MdOutlineSupervisorAccount,
      },
      {
        title: "Moderator",
        path: `${role}/moderator`,
        icon: MdPersonAddAlt,
      },
      {
        title: "Student",
        path: `${role}/student`,
        icon: MdPersonAddAlt,
      },
    ],
  };

  const diningMenu: DrawerItem = {
    title: "Dining",
    icon: MdDining,
    children: [
      {
        title: "Dining",
        path: `${role}/dining`,
        icon: MdDining,
      },
      {
        title: "Daily Reports",
        path: `${role}/daily-reports`,
        icon: MdWarehouse,
      },
    ],
  };

  switch (role) {
    case USER_ROLE.superAdmin:
      roleMenus.push(
           {
          title: "Dashboard",
          path: `${role}/notice`,
          icon: MdCampaign,
        },
        adminSharedMenus,
        diningMenu,
        {
          title: "Notices",
          path: `${role}/notice`,
          icon: MdCampaign,
        },
        {
          title: "Hall",
          path: `${role}/hall`,
          icon: MdWarehouse,
        },
        {
          title: "Audit Logs",
          path: `${role}/audit-logs`,
          icon: MdBusiness,
        }
      );
      break;

    case USER_ROLE.admin:
      roleMenus.push(adminSharedMenus, diningMenu, {
        title: "Notices",
        path: `${role}/notice`,
        icon: MdCampaign,
      });
      break;

    case USER_ROLE.manager:
      roleMenus.push(diningMenu);
      break;

    case USER_ROLE.customer:
      roleMenus.push({
        title: "My Meals",
        path: `${role}/my-meals`,
        icon: MdDining,
      });
      roleMenus.push({
        title: "Payment History",
        path: `${role}/payment-history`,
        icon: MdDining,
      });
      break;
  }

  return [...roleMenus, ...defaultMenu];
};
