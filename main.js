import * as THREE from 'three';

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100)

const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("bg"),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
camera.position.set(-10, 0, 30);

const ambientlIght = new THREE.AmbientLight(0x333333);
scene.add(ambientlIght);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.8);
directionalLight.position.set(20, 50, 0);
scene.add(directionalLight);

const gLightHelper =  new THREE.DirectionalLightHelper(directionalLight, 5);
// scene.add(gLightHelper);

const cameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera);
// scene.add(cameraHelper);

const orbit = new OrbitControls(camera, renderer.domElement);
const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);

// camera.position.set(-10, 30, 30);
orbit.update();


const sphereGeometry = new THREE.SphereGeometry(4);
const sphereMaterial = new THREE.MeshStandardMaterial({color: 0xfff000, side: THREE.DoubleSide});
const sphere= new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

function animate(){
  requestAnimationFrame(animate);
  sphere.rotation.x += 0.01;
renderer.render(scene, camera);

}

window.addEventListener('keyup', function(){
  sphere.position.z += 2;
})

animate();