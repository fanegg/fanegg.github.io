import plushies_color from "../assets/Application/plushies_rgb.mp4";
import plushies_depth from "../assets/Application/plushies_depth.mp4";
import plushies_normal from "../assets/Application/plushies_normal.mp4";
import family_color from "../assets/Application/family_rgb.mp4";
import family_depth from "../assets/Application/family_depth.mp4";
import family_normal from "../assets/Application/family_normal.mp4";

export const ApplicationData = [
  {
    source: plushies_color,
    label: "RGB",
    scene: "Plushies",
  },
  {
    source: plushies_depth,
    label: "Depth",
    scene: "Plushies",
  },
  {
    source: plushies_normal,
    label: "Normal",
    scene: "Plushies",
  },
  {
    source: family_color,
    label: "RGB",
    scene: "Family",
  },
  {
    source: family_depth,
    label: "Depth",
    scene: "Family",
  },
  {
    source: family_normal,
    label: "Normal",
    scene: "Family",
  },
];
