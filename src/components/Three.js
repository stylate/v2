import React, { useMemo, useRef } from 'react';

// threejs - perhaps convert to pure threejs?
import * as THREE from 'three';
import { Canvas, useRender, useThree } from 'react-three-fiber'
import { perlin } from '../shaders/perlin';
import img from '../assets/fritz.jpg';
import disp from '../assets/noise.png';

const Image = ({url, disp}) => {
    const [texture, noise] = useMemo(
        () => {
          const loader = new THREE.TextureLoader();
          return [loader.load(url), loader.load(disp)]
        },
        [url, disp]
    );
    const { canvas } = useThree();
    canvas.style = "width: 100%; height: 100%";
    return (
        <mesh>
            <planeBufferGeometry name="geometry" args={[8, 8]} />
            <shaderMaterial
                name="material"
                args={[perlin]}
                uniforms-texture-value={texture}
                uniforms-disp-value={noise}
            />
        </mesh>
    );
}

const Scene = () => {
    let group = useRef();
  
    useRender(() => group.current.children[0].material.uniforms['time'].value += 0.02);
  
    return (
      <group ref={group}>
        <Image url={img} disp={disp} />
      </group>
    );
  }

const Three = () => (
    <div>
        <Canvas className='canvas'>
            <Scene />
        </Canvas>
    </div>
)

export default Three;