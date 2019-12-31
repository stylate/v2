import React, { useMemo, useRef } from 'react';

// threejs - perhaps convert to pure threejs?
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from 'react-three-fiber'
import { perlin } from '../shaders/perlin';
import img from '../assets/fritz.jpg';
import disp from '../assets/noise.png';

const Scene = (props) => {
    const {url, disp} = props;
    const group = useRef();
    const [texture, noise] = useMemo(
        () => {
          const loader = new THREE.TextureLoader();
          return [loader.load(url), loader.load(disp)]
        },
        [url, disp]
    );
    useFrame(() => {
        group.current.__objects[1].uniforms['time'].value += 0.02
    }); // render loop
    return (
        <mesh ref={group}>
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

const Three = () => (
    <div>
        <Canvas className='canvas'>
            <Scene url={img} disp={disp} />
        </Canvas>
    </div>
)

export default Three;