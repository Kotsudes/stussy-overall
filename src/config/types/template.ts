export type Template = {
  label: string;
  value: string;
  description: string;
  format: string;
  aspect: string;
};

export const templates = [
  {
    label: "Custom",
    value: "custom",
    description: "Créez votre propre affiche",
    format: "?",
    aspect: "square",
  },
  {
    label: "Valorant OTF",
    value: "valorant-otf",
    description: "Affiche produite pour l'OTF Valorant",
    format: "3/4",
    aspect: "3/4",
  },
];
