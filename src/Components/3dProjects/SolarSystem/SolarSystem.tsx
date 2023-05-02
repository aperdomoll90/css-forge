import './styles.css'
import { useEffect } from 'react'
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import background from './media/space.jpeg'

import sunImage from './media/sun.jpeg'
import mercuryImage from './media/mercury.jpeg'
import venusImage from './media/venus.jpeg'
import earthImage from './media/earthImage.jpeg'
import marsImage from './media/mars.jpeg'
import jupiterImage from './media/jupiter.jpeg'
import saturnImage from './media/saturn.jpeg'
import saturnRingImage from './media/saturnRing.png'
import uranusImage from './media/uranus.jpeg'
import uranusRingImage from './media/uranusRing.png'
import neptuneImage from './media/neptune.jpeg'
import plutoImage from './media/pluto.jpeg'

import moonImage from './media/moon.jpeg'
import ioImage from './media/io.jpeg'
import europaImage from './media/europa.jpeg'
import ganymedeImage from './media/ganymede.jpeg'
import callistoImage from './media/callisto.jpeg'

import titanImage from './media/titan.jpeg'

// import Astronaut from './media/astronaut/Astronaut'
function SolarSystem() {
  useEffect(() => {
    const scene = new THREE.Scene()
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#bg'),
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Lights <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const pointLight = new THREE.PointLight(0xffffff, 2, 320)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    pointLight.castShadow = true
    pointLight.position.set(0, 0, 0)
    scene.add(pointLight, ambientLight)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Camera <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const fov = 45
    const aspect = window.innerWidth / window.innerHeight
    const near = 0.1
    const far = 1000
    const perspectiveCamera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    const camera = perspectiveCamera
    camera.position.set(650, 940, 650)
    scene.add(camera)

    // const cameraTrack = new THREE.CubicBezierCurve3(new THREE.Vector3(650, 940, 650), new THREE.Vector3(-450, 140, 440))

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> helper tools <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    // const controls = new OrbitControls(camera, renderer.domElement)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Scenery <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const spaceTexture = new THREE.TextureLoader().load(background)
    scene.background = spaceTexture

    function addStar() {
      const starGeometry = new THREE.SphereGeometry(THREE.MathUtils.randFloatSpread(0.2), 24, 24)
      const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffffaf, transparent: true })
      const star = new THREE.Mesh(starGeometry, starMaterial)
      const [x, y, z] = Array(3)
        .fill(undefined)
        .map(() => THREE.MathUtils.randFloatSpread(100))
      star.position.set(x, y, z)
      scene.add(star)
    }
    Array(500).fill(undefined).forEach(addStar)

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Objects <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

    const sunGeo = new THREE.SphereGeometry(16, 30, 30)
    const sunSurface = new THREE.TextureLoader().load(sunImage)
    const sunMat = new THREE.MeshBasicMaterial({ map: sunSurface })
    const sun = new THREE.Mesh(sunGeo, sunMat)
    scene.add(sun)

    function addAsteroidsField(location: number, spread: number) {
      const asteroidGeometry = new THREE.SphereGeometry(THREE.MathUtils.randFloatSpread(1.2), 24, 24)
      const asteroidMaterial = new THREE.MeshStandardMaterial({ color: 0x838579 })
      const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial)
      const [x, y, z] = Array(3)
        .fill(undefined)
        .map(() => THREE.MathUtils.randFloatSpread(spread))
      asteroid.position.set(x + location, y, z)

      const orbit = new THREE.Object3D()
      orbit.add(asteroid)
      orbit.rotation.y = THREE.MathUtils.randFloatSpread(30)
      scene.add(orbit)
    }

    interface createPlanetPropsTypes {
      size: number,
      texture: any,
      position: number,
      ring: any,
    }

    function createPlanet(size: number, texture:any, position: number, ring?:any) {
      // create planet
      const geo = new THREE.SphereGeometry(size, 30, 30)
      const surfaceImage = new THREE.TextureLoader().load(texture)
      const mat = new THREE.MeshStandardMaterial({ map: surfaceImage })
      const planet = new THREE.Mesh(geo, mat)

      const orbit = new THREE.Object3D()
      orbit.add(planet)

      if (ring) {
        const ringGeo = new THREE.RingGeometry(ring.innerRadius, ring.outerRadius, 32)
        const ringSurface = new THREE.TextureLoader().load(ring.texture)
        const ringMat = new THREE.MeshBasicMaterial({
          map: ringSurface,
          side: THREE.DoubleSide,
        })
        const ringMesh = new THREE.Mesh(ringGeo, ringMat)
        orbit.add(ringMesh)
        ringMesh.position.x = position
        ringMesh.rotation.x = -0.5 * Math.PI
      }

      scene.add(orbit)
      planet.position.x = position
      return { planet, orbit }
    }

    const createMoon = (parent:any, size:number, surface:any, position:any, offsetX:number) => {
      const moonGeo = new THREE.SphereGeometry(size, 64, 32)
      const moonSurface = new THREE.TextureLoader().load(surface)
      const moonMesh = new THREE.MeshStandardMaterial({ map: moonSurface })
      const moon = new THREE.Mesh(moonGeo, moonMesh)
      const orbit = new THREE.Object3D(parent.planet.position)
      orbit.add(moon)
      parent.planet.add(orbit)
      orbit.rotation.y = THREE.MathUtils.randInt(1, 8)
      moon.position.setX(position)
      moon.position.setY(offsetX)
      return { moon, orbit }
    }

    // >>>>>>>>>>>>>> Planets
    const mercury = createPlanet(3.2, mercuryImage, 28)
    const venus = createPlanet(5.8, venusImage, 44)
    const earth = createPlanet(6, earthImage, 62)
    const mars = createPlanet(4, marsImage, 78)
    const jupiter = createPlanet(12, jupiterImage, 123)
    const saturn = createPlanet(10, saturnImage, 165, {
      innerRadius: 10,
      outerRadius: 20,
      texture: saturnRingImage,
    })
    const uranus = createPlanet(7, uranusImage, 199, {
      innerRadius: 7,
      outerRadius: 12,
      texture: uranusRingImage,
    })
    const neptune = createPlanet(7, neptuneImage, 230)
    const pluto = createPlanet(2.8, plutoImage, 246)

    // >>>>>>>>>>>>>>>>>>>>>>> Moons

    // Earth moons
    const moon = createMoon(earth, 1.2, moonImage, 8, 0)

    // Jupiter moons
    const Io = createMoon(jupiter, 1.4, ioImage, 14, 0)
    const Europa = createMoon(jupiter, 1.2, europaImage, 15, -2)
    const Ganymede = createMoon(jupiter, 1.9, ganymedeImage, 14.5, -4)
    const Callisto = createMoon(jupiter, 1.7, callistoImage, 15, 2)

    // Saturn moons
    const Titan = createMoon(saturn, 4, titanImage, 18, 0)
    const Dione = createMoon(saturn, 1.2, europaImage, 15, 2)
    const Enceladus = createMoon(saturn, 1.9, ganymedeImage, 14.5, 4)
    const Hyperion = createMoon(saturn, 1.7, callistoImage, 15, 6)
    const Iapetus = createMoon(saturn, 1.4, ioImage, 14, -6)
    const Mimas = createMoon(saturn, 1.2, europaImage, 15, -3)
    const Rhea = createMoon(saturn, 1.9, ganymedeImage, 14.5, -5)
    const Tethys = createMoon(saturn, 1.7, callistoImage, 15, 8)

    // Uranus moons

    const uranusMoons = () => {
      createMoon(uranus, THREE.MathUtils.randFloatSpread(2), titanImage, THREE.MathUtils.randInt(8, 10), THREE.MathUtils.randInt(-6, 6))
    }
    Array(14).fill(undefined).forEach(uranusMoons)

    // Neptune moons

    const neptuneMoons = () => {
      createMoon(neptune, THREE.MathUtils.randFloatSpread(2), titanImage, THREE.MathUtils.randInt(8, 10), THREE.MathUtils.randInt(-6, 6))
    }
    Array(14).fill(undefined).forEach(neptuneMoons)
    //  Asteroids
    const innerBelt = () => {
      addAsteroidsField(95, 10)
    }
    const outerBelt = () => {
      addAsteroidsField(256, 20)
    }
    Array(500).fill(undefined).forEach(innerBelt)
    Array(3000).fill(undefined).forEach(outerBelt)

    // >>>>>>>>>>>>>>>>>>>>>>>>> To Render and Animate <<<<<<<<<<<<<<<<<<<<
    function animate() {
      requestAnimationFrame(animate)
      sun.rotateY(0.004)

      mercury.planet.rotateY(0.004)
      venus.planet.rotateY(0.002)
      earth.planet.rotateY(0.02)
      mars.planet.rotateY(0.018)
      jupiter.planet.rotateY(0.004)
      saturn.planet.rotateY(0.038)
      uranus.planet.rotateY(0.03)
      neptune.planet.rotateY(0.032)
      pluto.planet.rotateY(0.008)

      moon.moon.rotateY(0.09)
      Io.moon.rotateY(0.09)
      Europa.moon.rotateY(0.09)
      Ganymede.moon.rotateY(0.09)
      Callisto.moon.rotateY(0.09)

      mercury.orbit.rotateY(0.04)
      venus.orbit.rotateY(0.015)
      earth.orbit.rotateY(0.01)
      mars.orbit.rotateY(0.008)
      jupiter.orbit.rotateY(0.002)
      saturn.orbit.rotateY(0.0009)
      uranus.orbit.rotateY(0.0004)
      neptune.orbit.rotateY(0.0001)
      pluto.orbit.rotateY(0.00007)

      moon.orbit.rotateY(0.009)
      Io.orbit.rotateY(0.003)
      Europa.orbit.rotateY(0.006)
      Ganymede.orbit.rotateY(0.009)
      Callisto.orbit.rotateY(0.01)

      Titan.orbit.rotateY(-0.02)
      Dione.orbit.rotateY(-0.02)
      Enceladus.orbit.rotateY(-0.02)
      Hyperion.orbit.rotateY(-0.02)
      Iapetus.orbit.rotateY(-0.02)
      Mimas.orbit.rotateY(-0.02)
      Rhea.orbit.rotateY(-0.02)
      Tethys.orbit.rotateY(-0.02)

      // controls.enableZoom = false
      // controls.enableDamping = true
      // controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // function moveCamera() {
    //   const t = window.pageYOffset
    //   const cameraPos = cameraTrack.getPoint(t * 0.00055)
    //   camera.position.set(cameraPos.x, cameraPos.y, cameraPos.z)
    //   // controls.target.set(-44.019061742668356, -4.426043710749285, -23.87192455239471)
    //   // camera.rotate.z = t * -0.5
    //   // controls.target.set(-550, 550, 0);
    //   // console.log('controls.target', controls)
    // }
    // document.body.onscroll = moveCamera

    window.addEventListener('resize', function () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }, [])

  return (
    <div id='solarSystem-wrapper'>
      <canvas id='bg'></canvas>
    </div>
  )
}

export default SolarSystem
