import erhai_clip from "../assets/Geometry/Infer_erhai_wander_color/clip_b16.mp4";
import erhai_dift from "../assets/Geometry/Infer_erhai_wander_color/dift.mp4";
import erhai_dino from "../assets/Geometry/Infer_erhai_wander_color/dino_b16.mp4";
import erhai_dinov2 from "../assets/Geometry/Infer_erhai_wander_color/dinov2_b14.mp4";
import erhai_dust3r from "../assets/Geometry/Infer_erhai_wander_color/dust3r.mp4";
import erhai_iuvrgb from "../assets/Geometry/Infer_erhai_wander_color/iuvrgb.mp4";
import erhai_mae from "../assets/Geometry/Infer_erhai_wander_color/mae_b16.mp4";
import erhai_mast3r from "../assets/Geometry/Infer_erhai_wander_color/mast3r.mp4";
import erhai_midas from "../assets/Geometry/Infer_erhai_wander_color/midas_l16.mp4";
import erhai_radio from "../assets/Geometry/Infer_erhai_wander_color/radio.mp4";
import erhai_sam from "../assets/Geometry/Infer_erhai_wander_color/sam_base.mp4";

import train_clip from "../assets/Geometry/Tanks_Train_interpolated_color/clip_b16.mp4";
import train_dift from "../assets/Geometry/Tanks_Train_interpolated_color/dift.mp4";
import train_dino from "../assets/Geometry/Tanks_Train_interpolated_color/dino_b16.mp4";
import train_dinov2 from "../assets/Geometry/Tanks_Train_interpolated_color/dinov2_b14.mp4";
import train_dust3r from "../assets/Geometry/Tanks_Train_interpolated_color/dust3r.mp4";
import train_iuvrgb from "../assets/Geometry/Tanks_Train_interpolated_color/iuvrgb.mp4";
import train_mae from "../assets/Geometry/Tanks_Train_interpolated_color/mae_b16.mp4";
import train_mast3r from "../assets/Geometry/Tanks_Train_interpolated_color/mast3r.mp4";
import train_midas from "../assets/Geometry/Tanks_Train_interpolated_color/midas_l16.mp4";
import train_radio from "../assets/Geometry/Tanks_Train_interpolated_color/radio.mp4";
import train_sam from "../assets/Geometry/Tanks_Train_interpolated_color/sam_base.mp4";

import suv_clip from "../assets/Geometry/MVimgNet_suv_interpolated_color/clip_b16.mp4";
import suv_dift from "../assets/Geometry/MVimgNet_suv_interpolated_color/dift.mp4";
import suv_dino from "../assets/Geometry/MVimgNet_suv_interpolated_color/dino_b16.mp4";
import suv_dinov2 from "../assets/Geometry/MVimgNet_suv_interpolated_color/dinov2_b14.mp4";
import suv_dust3r from "../assets/Geometry/MVimgNet_suv_interpolated_color/dust3r.mp4";
import suv_iuvrgb from "../assets/Geometry/MVimgNet_suv_interpolated_color/iuvrgb.mp4";
import suv_mae from "../assets/Geometry/MVimgNet_suv_interpolated_color/mae_b16.mp4";
import suv_mast3r from "../assets/Geometry/MVimgNet_suv_interpolated_color/mast3r.mp4";
import suv_midas from "../assets/Geometry/MVimgNet_suv_interpolated_color/midas_l16.mp4";
import suv_radio from "../assets/Geometry/MVimgNet_suv_interpolated_color/radio.mp4";
import suv_sam from "../assets/Geometry/MVimgNet_suv_interpolated_color/sam_base.mp4";

import suv_normal_clip from "../assets/Geometry/MVimgNet_suv_interpolated_normal/clip_b16_normal.mp4";
import suv_normal_dift from "../assets/Geometry/MVimgNet_suv_interpolated_normal/dift_normal.mp4";
import suv_normal_dino from "../assets/Geometry/MVimgNet_suv_interpolated_normal/dino_b16_normal.mp4";
import suv_normal_dinov2 from "../assets/Geometry/MVimgNet_suv_interpolated_normal/dinov2_b14_normal.mp4";
import suv_normal_dust3r from "../assets/Geometry/MVimgNet_suv_interpolated_normal/dust3r_normal.mp4";
import suv_normal_iuvrgb from "../assets/Geometry/MVimgNet_suv_interpolated_normal/iuvrgb_normal.mp4";
import suv_normal_mae from "../assets/Geometry/MVimgNet_suv_interpolated_normal/mae_b16_normal.mp4";
import suv_normal_mast3r from "../assets/Geometry/MVimgNet_suv_interpolated_normal/mast3r_normal.mp4";
import suv_normal_midas from "../assets/Geometry/MVimgNet_suv_interpolated_normal/midas_l16_normal.mp4";
import suv_normal_radio from "../assets/Geometry/MVimgNet_suv_interpolated_normal/radio_normal.mp4";
import suv_normal_sam from "../assets/Geometry/MVimgNet_suv_interpolated_normal/sam_base_normal.mp4";

