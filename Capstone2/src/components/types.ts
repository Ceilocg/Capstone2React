export interface User {
    id: number;
    name: string;
    email: string;
    role: Role;
    isActive: boolean;
  }
  
  export interface Role {
    id: number;
    name: string;
    permissions: string[];
  }
  