
import train_clip from "../assets/Texture/DL3DV_Museum_interpolated_color/clip_b16.mp4";
import train_dift from "../assets/Texture/DL3DV_Museum_interpolated_color/dift.mp4";
import train_dino from "../assets/Texture/DL3DV_Museum_interpolated_color/dino_b16.mp4";
import train_dinov2 from "../assets/Texture/DL3DV_Museum_interpolated_color/dinov2_b14.mp4";
import train_dust3r from "../assets/Texture/DL3DV_Museum_interpolated_color/dust3r.mp4";
import train_iuvrgb from "../assets/Texture/DL3DV_Museum_interpolated_color/iuvrgb.mp4";
import train_mae from "../assets/Texture/DL3DV_Museum_interpolated_color/mae_b16.mp4";
import train_mast3r from "../assets/Texture/DL3DV_Museum_interpolated_color/mast3r.mp4";
import train_midas from "../assets/Texture/DL3DV_Museum_interpolated_color/midas_l16.mp4";
import train_radio from "../assets/Texture/DL3DV_Museum_interpolated_color/radio.mp4";
import train_sam from "../assets/Texture/DL3DV_Museum_interpolated_color/sam_base.mp4";

export const TextureConfig = {
  defaultLabels: {
    first: "RADIO",
    second: "IUVRGB"
  }
};

export const TextureData = [

  {
    source: train_dust3r,
    label: "DUSt3R",
    scene: "Museum",
    color: "#B2CBC2"
  },
  {
    source: train_mast3r,
    label: "MASt3R",
    scene: "Museum",
    color: "#BBC990"
  },
  {
    source: train_midas,
    label: "MiDaS",
    scene: "Museum",
    color: "#6B859E"
  },
  {
    source: train_dinov2,
    label: "DINOv2",
    scene: "Museum",
    color: "#B45342"
  },
  {
    source: train_dino,
    label: "DINO",
    scene: "Museum",
    color: "#DCAC99"
  },
  {
    source: train_sam,
    label: "SAM",
    scene: "Museum",
    color: "#6F936B"
  },
  {
    source: train_clip,
    label: "CLIP",
    scene: "Museum",
    color: "#EBA062"
  },
  {
    source: train_radio,
    label: "RADIO",
    scene: "Museum",
    color: "#FED273"
  },
  {
    source: train_mae,
    label: "MAE",
    scene: "Museum",
    color: "#9A8EB4"
  },
  {
    source: train_dift,
    label: "SD",
    scene: "Museum",
    color: "#706052"
  },
  {
    source: train_iuvrgb,
    label: "IUVRGB",
    scene: "Museum",
    color: "#E9E5E5"
  },

];