import suv_depth_clip from "../assets/Geometry/MVimgNet_suv_interpolated_depth/clip_b16_depth.mp4";
import suv_depth_dift from "../assets/Geometry/MVimgNet_suv_interpolated_depth/dift_depth.mp4";
import suv_depth_dino from "../assets/Geometry/MVimgNet_suv_interpolated_depth/dino_b16_depth.mp4";
import suv_depth_dinov2 from "../assets/Geometry/MVimgNet_suv_interpolated_depth/dinov2_b14_depth.mp4";
import suv_depth_dust3r from "../assets/Geometry/MVimgNet_suv_interpolated_depth/dust3r_depth.mp4";
import suv_depth_iuvrgb from "../assets/Geometry/MVimgNet_suv_interpolated_depth/iuvrgb_depth.mp4";
import suv_depth_mae from "../assets/Geometry/MVimgNet_suv_interpolated_depth/mae_b16_depth.mp4";
import suv_depth_mast3r from "../assets/Geometry/MVimgNet_suv_interpolated_depth/mast3r_depth.mp4";
import suv_depth_midas from "../assets/Geometry/MVimgNet_suv_interpolated_depth/midas_l16_depth.mp4";
import suv_depth_radio from "../assets/Geometry/MVimgNet_suv_interpolated_depth/radio_depth.mp4";
import suv_depth_sam from "../assets/Geometry/MVimgNet_suv_interpolated_depth/sam_base_depth.mp4";


