<template>
  <div class="about-container">
    <aside>
      <h1>OASIS<span class="add"> (project started in 1988)</span></h1>
      <p>A program of direct-method phasing based on a partial model with or without SAD/SIR information.</p>
      <ul type="disc">
        <li>Operating systems: Linux and MAC OS X</li>
        <li>Features:</li>
        <ul type="circle">
          <li>Direct-method breaking the SAD/SIR phase ambiguity</li>
          <li>Incorporating lack-of-closure error in direct-method phasing</li>
          <li>Incorporating partial-structure information in phase derivation</li>
          <li>Dual-space SAD/SIR phasing and fragment extension by the combination of
            OASIS with density-modification and model-building programs</li>
          <li>Dual-space partial model completion by the
            combination of OASIS with density-modification and model-building
            programs in the absence of SAD/SIR information</li>
          <li>Dual-space phase/fragmant extension</li>
        </ul>
        <li><a href="http://cryst.iphy.ac.cn/Project/program/oasis/oasis-appl.html" target="_blank">Applications</a></li>
        <li>Download from <a href="https://github.com/FanLabIOP" target="_blank">Github</a> or <a href="https://gitee.com/FanLabIOP" target="_blank">Gitee</a></li>
      </ul>
      <h2>REFERENCES</h2>
      <ul>
        <li>Fan, H.F. & Gu, Y.X. (1985). "Combining direct methods with isomorphous replacement or anomalous scattering data III. The incorporation of partial structure information". Acta Cryst. A41, 280-284.</li>
        <li>He, Y., Yao, D.Q., Gu, Y.X., Lin, Z.J., Zheng, C.D. & Fan, H.F. (2007). "OASIS and MR-model completion". Acta Cryst. D63 793-799.</li>
        <li>Wang, J.W., Chen, J.R., Gu, Y.X., Zheng, C.D. & Fan, H.F. (2004). "Direct-method SAD phasing with partial-structure iteration - towards automation". Acta Cryst. D60, 1991-1996.</li>
        <li>Hao, Q., Gu, Y.X., Zheng, C.D. & Fan, H.F. (2000). "OASIS: a program for breaking phase ambiguity in OAS or SIR". J. Appl. Cryst. 33, 980-981.</li>
        <li>Yao, D.Q., Huang, S., Wang, J.W., Gu, Y.X., Zheng, C.D., Fan, H.F., Watanabe, N. & Tanaka, I. (2006). "SAD phasig by OASIS-2004: case studies of dual-space fragment extension". Acta Cryst. D62, 883-890.</li>
        <li>Wu, L.J., Zhang, T., Gu, Y.X., Zheng, C.D. & Fan, H.F. (2009). "Direct-method SAD phasing of proteins enhanced by the use of intrinsic bimodal phase distributions in subsequent phase-improvement process". Acta Cryst. D65, 1213-1216.</li>
        <li>Zhang, T., Wu, L.J., Hao, Q., Gu, Y.X., Zheng, C.D. & Fan, H.F. (2010). "Combining SAD/SIR iteration and MR iteration in partial-model extension of proteins". Chin. Phys. B 19, 096101.</li>
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
