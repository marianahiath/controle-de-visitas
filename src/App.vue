<template>
  <nav>
    <div style="display: flex">
      <img src="../public/logoAlterdata.svg" alt="" />
      <p style="margin-left: 5px; color: #fff">Gestor Relacionamento</p>
    </div>
    <div>
      <router-link to="/controle-de-visitas">Controle de Visitas</router-link>
      <router-link to="/about">Atendimento Churn</router-link>
    </div>
    <div style="display: flex">
      <p style="text-transform: uppercase; margin-right: 8px; color: #fff">
        Bruna.si
      </p>
      <div
        style="width: 20px; height: 20px; border-radius: 50%; background: #fff"
      ></div>
    </div>
  </nav>
  <router-view />
  <footer>
    <div class="align">
      <p>© 2022 - Alterdata Software - Direitos reservados</p>
      <img src="./assets/logo-alterdata.eea076dd.png" alt="Logo lterdata" />

    </div>
  </footer>
</template>

<style>
html,
body {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f1f1f1;
  min-height: 100vh;
}

nav {
  height: 50px;
  background: #0c0c0c;
  /* box-shadow: 4px 4px 12px 0px rgba(50, 50, 50, 0.18); */
  padding: 12px 25px;
  display: flex;
  justify-content: space-between;
}

nav img {
  height: 23px;
}

nav a {
  /* font-weight: bold; */
  color: #fff;
  padding: 17px;
}

nav a.router-link-exact-active {
  color: #000;
  background: #f1f1f1;
}

.cor {
  width: 250px;
  height: 100vh;
  background: #0d3753;
  box-shadow: 4px 4px 12px 0px rgba(50, 50, 50, 0.18);
}

footer {
  /* height: 50px; */
  width: 100%;
  padding: 15px 25px;
  font-size: 12px;
  color: #fff;
  background: #0c0c0c;
  position: absolute;
  left: 0;
  bottom: 0;
}

.align {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

footer a {
  text-decoration: none;
  color: #fff;

  margin-right: 20px;
}

footer div {
  display: flex;
}
</style>
