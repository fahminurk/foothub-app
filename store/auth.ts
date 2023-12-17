import { StateCreator } from "zustand";

enum Roles {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPERADMIN = "SUPERADMIN",
}
type User = {
  id: number;
  name: string;
  email: string;
  avatarUrl: string;
  isVerified: boolean;
  role: Roles;
};

export type AuthSlice = {
  accessToken: string | null;
  user: User | null;
  onAuthSuccess: ({
    accessToken,
    user,
  }: {
    accessToken: string;
    user: User;
  }) => void;
  onLogout: () => void;
};

export const createAuthSlice: StateCreator<AuthSlice, [], [], AuthSlice> = (
  set
) => ({
  accessToken: null,
  user: null,
  onAuthSuccess: (payload) => {
    set(() => ({ ...payload }));
  },
  onLogout: () => {
    set(() => ({
      accessToken: null,
      user: null,
    }));
  },
});
