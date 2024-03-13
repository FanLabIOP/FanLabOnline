<template>
  <div class="about-container">
    <aside>
      <h1>SAPI<span class="add"> (project started in 1985)</span></h1>
      <p>The name SAPI is an abbreviation of "Structure Analysis Programs with Intelligent control". It may also be read inversely as "Institute of Physics, Academia Sinica". SAPI is written in Fortran for crystallographic calculations and C++ for graphic operations. SAPI is based on MULTAN and differs from it mainly by the ability of resolving phase ambiguities due to pseudo symmetry.</p>
      <ul type="disc">
        <li>Operating systems: Windows95, 98, NT, 2000 and XP</li>
        <li>Features:</li>
        <ul type="circle">
          <li>The program can automatically detect and handle diffraction data having
            pseudo-translational symmetry and lead directly to the superstructure without relying
            on an assumed structure model.</li>
          <li>The program can recognize pseudo-centrosymmetric solutions when dealing with
            non-centrosymmetric structures. In addition, the program can break the enantiomorphous
            ambiguity given the "atomic positions" of both enantiomorphs.</li>
          <li>The program can tune automatically some controlling parameters
            according to the feature of the input data.</li>
          <li>The program enables combination of Patterson and direct methods. Besides, subroutines
            are provided for automatic Patterson analysis of heavy-atom containing structures.</li>
          <li>Sophisticated graphic interface is provided for data preparation, program control and
            for displaying and manipulating output results.</li>
        </ul>
        <li><a href="http://cryst.iphy.ac.cn/Project/program/SAPI.HLP">Tutorials (<i>WinHelp</i>)</a></li>
        <li><a href="http://cryst.iphy.ac.cn/Project/pseudo-symmetry/results.html" target="_blank">History</a></li>
        <li>Download from <a href="https://github.com/FanLabIOP" target="_blank">Github</a> or <a href="https://gitee.com/FanLabIOP" target="_blank">Gitee</a></li>
      </ul>
      <h2>REFERENCES</h2>
      <ul>
        <li><p>Q. Hao, Y. X. Gu, J. X. Yao, C. D. Zheng and H. F. Fan (2003) <em>J.
          Appl. Cryst.</em> <strong>36</strong> 1274-1276. “SAPI: a direct-methods program for finding heavy-atom sites with SAD or SIR data.”</p></li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'About'
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
