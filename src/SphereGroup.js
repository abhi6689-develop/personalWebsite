import React, { Component } from "react";
import Sphere from "./Sphere";
import { Canvas, createPortal, useFrame } from "react-three-fiber";
import { Shadow, OrthographicCamera, OrbitControls } from "drei";

export default function SphereGroup() {
  const sphere = {
    height: "600px",
    width: "600px",
    float: "relative",
    margin: "auto",
  };
  const sphere2 = {
    marginTop: "-300px",
    position: "relative",
    marginLeft: "750px",
    height: "400px",
    width: "400px",
  };
  const sphere3 = {
    marginTop: "-700px",
    position: "relative",
    marginLeft: "800px",
    height: "400px",
    width: "400px",
  };
  const sphere4 = {
    marginTop: "-500px",
    position: "relative",
    margin: "auto",
    height: "400px",
    width: "400px",
  };
  const sphere5 = {
    marginTop: "-500px",
    position: "relative",
    marginLeft: "120px",
    height: "400px",
    width: "400px",
  };
  const sphere6 = {
    marginTop: "-690px",
    position: "relative",
    marginLeft: "90px",
    height: "400px",
    width: "400px",
  };
  const sphereGroup = {
    marginTop: "20px",
    height: "700px",
    width: "1300px",
    position: "relative",
    margin: "auto",
  };
  return (
    <div style={sphereGroup}>
      <div style={sphere}>
        <Canvas
          colorManagement
          pixelRatio={window.devicePixelRatio}
          camera={{ position: [3, 3, 15], fov: 35 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.5}
            penumbra={1}
            intensity={2}
          />
          <pointLight
            position={[-10, -10, -5]}
            color="#5a39a2"
            intensity={20}
          />
          <pointLight position={[0, -10, 0]} intensity={1.5} />
          <Sphere>
            MACHINE LEARNING | | WEB DEVELOPEMENT | | APP DEVELOPEMENT | | AWS |
          </Sphere>
          <OrbitControls />
        </Canvas>
      </div>
      <div style={sphere2}>
        <Canvas
          colorManagement
          pixelRatio={window.devicePixelRatio}
          camera={{ position: [3, 3, 15], fov: 35 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.5}
            penumbra={1}
            intensity={2}
          />
          <pointLight
            position={[-10, -10, -5]}
            color="#5a39a2"
            intensity={20}
          />
          <pointLight position={[0, -10, 0]} intensity={1.0} />
          <Sphere>Python</Sphere>
          <OrbitControls />
        </Canvas>
      </div>
      <div style={sphere3}>
        <Canvas
          colorManagement
          pixelRatio={window.devicePixelRatio}
          camera={{ position: [3, 3, 15], fov: 35 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.5}
            penumbra={1}
            intensity={2}
          />
          <pointLight
            position={[-10, -10, -5]}
            color="#5a39a2"
            intensity={20}
          />
          <pointLight position={[0, -10, 0]} intensity={1.0} />
          <Sphere>Tensorflow</Sphere>
          <OrbitControls />
        </Canvas>
      </div>
      <div style={sphere4}>
        <Canvas
          colorManagement
          pixelRatio={window.devicePixelRatio}
          camera={{ position: [3, 3, 15], fov: 35 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.5}
            penumbra={1}
            intensity={2}
          />
          <pointLight
            position={[-10, -10, -5]}
            color="#5a39a2"
            intensity={20}
          />
          <pointLight position={[0, -10, 0]} intensity={1.0} />
          <Sphere>iOS(Swift)</Sphere>
          <OrbitControls />
        </Canvas>
      </div>
      <div style={sphere5}>
        <Canvas
          colorManagement
          pixelRatio={window.devicePixelRatio}
          camera={{ position: [3, 3, 15], fov: 35 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.5}
            penumbra={1}
            intensity={2}
          />
          <pointLight
            position={[-10, -10, -5]}
            color="#5a39a2"
            intensity={20}
          />
          <pointLight position={[0, -10, 0]} intensity={1.0} />
          <Sphere>Kotlin</Sphere>
          <OrbitControls />
        </Canvas>
      </div>
      <div style={sphere6}>
        <Canvas
          colorManagement
          pixelRatio={window.devicePixelRatio}
          camera={{ position: [3, 3, 15], fov: 35 }}
        >
          <ambientLight intensity={0.5} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.5}
            penumbra={1}
            intensity={2}
          />
          <pointLight
            position={[-10, -10, -5]}
            color="#5a39a2"
            intensity={20}
          />
          <pointLight position={[0, -10, 0]} intensity={1.0} />
          <Sphere>React(Native/Web)</Sphere>
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}
