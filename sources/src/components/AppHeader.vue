<template>
      <section class="header">
        <div class="container pb-5 pt-3">
          <div class="row">
            <h1 class="main-header col-sm-6 rbtfnt">
              <div class="a-1">
                RBCN<br>
                2021<br>
              </div>
              <div style="color: #01ffd9;" class="a-2">REMOTE<br>EVENT</div>
            </h1>
            <h2 class="col-sm-6 no-arrow a-3" style="text-align: end; flex-direction: column; justify-content: space-between; display: flex;">
              <div style="color: white;">
                A GLOBAL ONLINE<br>
                SOFTWARE AUTOMATION<br>
                EVENT<br>
              </div>
              <div>
                16-18/Mar-2021<br>
                UTC+2<br>
              </div>
              <div style="color: white;">
                THE 4th ANNUAL<br>
                ROBOT FRAMEWORK<br>
                CONFERENCE<br>
              </div>
            </h2>
          </div>
          <!--<h1 class="center white">2021</h1>-->
        </div>
      </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped>
  .a-1 {
    animation: 0.3s ease-out 0.1s 1 fade-in;
    animation-fill-mode: backwards;
  }
  .a-2 {
    animation: 0.3s ease-out 0.3s 1 fade-in;
    animation-fill-mode: backwards;
  }
  .a-3 {
    animation: 0.3s ease-out 0.5s 1 fade-in;
    animation-fill-mode: backwards;
  }
  @media screen and (max-width: 580px) {
    .a-3 {
      display: none !important;
    }

    .main-header {
      text-align: center;
    }
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
