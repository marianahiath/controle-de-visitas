<template>
  <div class="table-search mb-5">
    <div class="filters">
      <p class="has-text-left">Filtrar base</p>
      <div class="dropdown is-hoverable">
        <div class="dropdown-trigger">
          <button
            class="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Bases</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a href="#" class="dropdown-item"> Geral </a>
            <a class="dropdown-item"> Matriz </a>
            <a href="#" class="dropdown-item is-hoverable"> Filiais </a>
            <a href="#" class="dropdown-item"> Representaçãoes </a>
          </div>
        </div>
      </div>
    </div>

    <div class="filters">
      <label class="has-text-right">Pesquisar na tabela abaixo</label>
      <div class="search-container">
        <input class="input is-normal" type="text" placeholder="Pesquisar..." />
        <button class="button has-text-link">
          <fa icon="search" />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.table-search {
  display: flex;
  justify-content: space-between;

  .filters {
    display: flex;
    flex-direction: column;
    font-size: 16px;

    .search-container {
      display: flex;
    }
  }
}
</style>
