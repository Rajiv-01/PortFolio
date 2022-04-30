import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';
var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load(
	'/3D/textures/Material__25__background_JPG_002_emissive.jpeg'
);
// init
const loader = new GLTFLoader();

export function init() {
	const camera = new THREE.PerspectiveCamera(
		70,
		window.innerWidth / window.innerHeight,
		0.01,
		10
	);
	camera.position.z = 2;

	const scene = new THREE.Scene();
	const light = new THREE.AmbientLight(0xffffff);
	scene.add(light);

	loader.load('/3D/scene.gltf', (gltf) => {
		let model = gltf.scene;
		model.scale.set(0.2, 0.2, 0.2);
		model.traverse((o) => {
			if (o.isMesh) {
				o.material.map = texture;
			}
		});
		gsap.to(model.rotation, {
			y: 6.428,
			repeat: -1,
			duration: 100,
		});

		scene.add(model);
	});

	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	renderer.setAnimationLoop(animation);
	document.body.appendChild(renderer.domElement);
	window.addEventListener('resize', onWindowResize, false);
	function onWindowResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}
	// animation

	function animation(time) {
		renderer.render(scene, camera);
	}

	let oldx = 0;
	let oldy = 0;
	window.onmousemove = function (e) {
		let changex = e.x + oldx;
		let changey = e.y + oldy;
		camera.position.x = changex / 3000;
		camera.position.y = changey / 3000;
		oldx = e.x;
		oldy = e.y;
	};
}
