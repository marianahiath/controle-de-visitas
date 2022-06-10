<template>
  <main class="main-container">
    <section class="data-container mt-5">
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

      <section class="columns cards mb-5 mt-5">
        <div class="column card-box is-4 text box">
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

        <div class="column card-box is-4 text box">
          <p class="text-left is-size-5">Matriz</p>
          <p class="is-size-2 text-bold mb-2 has-text-info-dark">512</p>
          <div class="flex">
            <div>
              <p class="is-size-5 mb-1">sim</p>
              <p class="is-size-4 has-text-weight-semibold">90%</p>
            </div>
            <div class="separator"></div>
            <div>
              <p class="is-size-5 mb-1">não</p>
              <p class="is-size-4 has-text-weight-semibold">10%</p>
            </div>
          </div>
        </div>

        <div class="column card-box is-4 text box">
          <p class="text-left is-size-5">Filiais</p>
          <p class="is-size-2 text-bold mb-2 has-text-info-dark">710</p>
          <div class="flex">
            <div>
              <p class="is-size-5 mb-1">sim</p>
              <p class="is-size-4 has-text-weight-semibold">25%</p>
            </div>
            <div class="separator"></div>
            <div>
              <p class="is-size-5 mb-1">não</p>
              <p class="is-size-4 has-text-weight-semibold">75%</p>
            </div>
          </div>
        </div>

        <div class="column card-box is-4 text box" style="margin-bottom: 24px">
          <p class="text-left is-size-5">Representações</p>
          <p class="is-size-2 text-bold mb-2 has-text-info-dark">5</p>
          <div class="flex">
            <div>
              <p class="is-size-5 mb-1">sim</p>
              <p class="is-size-4 has-text-weight-semibold">100%</p>
            </div>
            <div class="separator"></div>
            <div>
              <p class="is-size-5 mb-1">não</p>
              <p class="is-size-4 has-text-weight-semibold">0%</p>
            </div>
          </div>
        </div>
      </section>
    </section>

    <section class="table-container">
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
            <input
              class="input is-normal"
              type="text"
              placeholder="Pesquisar..."
            />
            <button class="button has-text-link">
              <fa icon="search" />
            </button>
          </div>
        </div>
      </div>
      <table
        class="mb-5 table table-size is-striped is-bordered is-narrow is-hoverable"
      >
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
                <input class="input is-small" type="text" />
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
                <input class="input is-small" type="text" />
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
                <input class="input is-small" type="text" />
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
                <input class="input is-small" type="text" />
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
                <input class="input is-small" type="text" />
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
                <input class="input is-small" type="text" />
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
                <input class="input is-small" type="text" />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.main-container {
  position: relative; 
  min-height: 100%;
  width: 80%;
  margin: 0 auto;

  .data-container {
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

    .cards {
      display: flex;
      justify-content: space-around;
      align-items: center;

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
  }

  .table-container {
    // height: 53vh;
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

    .table-size {
      width: 100%;

      .table-scroll {
        display: block;
        height: 200px;
        overflow: auto;
      }
    }
  }
}
</style>
