<template>
  <main class="main-container">
    <section class="data-container mt-5">
      <header-data></header-data>
      <section class="columns cards mb-5 mt-5 is-flex is-justify-content-space-around">
        <data-cards
          base="Geral"
          total="1227"
          total-sim="70"
          total-nao="30"
        ></data-cards>
        <data-cards
          base="Matriz"
          total="1227"
          total-sim="70"
          total-nao="30"
        ></data-cards>
         <data-cards
          base="Filiais"
          total="1227"
          total-sim="70"
          total-nao="30"
        ></data-cards>
        <data-cards
          base="Representações"
          total="1227"
          total-sim="70"
          total-nao="30"
        ></data-cards>
      </section>
    </section>

    <section class="table-container">
      <table-filters></table-filters>
      <table-content></table-content>
    </section>
  </main>
</template>

<script>
import HeaderData from "@/components/controle-de-visitas/historico-de-visitas/HeaderData.vue";
import DataCards from "@/components/controle-de-visitas/historico-de-visitas/DataCards.vue";
import TableFilters from "@/components/controle-de-visitas/historico-de-visitas/TableFilters.vue";
import TableContent from "@/components/controle-de-visitas/historico-de-visitas/TableContent.vue";

export default {
  components: {
    "header-data": HeaderData,
    "data-cards": DataCards,
    "table-filters" : TableFilters,
    "table-content" : TableContent
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  min-height: 100%;
  width: 80%;
  margin: 0 auto;
}
</style>
