import React, { useMemo, useRef } from "react";

// threejs - perhaps convert to pure threejs?
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { perlin } from "../shaders/perlin";
import img from "../assets/fritz.jpg";
import disp from "../assets/noise.png";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100% !important;
  height: 100% !important;
`;

const Scene = props => {
  const { url, disp } = props;
  const group = useRef();
  const { viewport, gl } = useThree();
  const [texture, noise] = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [loader.load(url), loader.load(disp)];
  }, [url, disp]);
  useFrame(() => {
    group.current.__objects[1].uniforms["time"].value += 0.02;
  }); // render loop
  gl.setSize(window.innerWidth / 2, window.innerHeight * 1.1);
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
  <Wrapper>
    <Canvas>
      <Scene url={img} disp={disp} />
    </Canvas>
  </Wrapper>
);

export default Three;
