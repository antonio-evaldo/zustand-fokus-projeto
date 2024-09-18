import { create } from "zustand";

export const MODO_CRONOMETRO = {
  FOCO: "foco",
  DESCANSO_CURTO: "descanso-curto",
  DESCANSO_LONGO: "descanso-longo",
};

export const useCronometroStore = create((set) => ({
  modoCronometro: MODO_CRONOMETRO.FOCO,
  defineModoCronometro: (novoModo) => set({ modoCronometro: novoModo }),
}));
