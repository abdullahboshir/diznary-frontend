
import { USER_ROLE } from "@/constant/role";
import { DrawerItem, TUserRole } from "@/types";
import {
  Shield,           // MdAdminPanelSettings
  Users,            // MdOutlineSupervisorAccount
  Megaphone,        // MdCampaign
  UserPlus,         // MdPersonAddAlt
  Warehouse,        // MdWarehouse
  Utensils,         // MdDining
  User,             // MdAccountCircle
  Bell,             // MdNotifications
  Flag,             // MdReport
  HelpCircle,       // MdHelp
  Building,         // MdBusiness
  LockKeyhole,      // MdLockReset
} from "lucide-react";

export const drawerItems = (role: TUserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenu: DrawerItem[] = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: User,
    },
    {
      title: "Notifications",
      path: `${role}/notifications`,
      icon: Bell,
    },
    {
      title: "Change Password",
      path: `${role}/change-password`,
      icon: LockKeyhole,
    },
    {
      title: "Dining Report",
      path: `${role}/dining-report`,
      icon: Flag,
    },
    {
      title: "Support / Help",
      path: `${role}/support`,
      icon: HelpCircle,
    },
  ];

  const adminSharedMenus: DrawerItem = {
    title: "User Management",
    icon: Shield,
    children: [
      {
        title: "Admin",
        path: `${role}/admin`,
        icon: Shield,
      },
      {
        title: "Manager",
        path: `${role}/manager`,
        icon: Users,
      },
      {
        title: "Moderator",
        path: `${role}/moderator`,
        icon: UserPlus,
      },
      {
        title: "Student",
        path: `${role}/student`,
        icon: UserPlus,
      },
    ],
  };

  const diningMenu: DrawerItem = {
    title: "Dining",
    icon: Utensils,
    children: [
      {
        title: "Dining",
        path: `${role}/dining`,
        icon: Utensils,
      },
      {
        title: "Daily Reports",
        path: `${role}/daily-reports`,
        icon: Warehouse,
      },
    ],
  };

  switch (role) {
    case USER_ROLE.superAdmin:
      roleMenus.push(
           {
          title: "Dashboard",
          path: `${role}/notice`,
          icon: Megaphone,
        },
        adminSharedMenus,
        diningMenu,
        {
          title: "Notices",
          path: `${role}/notice`,
          icon: Megaphone,
        },
        {
          title: "Hall",
          path: `${role}/hall`,
          icon: Warehouse,
        },
        {
          title: "Audit Logs",
          path: `${role}/audit-logs`,
          icon: Building,
        }
      );
      break;

    case USER_ROLE.admin:
      roleMenus.push(adminSharedMenus, diningMenu, {
        title: "Notices",
        path: `${role}/notice`,
        icon: Megaphone,
      });
      break;

    case USER_ROLE.manager:
      roleMenus.push(diningMenu);
      break;

    case USER_ROLE.customer:
      roleMenus.push({
        title: "My Meals",
        path: `${role}/my-meals`,
        icon: Utensils,
      });
      roleMenus.push({
        title: "Payment History",
        path: `${role}/payment-history`,
        icon: Utensils,
      });
      break;
  }

  return [...roleMenus, ...defaultMenu];
};
