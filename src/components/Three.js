import React, { useMemo, useRef } from "react";

// threejs - perhaps convert to pure threejs?
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { perlin } from "../shaders/perlin";
import img from "../assets/fritz.jpg";
import disp from "../assets/noise.png";

const Scene = props => {
  const { url, disp } = props;
  const group = useRef();
  const { camera, viewport } = useThree();
  const [texture, noise] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [loader.load(url), loader.load(disp)];
  }, [url, disp]);

  camera.aspect = window.innerWidth / window.innerHeight;
  useFrame(() => {
    group.current.__objects[1].uniforms["time"].value += 0.02;
  }); // render loop
  console.log("viewport: ", viewport);
  return (
    <mesh ref={group} scale={[viewport.width, viewport.height, 1]}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} />
      <shaderMaterial
        attach="material"
        args={[perlin]}
        uniforms-texture-value={texture}
        uniforms-disp-value={noise}
      />
    </mesh>
  );
};

const Three = () => (
  <Canvas>
    <Scene url={img} disp={disp} />
  </Canvas>
);

export default Three;
