
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.118/build/three.module.min.js';

import { AnaglyphEffect } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/effects/AnaglyphEffect.js';

let container, camera, scene, renderer, effect;

const spheres = [];

let mouseX = 0;
let mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

document.addEventListener( 'mousemove', onDocumentMouseMove, false );

init();
animate();

function init() {

	container = document.createElement( 'div' );
	document.body.insertBefore( container, document.body.childNodes[ 0 ] );
	document.getElementById( "background1" ).appendChild( container );

	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.01, 100 );
	camera.position.z = 3;
	camera.focalLength = 3;

	const path = "textures/cube/pisa/";
	const format = '.png';
	const urls = [
		path + 'px' + format, path + 'nx' + format,
		path + 'py' + format, path + 'ny' + format,
		path + 'pz' + format, path + 'nz' + format
	];

	const textureCube = new THREE.CubeTextureLoader().load( urls );

	scene = new THREE.Scene();
	scene.background = textureCube;

	const geometry = new THREE.SphereBufferGeometry( 0.1, 32, 16 );
	const material = new THREE.MeshBasicMaterial( { color: 0xffffff, envMap: textureCube } );

	for ( let i = 0; i < 500; i ++ ) {

		const mesh = new THREE.Mesh( geometry, material );

		mesh.position.x = Math.random() * 10 - 5;
		mesh.position.y = Math.random() * 10 - 5;
		mesh.position.z = Math.random() * 10 - 5;

		mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

		scene.add( mesh );

		spheres.push( mesh );

	}

	//

	var canvas = document.querySelector("canvas");
	var renderer = new THREE.WebGLRenderer({canvas: canvas});
	//renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	//container.insertBefore( renderer.domElement, container.childNodes[ 0 ] );
	container.appendChild( renderer.domElement );

	const width = window.innerWidth || 2;
	const height = window.innerHeight || 2;

	effect = new AnaglyphEffect( renderer );
	effect.setSize( width, height );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	effect.setSize( window.innerWidth, window.innerHeight );

}

function onDocumentMouseMove( event ) {

	mouseX = ( event.clientX - windowHalfX ) / 100;
	mouseY = ( event.clientY - windowHalfY ) / 100;

}

//

function animate() {

	requestAnimationFrame( animate );

	render();

}

function render() {

	const timer = 0.0001 * Date.now();

	camera.position.x += ( mouseX - camera.position.x ) * .05;
	camera.position.y += ( - mouseY - camera.position.y ) * .05;

	camera.lookAt( scene.position );

	for ( let i = 0, il = spheres.length; i < il; i ++ ) {

		const sphere = spheres[ i ];

		sphere.position.x = 5 * Math.cos( timer + i );
		sphere.position.y = 5 * Math.sin( timer + i * 1.1 );

	}

	effect.render( scene, camera );

}
