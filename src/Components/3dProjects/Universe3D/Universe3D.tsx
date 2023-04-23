import './styles.css'
import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import background from './media/space.jpeg'

import sunImage from './media/sun.jpeg'
import mercuryImage from './media/mercury.jpeg'
import venusImage from './media/venus.jpeg'
import earthImage from './media/earthImage.jpeg'
import moonImage from './media/moon.jpeg'
import moonTextureImage from './media/normal.jpeg'
import marsImage from './media/mars.jpeg'
import jupiterImage from './media/jupiter.jpeg'
import saturnImage from './media/saturn.jpeg'
import saturnRingImage from './media/saturnRing.png'
import uranusImage from './media/uranus.jpeg'
import uranusRingImage from './media/uranusRing.png'
import neptuneImage from './media/neptune.jpeg'
import plutoImage from './media/pluto.jpeg'

// import Astronaut from './media/astronaut/Astronaut'

function Universe3D() {
  useEffect(() => {
    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Camera <<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    // camera tracks and initial position
    const cameraOffset = new THREE.Vector3(-0.5, 4, 9)
    const cameraTrack = new THREE.CubicBezierCurve3(new THREE.Vector3(0, 10, 100), new THREE.Vector3(-20, 0, 100), new THREE.Vector3(15, 0, 80), new THREE.Vector3(-5, -1, 0))

    // show tracks
    // const points = cameraTrack.getPoints(50)
    // const lineGeo = new THREE.BufferGeometry().setFromPoints(points)
    // const lineMat = new THREE.LineBasicMaterial({ color: 0x00ffff })
    // const line = new THREE.Line(lineGeo, lineMat)
    // scene.add(line)

    // create camera
    const fov = 45
    const aspect = window.innerWidth / window.innerHeight
    const near = 0.1
    const far = 1000
    const perspectiveCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    const camera = perspectiveCamera
    camera.position.set(-90, 140, 140);
    // camera.position.set(0, 15, 95).add(cameraOffset)
    scene.add(perspectiveCamera)

    // const cameraTargetGeometry = new THREE.SphereGeometry(1, 24, 24)
    // const cameraTargetImage = new THREE.TextureLoader().load(dots)
    // const cameraTarget = new THREE.Mesh(cameraTargetGeometry, new THREE.MeshBasicMaterial({ map: cameraTargetImage, transparent: true }))

    // const cameraTargetOuterGeometry = new THREE.SphereGeometry(1.5, 24, 24)
    // const cameraTargetOuter = new THREE.Mesh(cameraTargetOuterGeometry, new THREE.MeshBasicMaterial({ map: cameraTargetImage, transparent: true }))

    // cameraTarget.position.set(0, 15, 95)
    // cameraTargetOuter.position.set(0, 15, 95)
    // scene.add(cameraTarget,cameraTargetOuter)

    // const cameraHelperGeometry = new THREE.SphereGeometry(2, 24, 24)
    // const cameraHelperImage = new THREE.MeshStandardMaterial({ color: 0xff6347 })
    // const cameraHelper = new THREE.Mesh(cameraHelperGeometry, cameraHelperImage)
    // cameraHelper.position.set(0, 15, 95).add(cameraOffset)
    // scene.add(cameraHelper)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Lights <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const pointLight = new THREE.PointLight(0xffffff, 2, 300)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    // scene.add(pointLight)
    pointLight.position.set(0, 0, 0)
    scene.add(pointLight, ambientLight)
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> helper tools <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const lightHelper = new THREE.PointLightHelper(pointLight)
    // const gridHelper = new THREE.GridHelper(200, 50)
    const controls = new OrbitControls(camera, renderer.domElement)

    // scene.add(lightHelper, gridHelper)
    scene.add(lightHelper)
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Scenery <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const spaceTexture = new THREE.TextureLoader().load(background)
    scene.background = spaceTexture

    function addStar() {
      const starGeometry = new THREE.SphereGeometry(THREE.MathUtils.randFloatSpread(0.2), 24, 24)
      const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffffaf, transparent: true })
      const star = new THREE.Mesh(starGeometry, starMaterial)
      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100))
      star.position.set(x, y, z)
      scene.add(star)
    }
    Array(500).fill().forEach(addStar)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Objects <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const sunGeo = new THREE.SphereGeometry(16, 30, 30)
    const sunSurface = new THREE.TextureLoader().load(sunImage)
    const sunMat = new THREE.MeshBasicMaterial({ map: sunSurface })
    const sun = new THREE.Mesh(sunGeo, sunMat)
    scene.add(sun)

    function createPlanet(size, texture, position, ring) {
      // create planet
      const geo = new THREE.SphereGeometry(size, 30, 30)
      const surfaceImage = new THREE.TextureLoader().load(texture)
      const mat = new THREE.MeshStandardMaterial({ map: surfaceImage })
      const mesh = new THREE.Mesh(geo, mat)

      const obj = new THREE.Object3D()
      obj.add(mesh)

      if (ring) {
        const ringGeo = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 32)
        const ringSurface = new THREE.TextureLoader().load(ring.texture)
        const ringMat = new THREE.MeshBasicMaterial({
          map: ringSurface,
          side: THREE.DoubleSide,
        })
        const ringMesh = new THREE.Mesh(ringGeo, ringMat)
        obj.add(ringMesh)
        ringMesh.position.x = position
        ringMesh.rotation.x = -0.5 * Math.PI
      }

      // >>>>>>>>>>>>>  create orbit
      const orbitGeometry = new THREE.RingGeometry(position, position + .04, 62)
      orbitGeometry.rotateX(1.5)
      const orbitMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide })
      const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial)
      sun.add(orbit)
      console.log('orbit', orbit)

      scene.add(obj)
      mesh.position.x = position
      return { mesh, obj }
    }
    const mercury = createPlanet(3.2, mercuryImage, 28)
    const venus = createPlanet(5.8, venusImage, 44)
    const earth = createPlanet(6, earthImage, 62)
    const mars = createPlanet(4, marsImage, 78)
    const jupiter = createPlanet(12, jupiterImage, 100)
    const saturn = createPlanet(10, saturnImage, 138, {
      innerRadius: 10,
      outerRadius: 20,
      texture: saturnRingImage,
    })
    const uranus = createPlanet(7, uranusImage, 176, {
      innerRadius: 7,
      outerRadius: 12,
      texture: uranusRingImage,
    })
    const neptune = createPlanet(7, neptuneImage, 200)
    const pluto = createPlanet(2.8, plutoImage, 216)

    const moonGeometry = new THREE.SphereGeometry(0.5, 64, 32)
    const moonSurfaceImage = new THREE.TextureLoader().load(moonImage)
    const moonTexture = new THREE.TextureLoader().load(moonTextureImage)
    const moonSurface = new THREE.MeshStandardMaterial({ map: moonSurfaceImage, normalMap: moonTexture })
    const moon = new THREE.Mesh(moonGeometry, moonSurface)
    moon.position.setX(2.8)

    // const dustPlanetGeometry = new THREE.SphereGeometry(5, 24, 24)
    // const dustPlanetImage = new THREE.TextureLoader().load(dots)
    // const dustPlanet = new THREE.Mesh(dustPlanetGeometry, new THREE.MeshBasicMaterial({ map: dustPlanetImage, transparent: true }))
    // dustPlanet.position.setX(20)
    // dustPlanet.position.setZ(40)
    // scene.add(dustPlanet)

    // function addRing() {
    //   ringGeometry.rotateY(2)
    //   ringGeometry.rotateX(2)
    // const ringGeometry = new THREE.RingGeometry(6.1, 6, 200)
    //   const ringMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide })
    //   const ring = new THREE.Mesh(ringGeometry, ringMaterial)
    //   const [x, y, z] = Array(3)
    //   .fill()
    //   .map(() => THREE.MathUtils.randFloatSpread(100))
    //   ring.position.set(x, y, z)
    //   scene.add(ring)
    // }
    // Array(10).fill().forEach(addRing)

    // const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
    // const material = new THREE.MeshStandardMaterial({ color: 0xff6347 })
    // const torus = new THREE.Mesh(geometry, material)
    // scene.add(torus)

    // >>>>>>>>>>>>>>>>>>>>>>>>> To Render and Animate <<<<<<<<<<<<<<<<<<<<
    function animate() {
      requestAnimationFrame(animate)
      // sun.rotateY(0.004)
      mercury.mesh.rotateY(0.004)
      venus.mesh.rotateY(0.002)
      earth.mesh.rotateY(0.02)
      mars.mesh.rotateY(0.018)
      jupiter.mesh.rotateY(0.04)
      saturn.mesh.rotateY(0.038)
      uranus.mesh.rotateY(0.03)
      neptune.mesh.rotateY(0.032)
      pluto.mesh.rotateY(0.008)

      mercury.obj.rotateY(0.04)
      venus.obj.rotateY(0.015)
      earth.obj.rotateY(0.01)
      mars.obj.rotateY(0.008)
      jupiter.obj.rotateY(0.002)
      saturn.obj.rotateY(0.0009)
      uranus.obj.rotateY(0.0004)
      neptune.obj.rotateY(0.0001)
      pluto.obj.rotateY(0.00007)

      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    function moveCamera() {
      const t = window.pageYOffset
      // const t = document.body.getBoundingClientRect().top
      // cameraTarget.rotation.y += 0.02

      // cameraTargetOuter.rotation.z += 0.02
      // cameraTargetOuter.rotation.x += 0.02

      const cameraPos = cameraTrack.getPoint(t * 0.00038)

      // cameraTarget.position.set(cameraPos.x, cameraPos.y, cameraPos.z)
      // cameraTargetOuter.position.set(cameraPos.x, cameraPos.y, cameraPos.z)
      // cameraHelper.position.set(cameraPos.x, cameraPos.y, cameraPos.z).add(cameraOffset)

      camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z).add(cameraOffset)
    }
    document.body.onscroll = moveCamera

    // // >>>>>>> Menu Animation
    // let sectionSpace = document.querySelectorAll('.sectionSpace')

    // const sectionObserver = new IntersectionObserver(
    //   entries => {
    //     entries.forEach(entry => {
    //       entry.target.classList.toggle('sectionAnimationOpacity', entry.isIntersecting)
    //       // if (entry.isIntersecting) sectionObserver.unobserve(entry.target)
    //     })
    //   },
    //   {
    //     threshold: 0.8,
    //     // rootMargin: '30%',
    //   }
    // )

    // sectionSpace.forEach(card => {
    //   sectionObserver.observe(card)
    // })
    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }, [])

  return (
    <div id='universe3D-wrapper'>
      <canvas id='bg'>{/* <Astronaut/> */}</canvas>
      {/* <div className='space-scroll-content'>
        <section>
          <p>Section 1</p>
        </section>
        <section className='sectionSpace'>
          <p>Section 2</p>
        </section>
        <section>
          <p>Section 3</p>
        </section>
        <section className='sectionSpace'>
          <p>Section 4</p>
        </section>
      </div> */}
    </div>
  )
}

export default Universe3D
