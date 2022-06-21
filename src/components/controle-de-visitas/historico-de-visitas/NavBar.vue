<template>
  <nav>
    <div class="is-flex">
      <img src="../../../../public/logoAlterdata.svg" alt="" />
      <p style="margin-left: 5px; color: #fff">Gestor Relacionamento</p>
    </div>
    <div>
      <router-link to="/controle-de-visitas">Controle de Visitas</router-link>
      <router-link to="/about">Atendimento Churn</router-link>
    </div>
    <div class="is-flex">
      <div class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
          <!-- Any other Bulma elements you want -->
        </div>
        <button class="modal-close" aria-label="close"></button>
      </div>
      <p style="text-transform: uppercase; margin-right: 8px; color: #fff">
        Bruna.si
      </p>
      <div
        style="width: 20px; height: 20px; border-radius: 50%; background: #fff"
      ></div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  height: 50px;
  background: #0c0c0c;
  /* box-shadow: 4px 4px 12px 0px rgba(50, 50, 50, 0.18); */
  padding: 12px 25px;
  display: flex;
  justify-content: space-between;

  a {
    /* font-weight: bold; */
    color: #fff;
    padding: 17px;

    &.router-link-exact-active {
      color: #000;
      background: #f1f1f1;
    }
  }

  img {
    height: 23px;
  }
}
</style>
