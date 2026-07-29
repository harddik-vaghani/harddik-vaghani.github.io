/* ==========================================================================
   HARDIK VAGHANI — 3D SYSTEM ARCHITECTURE ENGINE (THREE.JS PROFESSIONAL)
   Interactive 3D Isometric Glass Layer Stack & Executive Architectural View
   ========================================================================== */

(function () {
    'use strict';

    // Architectural Layer Data
    const LAYER_DATA = [
        {
            id: 'ai-engine',
            layerNum: 'LAYER 01',
            badge: '01 // AI & LLM AGENT ARCHITECTURE',
            title: 'Autonomous AI & RAG Orchestration',
            subtitle: 'Enterprise AI workflows, vector retrieval, and intelligent agents.',
            color: 0xff3b00,
            hex: '#FF3B00',
            description: `Architecting autonomous AI agent platforms with production-grade RAG retrieval pipelines. Leveraging LangChain, Qdrant vector databases, and custom FastAPI tool execution to build self-correcting AI workflows.`,
            stack: ['Python', 'LangChain', 'FastAPI', 'Qdrant Vector DB', 'OpenAI API'],
            metrics: { primary: '50k+', primaryLabel: 'Monthly AI Requests', secondary: '< 350ms', secondaryLabel: 'Vector Retrieval Latency' },
            posY: 1.6
        },
        {
            id: 'fullstack-web',
            layerNum: 'LAYER 02',
            badge: '02 // FULL STACK WEB ENGINEERING',
            title: 'High-Performance Web Applications',
            subtitle: 'Sub-second page loads, real-time metrics, and robust API microservices.',
            color: 0x18181a,
            hex: '#18181A',
            description: `Designing modern Next.js/React frontends backed by asynchronous Python & Node.js backend microservices. Focused on clean state management, modular component design, and sub-500ms API response SLA.`,
            stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Tailwind', 'REST/GraphQL'],
            metrics: { primary: '99.9%', primaryLabel: 'Uptime Reliability', secondary: 'Sub-500ms', secondaryLabel: 'Global API Latency' },
            posY: 0.5
        },
        {
            id: 'mobile-engineering',
            layerNum: 'LAYER 03',
            badge: '03 // MOBILE & CROSS-PLATFORM',
            title: 'Native & Flutter Mobile Ecosystems',
            subtitle: '60fps native performance, biometric security, and offline DB sync.',
            color: 0x22c55e,
            hex: '#22C55E',
            description: `Engineered production cross-platform mobile apps with Flutter & native Android. Built secure mobile wallets, encrypted local SQLite storage, and smooth 60fps gesture navigation for over 150k active users.`,
            stack: ['Flutter', 'Dart', 'Android Native', 'SQLite Sync', 'Biometrics API'],
            metrics: { primary: '150k+', primaryLabel: 'Total Mobile Downloads', secondary: '4.8 ★', secondaryLabel: 'User Experience Score' },
            posY: -0.6
        },
        {
            id: 'cloud-infra',
            layerNum: 'LAYER 04',
            badge: '04 // CLOUD INFRASTRUCTURE & DEVOPS',
            title: 'Containerized Cloud & Database Architecture',
            subtitle: 'PostgreSQL, Redis caching, Docker container orchestration, and AWS.',
            color: 0x0066ff,
            hex: '#0066FF',
            description: `Building scalable multi-tenant database schemas with PostgreSQL, Redis in-memory caching, Docker containerization, and automated GitHub Actions CI/CD pipelines deployed to AWS cloud infrastructure.`,
            stack: ['PostgreSQL', 'Redis', 'Docker', 'AWS EC2/S3', 'CI/CD Pipelines'],
            metrics: { primary: '100%', primaryLabel: 'Automated CI/CD', secondary: 'Multi-Tenant', secondaryLabel: 'Data Isolation' },
            posY: -1.7
        }
    ];

    let scene, camera, renderer, container;
    let stackGroup, particleGroup;
    let pointLight, dirLight;
    const layerMeshes = [];

    let raycaster, mouse;
    let hoveredLayer = null;
    let activeLayerId = 'ai-engine';

    let mouseParallax = { x: 0, y: 0 };
    let clock = new THREE.Clock();

    function init() {
        container = document.getElementById('about-3d-stage');
        if (!container || typeof THREE === 'undefined') return;

        // 1. Scene Setup
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0xf5f1e8, 0.02);

        const width = container.clientWidth || 600;
        const height = container.clientHeight || 520;

        // 2. Camera Setup (Isometric Angle)
        camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
        camera.position.set(5.5, 4.2, 7.5);
        camera.lookAt(0, 0, 0);

        // 3. WebGL Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.15;

        container.appendChild(renderer.domElement);

        raycaster = new THREE.Raycaster();
        mouse = new THREE.Vector2(-999, -999);

        // 4. Lighting for Glass Slabs
        const ambientLight = new THREE.AmbientLight(0xffffff, 1.6);
        scene.add(ambientLight);

        dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
        dirLight.position.set(8, 14, 10);
        scene.add(dirLight);

        pointLight = new THREE.PointLight(0xff3b00, 2.5, 15);
        pointLight.position.set(-4, 3, 5);
        scene.add(pointLight);

        // 5. Build 3D Architecture Stack
        createArchitectureStack();
        createDataStreamParticles();

        // 6. Event Listeners
        window.addEventListener('resize', onWindowResize);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('click', onClick);

        initUIControls();
        setActiveLayer('ai-engine');

        // 7. Render Loop
        animate();
    }

    /* --------------------------------------------------------------------------
       Create 3D Isometric Glass Slabs (System Architecture Layers)
       -------------------------------------------------------------------------- */
    function createArchitectureStack() {
        stackGroup = new THREE.Group();

        LAYER_DATA.forEach((data) => {
            const layerGroup = new THREE.Group();
            layerGroup.position.set(0, data.posY, 0);
            layerGroup.userData = data;

            // Translucent Glass Slab
            const slabGeo = new THREE.BoxGeometry(4.2, 0.14, 2.8);
            const slabMat = new THREE.MeshStandardMaterial({
                color: 0xffffff,
                roughness: 0.1,
                metalness: 0.2,
                transparent: true,
                opacity: 0.75,
                emissive: data.color,
                emissiveIntensity: 0.08
            });
            const slabMesh = new THREE.Mesh(slabGeo, slabMat);
            slabMesh.name = `layer-${data.id}`;
            slabMesh.userData = data;
            layerGroup.add(slabMesh);

            // Wireframe Accent Edges
            const edgeGeo = new THREE.EdgesGeometry(slabGeo);
            const edgeMat = new THREE.LineBasicMaterial({
                color: data.color,
                linewidth: 2,
                transparent: true,
                opacity: 0.8
            });
            const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
            layerGroup.add(edgeLines);

            // Corner Node Dots on the Glass Slab
            const cornerPositions = [
                { x: -2.0, z: -1.3 },
                { x: 2.0, z: -1.3 },
                { x: -2.0, z: 1.3 },
                { x: 2.0, z: 1.3 }
            ];

            cornerPositions.forEach((pos) => {
                const dotGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.18, 16);
                const dotMat = new THREE.MeshBasicMaterial({ color: data.color });
                const dotMesh = new THREE.Mesh(dotGeo, dotMat);
                dotMesh.position.set(pos.x, 0.08, pos.z);
                layerGroup.add(dotMesh);
            });

            layerMeshes.push(slabMesh);
            stackGroup.add(layerGroup);
        });

        // Add 4 Vertical Inter-Layer Connection Pillars
        const pillarPositions = [
            { x: -1.8, z: -1.1 },
            { x: 1.8, z: -1.1 },
            { x: -1.8, z: 1.1 },
            { x: 1.8, z: 1.1 }
        ];

        pillarPositions.forEach((pos) => {
            const pillarGeo = new THREE.CylinderGeometry(0.025, 0.025, 3.8, 16);
            const pillarMat = new THREE.MeshBasicMaterial({
                color: 0xaaaaaa,
                transparent: true,
                opacity: 0.35
            });
            const pillar = new THREE.Mesh(pillarGeo, pillarMat);
            pillar.position.set(pos.x, -0.05, pos.z);
            stackGroup.add(pillar);
        });

        scene.add(stackGroup);
    }

    /* --------------------------------------------------------------------------
       Create Data Stream Particles (Subtle Glowing Tech Data Flow)
       -------------------------------------------------------------------------- */
    function createDataStreamParticles() {
        const particleCount = 180;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const c1 = new THREE.Color(0xff3b00);
        const c2 = new THREE.Color(0x0066ff);
        const c3 = new THREE.Color(0x22c55e);

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 4.5;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 4.2;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 3.2;

            const col = Math.random() > 0.6 ? c1 : Math.random() > 0.5 ? c2 : c3;
            colors[i * 3] = col.r;
            colors[i * 3 + 1] = col.g;
            colors[i * 3 + 2] = col.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.05,
            vertexColors: true,
            transparent: true,
            opacity: 0.6
        });

        particleGroup = new THREE.Points(geometry, material);
        scene.add(particleGroup);
    }

    /* --------------------------------------------------------------------------
       Mouse Raycasting & Interactive Hovering
       -------------------------------------------------------------------------- */
    function onMouseMove(e) {
        const rect = container.getBoundingClientRect();
        mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        mouseParallax.x = mouse.x * 0.4;
        mouseParallax.y = mouse.y * 0.3;

        checkRaycast();
    }

    function checkRaycast() {
        if (!raycaster || !camera) return;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(layerMeshes);

        if (intersects.length > 0) {
            const hitMesh = intersects[0].object;
            if (hoveredLayer !== hitMesh) {
                if (hoveredLayer) resetLayerStyle(hoveredLayer);
                hoveredLayer = hitMesh;
                container.style.cursor = 'pointer';

                // Elevate & glow hovered layer
                hitMesh.parent.position.x = 0.15;
                hitMesh.material.emissiveIntensity = 0.35;
                hitMesh.material.opacity = 0.95;
            }
        } else {
            if (hoveredLayer) {
                resetLayerStyle(hoveredLayer);
                hoveredLayer = null;
                container.style.cursor = 'default';
            }
        }
    }

    function resetLayerStyle(mesh) {
        if (mesh && mesh.parent) {
            const isSelected = mesh.userData.id === activeLayerId;
            mesh.parent.position.x = isSelected ? 0.25 : 0;
            mesh.material.emissiveIntensity = isSelected ? 0.3 : 0.08;
            mesh.material.opacity = isSelected ? 0.95 : 0.75;
        }
    }

    function onClick() {
        checkRaycast();
        if (hoveredLayer && hoveredLayer.userData && hoveredLayer.userData.id) {
            setActiveLayer(hoveredLayer.userData.id);
        }
    }

    /* --------------------------------------------------------------------------
       Set Active Layer & Update Executive UI Panel
       -------------------------------------------------------------------------- */
    function setActiveLayer(layerId) {
        activeLayerId = layerId;
        const data = LAYER_DATA.find((l) => l.id === layerId);
        if (!data) return;

        // Reset mesh offsets
        layerMeshes.forEach((mesh) => {
            const isSelected = mesh.userData.id === layerId;
            mesh.parent.position.x = isSelected ? 0.25 : 0;
            mesh.material.emissiveIntensity = isSelected ? 0.3 : 0.08;
            mesh.material.opacity = isSelected ? 0.95 : 0.75;
        });

        // Update UI Button active states
        const btns = document.querySelectorAll('.arch-layer-btn');
        btns.forEach((btn) => {
            if (btn.dataset.layer === layerId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update Executive Detail Panel
        updateExecutiveCardUI(data);
    }

    /* --------------------------------------------------------------------------
       Update Executive Narrative Panel
       -------------------------------------------------------------------------- */
    function updateExecutiveCardUI(data) {
        const cardContainer = document.getElementById('about-3d-card');
        if (!cardContainer) return;

        cardContainer.classList.add('fade-out');

        setTimeout(() => {
            const badgeEl = cardContainer.querySelector('.about-card-badge');
            const titleEl = cardContainer.querySelector('.about-card-title');
            const subEl = cardContainer.querySelector('.about-card-subtitle');
            const descEl = cardContainer.querySelector('.about-card-desc');
            const tagsEl = cardContainer.querySelector('.about-card-tags');

            const statVal1 = cardContainer.querySelector('.stat-val-1');
            const statLbl1 = cardContainer.querySelector('.stat-lbl-1');
            const statVal2 = cardContainer.querySelector('.stat-val-2');
            const statLbl2 = cardContainer.querySelector('.stat-lbl-2');

            if (badgeEl) {
                badgeEl.textContent = data.badge;
                badgeEl.style.color = data.hex;
            }
            if (titleEl) titleEl.textContent = data.title;
            if (subEl) subEl.textContent = data.subtitle;
            if (descEl) descEl.textContent = data.description;

            if (tagsEl) {
                tagsEl.innerHTML = data.stack
                    .map((tech) => `<span class="about-tag" style="border-color:${data.hex}44">${tech}</span>`)
                    .join('');
            }

            if (statVal1 && data.metrics) statVal1.textContent = data.metrics.primary;
            if (statLbl1 && data.metrics) statLbl1.textContent = data.metrics.primaryLabel;
            if (statVal2 && data.metrics) statVal2.textContent = data.metrics.secondary;
            if (statLbl2 && data.metrics) statLbl2.textContent = data.metrics.secondaryLabel;

            cardContainer.classList.remove('fade-out');
        }, 180);
    }

    /* --------------------------------------------------------------------------
       Bind UI Button Events
       -------------------------------------------------------------------------- */
    function initUIControls() {
        const btns = document.querySelectorAll('.arch-layer-btn');
        btns.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                const layerId = e.currentTarget.dataset.layer;
                setActiveLayer(layerId);
            });
        });
    }

    function onWindowResize() {
        if (!container || !renderer || !camera) return;
        const width = container.clientWidth;
        const height = container.clientHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    /* --------------------------------------------------------------------------
       Render Loop & Smooth Isometric Tilt
       -------------------------------------------------------------------------- */
    function animate() {
        requestAnimationFrame(animate);

        const elapsedTime = clock.getElapsedTime();

        // Smooth 3D Isometric Parallax Tilt
        if (stackGroup) {
            stackGroup.rotation.y = Math.sin(elapsedTime * 0.2) * 0.08 + mouseParallax.x * 0.25;
            stackGroup.rotation.x = Math.cos(elapsedTime * 0.15) * 0.04 + mouseParallax.y * 0.15;
        }

        // Slow data stream particle drift
        if (particleGroup) {
            particleGroup.rotation.y = elapsedTime * 0.05;
        }

        renderer.render(scene, camera);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
