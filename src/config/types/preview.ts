export type Preview = Record<string, { width: number; height: number }>;
export const preview: Preview = {
  "16:9": {
    width: 720,
    height: 480,
  },
  "1:1": {
    width: 400,
    height: 400,
  },
  "2:3": {
    width: 400,
    height: 600,
  },
  "3:2": {
    width: 600,
    height: 400,
  },
  "21:9": {
    width: 800,
    height: 360,
  },
  "32:9": {
    width: 800,
    height: 225,
  },
  "210:297": {
    width: 566,
    height: 800,
  },
  custom: {
    width: 800,
    height: 800,
  },
};