export const GeometryData = [

  {
    source: erhai_dust3r,
    label: "DUSt3R",
    scene: "Erhai",
    color: "#B2CBC2"
  },
  {
    source: erhai_mast3r,
    label: "MASt3R",
    scene: "Erhai",
    color: "#BBC990"
  },
  {
    source: erhai_midas,
    label: "MiDaS",
    scene: "Erhai",
    color: "#6B859E"
  },
  {
    source: erhai_dinov2,
    label: "DINOv2",
    scene: "Erhai",
    color: "#B45342"
  },
  {
    source: erhai_dino,
    label: "DINO",
    scene: "Erhai",
    color: "#DCAC99"
  },
  {
    source: erhai_sam,
    label: "SAM",
    scene: "Erhai",
    color: "#6F936B"
  },
  {
    source: erhai_clip,
    label: "CLIP",
    scene: "Erhai",
    color: "#EBA062"
  },
  {
    source: erhai_radio,
    label: "RADIO",
    scene: "Erhai",
    color: "#FED273"
  },
  {
    source: erhai_mae,
    label: "MAE",
    scene: "Erhai",
    color: "#9A8EB4"
  },
  {
    source: erhai_dift,
    label: "SD",
    scene: "Erhai",
    color: "#706052"
  },
  {
    source: erhai_iuvrgb,
    label: "IUVRGB",
    scene: "Erhai",
    color: "#E9E5E5"
  },

  {
    source: train_dust3r,
    label: "DUSt3R",
    scene: "Train",
    color: "#B2CBC2"
  },
  {
    source: train_mast3r,
    label: "MASt3R",
    scene: "Train",
    color: "#BBC990"
  },
  {
    source: train_midas,
    label: "MiDaS",
    scene: "Train",
    color: "#6B859E"
  },
  {
    source: train_dinov2,
    label: "DINOv2",
    scene: "Train",
    color: "#B45342"
  },
  {
    source: train_dino,
    label: "DINO",
    scene: "Train",
    color: "#DCAC99"
  },
  {
    source: train_sam,
    label: "SAM",
    scene: "Train",
    color: "#6F936B"
  },
  {
    source: train_clip,
    label: "CLIP",
    scene: "Train",
    color: "#EBA062"
  },
  {
    source: train_radio,
    label: "RADIO",
    scene: "Train",
    color: "#FED273"
  },
  {
    source: train_mae,
    label: "MAE",
    scene: "Train",
    color: "#9A8EB4"
  },
  {
    source: train_dift,
    label: "SD",
    scene: "Train",
    color: "#706052"
  },
  {
    source: train_iuvrgb,
    label: "IUVRGB",
    scene: "Train",
    color: "#E9E5E5"
  },
  
  {
    source: suv_dust3r,
    label: "DUSt3R",
    scene: "suv",
    color: "#B2CBC2"
  },
  {
    source: suv_mast3r,
    label: "MASt3R",
    scene: "suv",
    color: "#BBC990"
  },
  {
    source: suv_midas,
    label: "MiDaS",
    scene: "suv",
    color: "#6B859E"
  },
  {
    source: suv_dinov2,
    label: "DINOv2",
    scene: "suv",
    color: "#B45342"
  },
  {
    source: suv_dino,
    label: "DINO",
    scene: "suv",
    color: "#DCAC99"
  },
  {
    source: suv_sam,
    label: "SAM",
    scene: "suv",
    color: "#6F936B"
  },
  {
    source: suv_clip,
    label: "CLIP",
    scene: "suv",
    color: "#EBA062"
  },
  {
    source: suv_radio,
    label: "RADIO",
    scene: "suv",
    color: "#FED273"
  },
  {
    source: suv_mae,
    label: "MAE",
    scene: "suv",
    color: "#9A8EB4"
  },
  {
    source: suv_dift,
    label: "SD",
    scene: "suv",
    color: "#706052"
  },
  {
    source: suv_iuvrgb,
    label: "IUVRGB",
    scene: "suv",
    color: "#E9E5E5"
  },
  {
    source: suv_normal_dust3r,
    label: "DUSt3R",
    scene: "suv_normal",
    color: "#B2CBC2"
  },
  {
    source: suv_normal_mast3r,
    label: "MASt3R",
    scene: "suv_normal",
    color: "#BBC990"
  },
  {
    source: suv_normal_midas,
    label: "MiDaS",
    scene: "suv_normal",
    color: "#6B859E"
  },
  {
    source: suv_normal_dinov2,
    label: "DINOv2",
    scene: "suv_normal",
    color: "#B45342"
  },
  {
    source: suv_normal_dino,
    label: "DINO",
    scene: "suv_normal",
    color: "#DCAC99"
  },
  {
    source: suv_normal_sam,
    label: "SAM",
    scene: "suv_normal",
    color: "#6F936B"
  },
  {
    source: suv_normal_clip,
    label: "CLIP",
    scene: "suv_normal",
    color: "#EBA062"
  },
  {
    source: suv_normal_radio,
    label: "RADIO",
    scene: "suv_normal",
    color: "#FED273"
  },
  {
    source: suv_normal_mae,
    label: "MAE",
    scene: "suv_normal",
    color: "#9A8EB4"
  },
  {
    source: suv_normal_dift,
    label: "SD",
    scene: "suv_normal",
    color: "#706052"
  },
  {
    source: suv_normal_iuvrgb,
    label: "IUVRGB",
    scene: "suv_normal",
    color: "#E9E5E5"
  },
  {
    source: suv_depth_dust3r,
    label: "DUSt3R",
    scene: "suv_depth",
    color: "#B2CBC2"
  },
  {
    source: suv_depth_mast3r,
    label: "MASt3R",
    scene: "suv_depth",
    color: "#BBC990"
  },
  {
    source: suv_depth_midas,
    label: "MiDaS",
    scene: "suv_depth",
    color: "#6B859E"
  },
  {
    source: suv_depth_dinov2,
    label: "DINOv2",
    scene: "suv_depth",
    color: "#B45342"
  },
  {
    source: suv_depth_dino,
    label: "DINO",
    scene: "suv_depth",
    color: "#DCAC99"
  },
  {
    source: suv_depth_sam,
    label: "SAM",
    scene: "suv_depth",
    color: "#6F936B"
  },
  {
    source: suv_depth_clip,
    label: "CLIP",
    scene: "suv_depth",
    color: "#EBA062"
  },
  {
    source: suv_depth_radio,
    label: "RADIO",
    scene: "suv_depth",
    color: "#FED273"
  },
  {
    source: suv_depth_mae,
    label: "MAE",
    scene: "suv_depth",
    color: "#9A8EB4"
  },
  {
    source: suv_depth_dift,
    label: "SD",
    scene: "suv_depth",
    color: "#706052"
  },
  {
    source: suv_depth_iuvrgb,
    label: "IUVRGB",
    scene: "suv_depth",
    color: "#E9E5E5"
  },
];