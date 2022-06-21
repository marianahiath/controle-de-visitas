<template>
     <div class="wrapper">
        <h1>Histórico de Visitas</h1>
        <div class="date-wrapper">
          <button class="button">
            <fa icon="angle-left" class="has-text-info" />
          </button>
          <p>Junho, 2022</p>
          <button class="button">
            <fa icon="angle-right" class="has-text-info" />
          </button>
        </div>
      </div>
</template>

<style lang="scss" scoped>
    .wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.6rem;
        color: #296fa8;
      }

      .date-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;

        p {
          font-size: 18px;
          text-transform: uppercase;
          padding: 5px 8px;
          background: #fff;
          border-top: 1px solid #bebebe9d;
          border-bottom: 1px solid #bebebe9d;
        }
      }
    }

</style>