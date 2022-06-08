<template>
  <main class="main-container">
    
    <section class="align-center mb-5 mt-5">

      <div class="is-flex date-container">
        <button class="button is-small">
          <fa icon="angle-left" class="has-text-info" />
        </button>
        <h1 class="is-size-4">MAIO, 2022</h1>
        <button class="button is-small">
          <fa icon="angle-right" class="has-text-info" />
        </button>
      </div>
    </section>

    <!-- <section class="columns wrapped">
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
    </section> -->

    <div class="align-center mb-3">
      <div class="section-separator"></div>
    </div>

    <!-- <section class="align-center mb-2">
      <div class="search-container">
        <input
          class="input is-normal search box"
          type="text"
          placeholder="Pesquisar"
        />
      </div>
    </section> -->

    <div class="has-text-right mt-6">
      <div
        class="table-container mb-0 has-text-centered is-flex is-flex-direction-column is-align-items-center"
      >
        <table class="table is-striped is-bordered is-narrow is-hoverable">
          
          <thead style="display: block">
            <tr class="has-text-centered head-size" style="width: 100px">
              <th class="is-vcentered" style="width: 150px">Base</th>
              <th class="has-text-centered is-vcentered" style="width: 50px">
                Sim
              </th>
              <th class="has-text-centered is-vcentered" style="width: 50px">
                Não
              </th>
              <th class="has-text-centered is-vcentered" style="width: 70px">
                Total
              </th>
              <th class="has-text-centered is-vcentered" style="width: 50px">
                %
              </th>
              <th class="is-vcentered" style="width: 400px">Observações</th>
            </tr>
          </thead>

          <tbody
            class="myBody"
            style="display: block; height: 200px; overflow: auto"
          >
            <tr class="is-selected">
              <th style="width: 150px">Rio de Janeiro</th>
              <td style="width: 50px">10</td>
              <td style="width: 50px">24</td>
              <td style="width: 70px">65</td>
              <td style="width: 50px">64%</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Teresópolis</th>
              <td style="width: 50px">2</td>
              <td style="width: 50px">1</td>
              <td style="width: 70px">3</td>
              <td style="width: 50px">23%</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Rio de Janeiro</th>
              <td style="width: 50px">2</td>
              <td style="width: 50px">1</td>
              <td style="width: 70px">3</td>
              <td style="width: 50px">66</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Teresópolis</th>
              <td style="width: 50px">2</td>
              <td style="width: 50px">1</td>
              <td style="width: 70px">3</td>
              <td style="width: 50px">66</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Rio de Janeiro</th>
              <td style="width: 50px">2</td>
              <td style="width: 50px">1</td>
              <td style="width: 70px">3</td>
              <td style="width: 50px">23%</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Rio de Janeiro</th>
              <td style="width: 50px">2</td>
              <td style="width: 50px">1</td>
              <td style="width: 70px">3</td>
              <td style="width: 50px">66</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Teresópolis</th>
              <td style="width: 50px">2</td>
              <td style="width: 50px">56</td>
              <td style="width: 70px">22</td>
              <td style="width: 50px">66</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Teresópolis</th>
              <td style="width: 50px">23</td>
              <td style="width: 50px">1</td>
              <td style="width: 70px">56</td>
              <td style="width: 50px">23%</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Rio de Janeiro</th>
              <td style="width: 50px">22</td>
              <td style="width: 50px">77</td>
              <td style="width: 70px">21</td>
              <td style="width: 50px">66</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Teresópolis</th>
              <td style="width: 50px">2</td>
              <td style="width: 50px">12</td>
              <td style="width: 70px">3</td>
              <td style="width: 50px">66</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Teresópolis</th>
              <td style="width: 50px">21</td>
              <td style="width: 50px">12</td>
              <td style="width: 70px">67</td>
              <td style="width: 50px">23%</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Rio de Janeiro</th>
              <td style="width: 50px">66</td>
              <td style="width: 50px">2</td>
              <td style="width: 70px">11</td>
              <td style="width: 50px">66</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Teresópolis</th>
              <td style="width: 50px">34</td>
              <td style="width: 50px">86</td>
              <td style="width: 70px">23</td>
              <td style="width: 50px">66</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Teresópolis</th>
              <td style="width: 50px">34</td>
              <td style="width: 50px">34</td>
              <td style="width: 70px">3</td>
              <td style="width: 50px">23%</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Rio de Janeiro</th>
              <td style="width: 50px">2</td>
              <td style="width: 50px">1</td>
              <td style="width: 70px">3</td>
              <td style="width: 50px">66</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>

            <tr>
              <th style="width: 150px">Rio de Janeiro</th>
              <td style="width: 50px">2</td>
              <td style="width: 50px">1</td>
              <td style="width: 70px">3</td>
              <td style="width: 50px">23%</td>
              <td style="width: 400px">
                <div class="flex">
                  <input class="input is-small" type="text" />
                  <button class="button is-small button-hover has-text-link">
                    <fa icon="floppy-disk" />
                    <span class="ml-2">Salvar</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
  }
</script>

<style>
  /* .myTable {
    display: block;
    width: 100%;
    height: 100px;
    overflow-y: scroll;
  } */

  .myBody::-webkit-scrollbar {
    display: none;
  }

  .date-container {
    width: 90%;
    justify-content: space-between;
    align-items: center;
  }

  .wrapped {
    display: flex;
    justify-content: space-around;
    margin: 0 150px;
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
    background: #1d72aa;
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

  /* .table-size {
    width: 90%;
    height: 300px !important;
    box-shadow: 4px 4px 12px 0px rgba(50, 50, 50, 0.18);
  } */

  input {
    border: none;
    margin-right: 8px;
  }

  .button-hover {
    width: 46px;
    /* transition: width 0.15s ease-out; */
  }

  .button-hover:hover {
    display: inline;
    width: 92px;
  }

  .button-hover span {
    display: none;
    /* width: 50px; */
  }

  .button-hover:hover span {
    display: inline;
  }

  /* .column-fixed {
    width: 500px;
  } */

  .search-container {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
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
