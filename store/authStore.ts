import { StateCreator } from "zustand";
import { create } from "zustand";
import { persist } from "zustand/middleware";

enum Roles {
  USER = "USER",
  ADMIN = "ADMIN",
  SUPERADMIN = "SUPERADMIN",
}
export type User = {
  id: number;
  name: string;
  phone: string;
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

export type IGlobalStore = AuthSlice;

export const STORAGE_KEY = "foothub_storage";

export const useAuthStore = create<
  IGlobalStore,
  [["zustand/persist", Pick<IGlobalStore, "accessToken">]]
>(
  persist(
    (...a) => ({
      ...createAuthSlice(...a),
    }),
    {
      name: STORAGE_KEY,
      partialize: (state) => ({
        accessToken: state.accessToken,
        user: state.user,
      }),
    }
  )
);
