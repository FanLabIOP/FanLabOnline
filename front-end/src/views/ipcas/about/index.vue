<template>
  <div class="about-container">
    <aside>
      <h1>IPCAS</h1>
      <p>Iterative Protein Crystal-structure Automatic Solution</p>
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
        <li>Download from <a href="https://github.com/FanLabIOP" target="_blank">Github</a> or <a href="https://gitee.com/FanLabIOP" target="_blank">Gitee</a></li>
      </ul>
      <h2>Running mode</h2>
      <p>There are two major processes running under IPCAS. The first named SAD/SIR iteration, which is for SAD/SIR phasing and fragment extension; The second named MR iteration, which was originally designed for MR-model completion. But actually it is used for a wide variety of fragment extension in the absence of SAD/SIR information. The flowchat of these two processes are shown below. </p>
      <el-image style="height: 100%;" :src="flowchart" />
      <h2>REFERENCES</h2>
      <ul>
        <li>Ding, W., Zhang, T., He, Y., Wang, J., Wu, L., Han, P., Zheng, C., Gu, Y., Zeng, L., Hao, Q. & Fan, H. (2020). IPCAS: a direct-method-based pipeline from phasing to model building and refinement for macromolecular structure determination. J. Appl. Cryst. 53, 253-261.</li>
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
  name: 'About',
  data() {
    return {
      flowchart: 'flowchart.png'
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
