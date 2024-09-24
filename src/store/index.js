import { create } from "zustand";

export const MODO_CRONOMETRO = {
  FOCO: "foco",
  DESCANSO_CURTO: "descanso-curto",
  DESCANSO_LONGO: "descanso-longo",
};

export const useCronometroStore = create((set) => ({
  modoCronometro: MODO_CRONOMETRO.FOCO,
  tempoEmSegundos: 30,
  setModoCronometro: (novoModo) => {
    const novoTempo = obtemNovoTempoEmSegundos(novoModo);

    set({
      modoCronometro: novoModo,
      tempoEmSegundos: novoTempo,
    });
  },
}));

function obtemNovoTempoEmSegundos(novoModo) {
  if (novoModo === MODO_CRONOMETRO.FOCO) return 30;
  if (novoModo === MODO_CRONOMETRO.DESCANSO_CURTO) return 5;
  if (novoModo === MODO_CRONOMETRO.DESCANSO_LONGO) return 15;
}
