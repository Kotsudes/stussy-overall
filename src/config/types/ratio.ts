import React from "react";

export type Ratio = {
  label: string;
  value: string;
  description: string;
  format: string;
};

export const ratios = [
  {
    label: "Large",
    value: "16:9",
    description: "Format large pour les vidéos et le contenu multimédia",
    format: "16:9",
  },
  {
    label: "Carré",
    value: "1:1",
    description:
      "Format carré pour les publications sur les réseaux sociaux et les photos de profil",
    format: "1:1",
  },
  {
    label: "Portrait",
    value: "2:3",
    description: "Format portrait pour la photographie et les écrans mobiles",
    format: "2:3",
  },
  {
    label: "Paysage",
    value: "3:2",
    description: "Format paysage pour la photographie et les écrans numériques",
    format: "3:2",
  },
  {
    label: "Cinémascope",
    value: "21:9",
    description: "Format cinémascope pour les films en grand écran",
    format: "21:9",
  },
  {
    label: "Ultra-Large",
    value: "32:9",
    description:
      "Format ultra-large pour les jeux et les expériences immersives",
    format: "32:9",
  },
  {
    label: "A4",
    value: "210:297",
    description: "Format A4 pour les documents et l'impression",
    format: "A4",
  },
  {
    label: "Personnalisé",
    value: "custom",
    description: "Format personnalisé défini par l'utilisateur",
    format: "?",
  },
];
