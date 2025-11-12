import { USER_ROLE } from "@/constant/role";
import { DrawerItem, TUserRole } from "@/types";
import {
  Shield,
  Users,
  UserCog,
  UserPlus,
  Bell,
  User,
  Key,
  FileText,
  HelpCircle,
  Utensils,
  Megaphone,
  Warehouse,
  ClipboardList,
  History,
} from "lucide-react";

export const drawerItems = (role: TUserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenu: DrawerItem[] = [
    {
      title: "Notifications",
      path: `${role}/notifications`,
      icon: Bell,
    },
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: User,
    },
    {
      title: "Change Password",
      path: `${role}/change-password`,
      icon: Key,
    },
    {
      title: "Dining Report",
      path: `${role}/dining-report`,
      icon: FileText,
    },
    {
      title: "Support / Help",
      path: `${role}/support`,
      icon: HelpCircle,
    },
  ];

  const adminSharedMenus: DrawerItem[] = [
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
      icon: UserCog,
    },
    {
      title: "Student",
      path: `${role}/student`,
      icon: UserPlus,
    },
    {
      title: "Dining",
      path: `${role}/dining`,
      icon: Utensils,
    },
    {
      title: "Notices",
      path: `${role}/notice`,
      icon: Megaphone,
    },
  ];

  switch (role) {
    case USER_ROLE.superAdmin:
      roleMenus.push(...adminSharedMenus);
      roleMenus.push(
        {
          title: "Hall",
          path: `${role}/hall`,
          icon: Warehouse,
        },
        {
          title: "Audit Logs",
          path: `${role}/audit-logs`,
          icon: ClipboardList,
        }
      );
      break;

    case USER_ROLE.admin:
      roleMenus.push(...adminSharedMenus);
      break;

    case USER_ROLE.manager:
      roleMenus.push(
        {
          title: "Dining",
          path: `${role}/dining`,
          icon: Utensils,
        },
        {
          title: "Daily Reports",
          path: `${role}/daily-reports`,
          icon: FileText,
        }
      );
      break;

    case USER_ROLE.customer:
      roleMenus.push(
        {
          title: "My Meals",
          path: `${role}/my-meals`,
          icon: Utensils,
        },
        {
          title: "Payment History",
          path: `${role}/payment-history`,
          icon: History,
        },
      );
      break;

    default:
      break;
  }

  return [...roleMenus, ...defaultMenu];
};