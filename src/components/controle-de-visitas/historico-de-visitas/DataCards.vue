<template>
  <div class="column card-box is-4 text box">
    <p class="text-left is-size-5">{{ base }}</p>
    <p class="is-size-2 text-bold mb-2 has-text-info-dark">{{ total }}</p>
    <div class="flex">
      <div>
        <p class="is-size-5 mb-1">sim</p>
        <p class="is-size-4 has-text-weight-semibold">{{ totalSim }}%</p>
      </div>
      <div class="separator"></div>
      <div>
        <p class="is-size-5 mb-1">não</p>
        <p class="is-size-4 has-text-weight-semibold">{{ totalNao }}%</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    base: String,
    total: Number,
    totalSim: Number,
    totalNao: Number,
  },
};
</script>

<style lang="scss" scoped>
.cards {
 
  .card-box {
    width: 270px;
    height: 180px;
    background: #fff;
    padding: 0 30px;

    .flex {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      .separator {
        width: 1.3px;
        height: 40px;
        background: #1d72aa;
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text-left {
      align-self: flex-start;
    }

    .text-bold {
      font-weight: bolder;
    }
  }
}
</style>
