import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600,
};

/**
 * Cursor
 */
// const cursor = {
//     x: 0,
//     y: 0,
// };
// window.addEventListener('mousemove', (event) => {
//     cursor.x = (event.clientX / sizes.width - 0.5) * 2;
//     cursor.y = -(event.clientY / sizes.height - 0.5) * 2;
// });

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

//Scene
const scene = new THREE.Scene();

/**
 * Group
 */
// const group = new THREE.Group();

/**
 * Objects
*/
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);

// group.add(mesh);
scene.add(mesh);

//Position
// mesh.position.set(0.7, -0.6, 1);

//Scale
// mesh.scale.x = 2;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
// mesh.scale.set(2, 0.5, 0.5);

//Rotation
// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI / 2;
// mesh.rotation.y = Math.PI / 2;

//Normalize vector
// mesh.position.normalize();

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 1000);
camera.position.set(0, 0, 3);
camera.lookAt(mesh.position);
scene.add(camera);

// camera.lookAt(mesh.position);

// console.log(mesh.position.distanceTo(camera.position));

/**
 * Controls
 */
const controls = new OrbitControls(camera, canvas );
controls.enableDamping = true;
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

//Clock
const clock = new THREE.Clock();

//Animation
const tick = () => {
    //Update controls
    controls.update();

    //Clock
    const elapsedTime = clock.getElapsedTime();

    //Update camera
    // camera.position.x = Math.sin(cursor.x * Math.PI) * 3;
    // camera.position.z = Math.cos(cursor.x * Math.PI) * 3;
    // camera.lookAt(mesh.position);

    //Update objects
    // mesh.rotation.y = elapsedTime * Math.PI / 2;

    //Renderer
    renderer.render(scene, camera);

    requestAnimationFrame(tick);
};

tick();