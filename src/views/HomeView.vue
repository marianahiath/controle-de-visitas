<template>
  <main class="main-container">

    <section class="wrapper">
        <h1>Histórico de Visitas</h1>
        <div class="date-wrapper">
          <button class="button is-small">
            <fa icon="angle-left" class="has-text-info" />
          </button>
          <p>Junho, 2022</p>
          <button class="button is-small">
            <fa icon="angle-right" class="has-text-info" />
          </button>
        </div>
    </section>
   
    <section class="columns wrapped mb-5 mt-5">
      <div class="column square is-3 text box">
        <p class="text-left is-size-5">Matriz</p>
        <p class="is-size-2 text-bold mb-2 has-text-info-dark">1227</p>
        <div class="flex">
          <div>
            <p class="is-size-5 mb-1">sim</p>
            <p class="is-size-4 has-text-weight-semibold">70%</p>
          </div>
          <div class="separator"></div>
          <div>
            <p class="is-size-5 mb-1">não</p>
            <p class="is-size-4 has-text-weight-semibold">30%</p>
          </div>
        </div>
      </div>

      <div class="column square is-3 text box">
        <p class="text-left is-size-5">Filiais</p>
        <p class="is-size-2 text-bold mb-2 has-text-info-dark">1227</p>
        <div class="flex">
          <div>
            <p class="is-size-5 mb-1">sim</p>
            <p class="is-size-4 has-text-weight-semibold">70%</p>
          </div>
          <div class="separator"></div>
          <div>
            <p class="is-size-5 mb-1">não</p>
            <p class="is-size-4 has-text-weight-semibold">30%</p>
          </div>
        </div>
      </div>

      <div class="column square is-3 text box">
        <p class="text-left is-size-5">Geral</p>
        <p class="is-size-2 text-bold mb-2 has-text-info-dark">1227</p>
        <div class="flex">
          <div>
            <p class="is-size-5 mb-1">sim</p>
            <p class="is-size-4 has-text-weight-semibold">70%</p>
          </div>
          <div class="separator"></div>
          <div>
            <p class="is-size-5 mb-1">não</p>
            <p class="is-size-4 has-text-weight-semibold">30%</p>
          </div>
        </div>
      </div>
    </section>

    <div class="align-center mb-5">
      <div class="section-separator"></div>
    </div>

    <section class="align-center mb-5 mt-5">
      <div class="search-container">
        <input class="input is-normal search" type="text" placeholder="Pesquisar">
        <button class="button has-text-link">
          <fa  icon="search"/>
        </button>
      </div>
    </section>

    <section class="columns">
      <div class="column align-center">
        <table class="table table-size is-striped is-bordered is-narrow is-hoverable">
        <thead>
          <tr class="has-text-centered head-size">
            <th class="is-vcentered">Base</th>
            <th class="has-text-centered is-vcentered">Sim</th>
            <th class="has-text-centered is-vcentered">Não</th>
            <th class="has-text-centered is-vcentered">Total</th>
            <th class="has-text-centered is-vcentered">%</th>
            <th class="column-fixed is-vcentered">Observações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Teresópolis</th>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>66</td>
            <td>
              <div class="flex">
                <input class="input is-small" type="text">
                <button class="button is-small button-hover has-text-link">
                  <fa  icon="floppy-disk"/>
                  <span class="ml-2">Salvar</span>
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th>Teresópolis</th>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>66</td>
            <td>
              <div class="flex">
                <input class="input is-small" type="text">
                <button class="button is-small button-hover has-text-link">
                  <fa  icon="floppy-disk"/>
                  <span class="ml-2">Salvar</span>
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th>Teresópolis</th>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>66</td>
            <td>
              <div class="flex">
                <input class="input is-small" type="text">
                <button class="button is-small button-hover has-text-link">
                  <fa  icon="floppy-disk"/>
                  <span class="ml-2">Salvar</span>
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th>Brasília</th>
            <td>10</td>
            <td>0</td>
            <td>10</td>
            <td>100</td>
            <td>
              <div class="flex">
                <input class="input is-small" type="text">
                <button class="button is-small button-hover has-text-link">
                  <fa  icon="floppy-disk"/>
                  <span class="ml-2">Salvar</span>
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th>Rio de Janeiro</th>
            <td>2</td>
            <td>1</td>
            <td>3</td>
            <td>66</td>
            <td>
              <div class="flex">
                <input class="input is-small" type="text">
                <button class="button is-small button-hover has-text-link">
                  <fa icon="floppy-disk"/>
                  <span class="ml-2">Salvar</span>
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th>São Paulo</th>
            <td>10</td>
            <td>0</td>
            <td>10</td>
            <td>100</td>
            <td>
              <div class="flex">
                <input class="input is-small" type="text">
                <button class="button is-small button-hover has-text-link">
                  <fa  icon="floppy-disk"/>
                  <span class="ml-2">Salvar</span>
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th>Petrópolis</th>
            <td>10</td>
            <td>0</td>
            <td>10</td>
            <td>100</td>
            <td>
              <div class="flex">
                <input class="input is-small" type="text">
                <button class="button is-small button-hover has-text-link">
                  <fa  icon="floppy-disk"/>
                  <span class="ml-2">Salvar</span>
                </button>
              </div>
            </td>
          </tr>

        </tbody>
        <tfoot></tfoot>
      </table>
      </div>
    </section>
  </main>
</template>

<script>

export default {
  
}
</script>

<style scoped>

  .main-container {
    width: 100%;
  }

  .date-container {
    width: 90%;
    justify-content: space-between;
    align-items: center;
  }

  .wrapped {
    display: flex;
    justify-content: space-around;
    margin: 0 200px;
  }

  .square {
    width: 290px;
    height: 200px;
    background: #fff;

    padding: 0 30px;

    transition: all 1s;
  }

  .square:hover {
    transform: scale(1.1);
  }

  .text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .text-left {
    align-self: flex-start;
  }

  .text-bold {
    font-weight: bolder;
  }

  .separator {
    width: 1.3px;
    height: 40px;
    background: 	#1d72aa;
  }

  .flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .align-center {
    display: flex;
    align-content: center;
    justify-content: center;
  }

  .table-size {
    width: 90%;
    box-shadow: 4px 4px 12px 0px rgba(50, 50, 50, 0.18);
  }

  input {
    border: none;
    margin-right: 8px;
  }

  .button-hover {
    width: 46px;
    transition: width 0.15s ease-out;
  }

  .button-hover:hover {
    display: inline;
    width: 92px;
  }

  .button-hover span {
    display:none;
    /* width: 50px; */
  }

  .button-hover:hover span {
    display: inline;
  }

  .column-fixed {
    width: 500px;
  }

  .search-container {
    width: 90%;
    display: flex;
    justify-content: flex-end;
  }

  .search {
    width: 200px;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .section-separator {
    width: 60%;
    height: 1px;
    background: #5658583a;
  }

  .head-size {
    height: 50px;
  }
</style>
