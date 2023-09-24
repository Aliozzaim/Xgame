/* eslint-disable */
import React, { Suspense, useEffect, useState } from "react";
import * as THREE from "three";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="white" />
    </mesh>
  );
};

export default Computers;
