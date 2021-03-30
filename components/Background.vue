<template>
  <div id="background1">
    <canvas class="block h-screen fixed top-0 left-0 w-screen" style="z-index: -9999"/>
  </div>
</template>

<script lang="javascript" type="module">
import {PerspectiveCamera,CubeTextureLoader,Scene,SphereBufferGeometry,MeshBasicMaterial,Mesh,WebGLRenderer} from 'three';
import {AnaglyphEffect} from 'three/examples/jsm/effects/AnaglyphEffect.js';

export default {
  data() {
    return {
      windowHalfX: window.innerWidth / 2,
      windowHalfY: window.innerHeight / 2,
      spheres: [],
      mouseX: 0,
      mouseY: 0,
      container: null,
      camera: null,
      scene: null,
      renderer: null,
      effect: null
    }
  },
  methods: {
    init() {

      this.container = document.createElement('div');
      document.body.insertBefore(this.container, document.body.childNodes[0]);
      document.getElementById('background1').appendChild(this.container);

      this.camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 100);
      this.camera.position.z = 3;
      this.camera.focalLength = 3;

      const path = '/textures/cube/pisa/';
      const format = '.png';
      const urls = [
        path + 'px' + format, path + 'nx' + format,
        path + 'py' + format, path + 'ny' + format,
        path + 'pz' + format, path + 'nz' + format
      ];

      const textureCube = new CubeTextureLoader().load(urls);

      this.scene = new Scene();
      this.scene.background = textureCube;

      const geometry = new SphereBufferGeometry(0.1, 32, 16);
      const material = new MeshBasicMaterial({color: 0xffffff, envMap: textureCube});

      for (let i = 0; i < 100; i++) {

        const mesh = new Mesh(geometry, material);

        mesh.position.x = Math.random() * 10 - 5;
        mesh.position.y = Math.random() * 10 - 5;
        mesh.position.z = Math.random() * 10 - 5;

        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1;

        this.scene.add(mesh);

        this.spheres.push(mesh);

      }


      const canvas = document.querySelector('canvas');
      const renderer = new WebGLRenderer({canvas});
      renderer.setPixelRatio(window.devicePixelRatio);
      this.container.appendChild(renderer.domElement);

      const width = window.innerWidth || 2;
      const height = window.innerHeight || 2;

      this.effect = new AnaglyphEffect(renderer);
      this.effect.setSize(width, height);


      window.addEventListener('resize', this.onWindowResize, false);
    },

    onWindowResize() {

      this.windowHalfX = window.innerWidth / 2;
      this.windowHalfY = window.innerHeight / 2;

      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();

      this.effect.setSize(window.innerWidth, window.innerHeight);

    },

    onDocumentMouseMove(event) {
      this.mouseX = (event.clientX -  this.windowHalfX) / 100;
      this.mouseY = (event.clientY -  this.windowHalfY) / 100;
    },


    animate() {
      requestAnimationFrame(this.animate);
      this.render();
    },

    render() {

      const timer = 0.0001 * Date.now();

      this.camera.position.x += (this.mouseX - this.camera.position.x) * .05;
      this.camera.position.y += (-this.mouseY - this.camera.position.y) * .05;

      this.camera.lookAt(this.scene.position);

      for (let i = 0, il = this.spheres.length; i < il; i++) {

        const sphere = this.spheres[i];

        sphere.position.x = 5 * Math.cos(timer + i);
        sphere.position.y = 5 * Math.sin(timer + i * 1.1);

      }

      this.effect.render(this.scene, this.camera);

    },
  },
  mounted() {
    this.init();
    this.animate();
    document.addEventListener('mousemove', this.onDocumentMouseMove, false);
  }
}
</script>
