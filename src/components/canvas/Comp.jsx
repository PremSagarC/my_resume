import { useGLTF } from "@react-three/drei";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./space/scene.gltf");

  return (
    <mesh>
      <hemisphereLight
        intensity={5}
        groundColor="black"
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.2 : 0.35}
        position={isMobile ? [0, 0.5, -1] : [0, 0, -2]}
        rotation={[-0.3, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default Computers;
