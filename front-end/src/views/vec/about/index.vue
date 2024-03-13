<template>
  <div class="about-container">
    <aside>
      <h1>VEC<span class="add"> (project started in 1994)</span></h1>
      <p>A program package for visual computing in electron crystallography. The program is written in C++ and Fortran.</p>
      <ul type="disc">
        <li>Operating systems: Windows95, 98, NT, 2000 and XP</li>
        <li>Functions & Features:</li>
        <ul type="circle">
          <li>Preliminary processing of electron microscopy images</li>
          <li>Indexing and diffraction-intensity extracting of electron diffraction patterns</li>
          <li>Direct-method deconvolution of a single electron microscopy image</li>
          <li>Resolution enhancement of electron microscopy images using direct methods</li>
          <li>Simulation of dynamical/kinematical electron diffraction patterns and electron microscopy
            images for conventional and modulated crystals</li>
          <li>2-, 3- and 4-dimensional FFT</li>
          <li>2-dimensional half-tone-graph display of 2-, 3- and 4-dimensional Fourier maps</li>
          <li>Contour mapping of 2-dimensional patterns</li>
          <li>Ab-initio direct-method solution of incommensurate one-dimensionally modulated structures
            and composite structures of two subsystems</li>
        </ul>
        <li><a href="http://cryst.iphy.ac.cn/VEC/Tutorials/MAIN.html" target="_blank">Tutorials</a></li>
        <li><a href="http://cryst.iphy.ac.cn/Publication/PDF_files/2003/VEC.pdf" target="_blank">Applications</a></li>
        <li>Download from <a href="https://github.com/FanLabIOP" target="_blank" @click="handleClick('vec')">Github</a> or <a href="https://gitee.com/FanLabIOP" target="_blank" @click="handleClick('vec')">Gitee</a></li>
      </ul>
      <h2>REFERENCES</h2>
      <ul>
        <li>Wan, Z., Liu, Y., Fu, Z., Li, Y., Cheng, T., Li, F. and Fan, H.. "Visual computing in electron crystallography" Zeitschrift für Kristallographie - Crystalline Materials, vol. 218, no. 4, 2003, pp. 308-315. https://doi.org/10.1524/zkri.218.4.308.20739</li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { addCount } from '@/api/home'

export default {
  name: 'About',
  methods: {
    handleClick(name) {
      addCount({ name })
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  &-container {
    margin: 30px;
  }
}
.add {
  font-size: 20px;
  font-weight: normal;
}
p {
  text-indent: 2em;
}
</style>
