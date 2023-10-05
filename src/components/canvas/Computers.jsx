import React, {
  Suspense,
  useEffect,
  useState,
} from "react";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Preload,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import Computers from "./Comp";

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`
    (max-width: 500px)
    `);
    setIsMobile(mediaQuery.matches);

    const handleMediaChange = (e) => {
      e.preventDefault();
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener(
      "change",
      handleMediaChange,
      { passive: true }
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleMediaChange,
        { passive: true }
      );
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
