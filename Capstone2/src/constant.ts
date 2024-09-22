// src/constants.ts
export enum Roles {
    Admin = 'admin',
    Faculty = 'faculty',
    Adviser = 'adviser',
  }
  
  export enum Permissions {
    AddUser = 'add_user',
    UpdateUser = 'update_user',
    ViewDashboard = 'view_dashboard',
    ViewFormTemplates = 'view_form_templates',
    ManageData = 'manage_data',
  }
  
  export const rolePermissions = {
    [Roles.Admin]: [Permissions.AddUser, Permissions.UpdateUser, Permissions.ViewDashboard, Permissions.ViewFormTemplates],
    [Roles.Faculty]: [Permissions.ViewDashboard, Permissions.ViewFormTemplates],
    [Roles.Adviser]: [Permissions.ViewDashboard, Permissions.ViewFormTemplates, Permissions.ManageData],
  };
  