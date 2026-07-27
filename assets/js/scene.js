/* ==========================================================================
   HARDIK VAGHANI — CLEAN BACKGROUND SCENE (NO RANDOM PARTICLES)
   ========================================================================== */

(function () {
    'use strict';

    let scene, camera, renderer;

    function initThreeScene() {
        const canvas = document.getElementById('webgl-canvas');
        if (!canvas) return;

        // 1. Create Scene
        scene = new THREE.Scene();

        // 2. Camera Setup
        camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
        camera.position.z = 1000;

        // 3. WebGL Renderer
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // 4. Soft Ambient Lighting
        const lightAmbient = new THREE.AmbientLight(0xffffff, 1.0);
        scene.add(lightAmbient);

        // 5. Listeners
        window.addEventListener('resize', onWindowResize, false);

        // Render clean frame
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        if (!camera || !renderer) return;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThreeScene);
    } else {
        initThreeScene();
    }
})();
