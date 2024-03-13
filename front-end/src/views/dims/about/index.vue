<template>
  <div class="about-container">
    <aside>
      <h1>DIMS<span class="add"> (project started in 1991)</span></h1>
      <p>A direct-method program written in <I>Fortran</I> for solving one-dimensionally modulated structures and composite structures consists of two sub-systems.</p>
      <ul type="disc">
        <li>Operating systems: Unix, Windows95, 98, NT, 2000 and XP</li>
        <li>Features:</li>
        <ul type="circle">
          <li>There are two versions of DIMS: the stand-alone version and the VEC version. The latter
            forms a part of the program VEC and can only be run under <i>MS Windows</i>.
          </li><li>The program can derive symmetry generators according to the input two-line symbols of
            (3+1)-dimensional superspace groups. Alternatively, it allows also manual input of
            symmetry generators. For one-line symbols, the program <i>symbol1to2</i> can convert
            them to the corrsponding two-line symbols (see Tutorials). In VEC,
            this will be done automatically.</li>
          <li>For ordinary incommensurate modulated structures, phases of main reflections are assumed
            to be known in advance via convensional methods for 3-dimensional periodic structures.
            DIMS is used to derive phases of satellite reflections based on the known phases of main
            reflections. In this case, DIMS can be used with X-ray-, electron- and neutron-diffraction
            data.</li>
          <li>For composite structures, phases of main reflections should be derived first by DIMS.
            Then they are input to DIMS as known phases to derive phases of satellites. In this case,
            DIMS can be used with only X-ray diffraction data.</li>
        </ul>
        For the VEC version only:
        <ul type="circle">
          <li>I/O data of DIMS can be displayed and manipulated by the
            sophisticated graphic interface of VEC.</li>
          <li>4D-Fourier maps phased by DIMS can be calculated, displayed and
            interpreted within VEC.</li>
          <li>The program MIMS can help with building a 4D-structure model
            from the 4D-Fourier map.</li>
        </ul>
        <li><a href="http://cryst.iphy.ac.cn/VEC/Tutorials/DIMS/main_back.html" target="_blank">Tutorials</a></li>
        <li><a href="http://cryst.iphy.ac.cn/Publication/PDF_files/2005/DIMS_applications.pdf" target="_blank">Applications</a></li>
        <li>Download from <a href="https://github.com/FanLabIOP" target="_blank" @click="handleClick('dims')">Github</a> or <a href="https://gitee.com/FanLabIOP" target="_blank" @click="handleClick('dims')">Gitee</a></li>
      </ul>
      <h2>REFERENCES</h2>
      <ul>
        <li>Fan, H.F. (2005a). DIMS on the VEC platform. <i>IUCr Computing Commission Newsletter</i>. No. <b>5</b>, 16-23.</li>
        <li>Fan, H.F. (2005b). DIMS applications. <i>IUCr Computing Commission Newsletter</i>. No. <b>5</b>, 24-27.</li>
        <li>Fan, H.F. & Gu, Y.X. (2009). DIMS - Direct methods In Multidimwnsional Spacw. <i>IUCr Computing Commission Newsletter</i> No. <b>10</b>, 51-58.</li>
        <li>Fan, H.F., van Smaalen, S., Lam, E.J.W. &amp; Beurskens, P.T. (1993). Direct methods for incommensurate intergrowth compounds I. Determination of the modulation. <i>Acta Cryst</i>. A<b>49</b>, 704-708.</li>
        <li>Fu, Z.Q. &amp; Fan, H.F. (1994). DIMS --- a direct method program for incommensurate modulated structures. <i>J. Appl. Cryst.,</i> <b>27</b>, 124-127.</li>
        <li>Fu, Z.Q. &amp; Fan, H.F. (1997). A computer program to derive (3+1)-dimensional symmetry operations from two-line symbols. <i>J. Appl. Cryst.,</i> <b>30</b>, 73-78.</li>
        <li>Hao, Q., Liu, Y.W. &amp; Fan, H.F. (1987). Direct methods in superspace I. Preliminary theory and test on the determination of incommensurate modulated structures. <i>Acta Cryst.</i>, A<b>43</b>, 820-824.</li>
        <li>Li, X.M., Li, F.H. & Fan, H.F. (2009). A revised version of the program VEC. <i>Chinese Physics B</i> <b>18</b>, 2459-2463.</li>
        <li>Li, Y., Wan, Z.H. &amp; Fan, H.F. (1999). MIMS — a program for measuring 4-dimensional Fourier maps of incommensurate modulated structures. <i>J. Appl. Cryst.,</i><b>32</b>, 1017-1020.</li>
        <li>Mo, Y.D., Fu, Z.Q., Fan, H.F., van Smaalen, S. Lam, E.J.W. &amp; Beurskens, P.T. (1996). Direct methods for incommensurate intergrowth compounds III. Solving the average structure in multidimensional space. <i>Acta Cryst</i>. A<b>52</b>, 640-644.</li>
        <li>Sha, B.D., Fan, H.F., van Smaalen, S., Lam, E.J.W. &amp; Beurskens, P.T. (1994). Direct methods for incommensurate intergrowth compounds II. Determination of the modulation using only main reflections.<i> Acta Cryst</i>. A<b>50</b>, 511-515.</li>
        <li>Yao, J. X. (1981). On the application of phase relationships to complex structures XVIII. RANTAN—Random MULTAN. <i>Acta Cryst.</i>, A<b>37</b>, 642-644.</li>
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
