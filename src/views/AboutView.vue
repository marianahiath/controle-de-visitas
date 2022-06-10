<template>
  <main class="main-container">
    <section class="data-container">
      <div class="wrapper">
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
      </div>

      <div class="cards">
        <div class="card">
          <div class="card-content">
            <div class="content">
              <h2>Geral</h2>
              <p class="is-size-5 has-text-weight-semibold has-text-info-dark">
                1227
              </p>
              <div class="data">
                <div>
                  <p class="mb-1">sim</p>
                  <p class="has-text-weight-semibold">70%</p>
                </div>
                <div class="separator"></div>
                <div>
                  <p class="mb-1">não</p>
                  <p class="has-text-weight-semibold">30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <div class="content">
              <h2>Geral</h2>
              <p class="is-size-5 has-text-weight-semibold has-text-info-dark">
                1227
              </p>
              <div class="data">
                <div>
                  <p class="mb-1">sim</p>
                  <p class="has-text-weight-semibold">70%</p>
                </div>
                <div class="separator"></div>
                <div>
                  <p class="mb-1">não</p>
                  <p class="has-text-weight-semibold">30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <div class="content">
              <h2>Geral</h2>
              <p class="is-size-5 has-text-weight-semibold has-text-info-dark">
                1227
              </p>
              <div class="data">
                <div>
                  <p class="mb-1">sim</p>
                  <p class="has-text-weight-semibold">70%</p>
                </div>
                <div class="separator"></div>
                <div>
                  <p class="mb-1">não</p>
                  <p class="has-text-weight-semibold">30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-content">
            <div class="content">
              <h2>Geral</h2>
              <p class="is-size-5 has-text-weight-semibold has-text-info-dark">
                1227
              </p>
              <div class="data">
                <div>
                  <p class="mb-1">sim</p>
                  <p class="has-text-weight-semibold">70%</p>
                </div>
                <div class="separator"></div>
                <div>
                  <p class="mb-1">não</p>
                  <p class="has-text-weight-semibold">30%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="table-container">
      <div class="table-search">
        <div class="filters">
          <p class="has-text-left">Filtrar base</p>
          <div class="dropdown is-hoverable">
            <div class="dropdown-trigger">
              <button
                class="button is-small"
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
                <a href="#" class="dropdown-item is-hoverable">
                  Filiais
                </a>
                <a href="#" class="dropdown-item"> Representaçãoes </a>
              </div>
            </div>
          </div>
        </div>
        <div class="filters">
          <p class="has-text-right">Pesquisar na tabela abaixo</p>
          <input
            class="input is-small"
            type="text"
            placeholder="Digite aqui sua pesquisa..."
          />
        </div>
      </div>
      <table
        class="table table-size is-striped is-bordered is-narrow is-hoverable"
      >
        <thead style="display: block">
          <tr class="has-text-centered head-size">
            <th class="is-vcentered" style="width: 200px">Base</th>
            <th class="has-text-centered is-vcentered">Sim</th>
            <th class="has-text-centered is-vcentered">Não</th>
            <th class="has-text-centered is-vcentered">Total</th>
            <th class="has-text-centered is-vcentered" style="width: 50px">
              %
            </th>
            <th class="column-fixed is-vcentered" style="width: 582px">
              Observações
            </th>
          </tr>
        </thead>
        <tbody class="table-scroll">
          <tr>
            <th style="width: 200px">Teresópolis</th>
            <td style="width: 46px">2</td>
            <td style="width: 48px">1</td>
            <td style="width: 53px">3</td>
            <td style="width: 50px">66</td>
            <td style="width: 566px">
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
              <div>
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
  height: calc(100vh - 100px);
  width: 80%;
  margin: 0 auto;

  .data-container {
    height: calc(40vh - 50px);

    .wrapper {
      height: 30%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 1.4rem;
      }

      .date-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .cards {
      height: 70%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .card-content {
        padding: 12px 8px 0 8px;
        width: 200px;
        height: 120px;

        .content {
          h2 {
            text-align: left;
            font-size: 16px;
            font-weight: 200;
            margin: 0;
            padding-left: 5px;
          }

          p {
            margin: 0;
          }
          .data {
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            .separator {
              width: 1.3px;
              height: 40px;
              background: #1d72aa;
            }
          }
        }
      }
    }
  }

  .table-container {
    height: calc(60vh - 50px);

    .table-search {
      display: flex;
      justify-content: space-between;
      height: 20%;

      .filters {
        display: flex;
        flex-direction: column;
        font-size: 13px;
      }
    }

    .table-size {
      width: 100%;
      max-height: 70%;

      .table-scroll {
        display: block;
        height: 200px;
        overflow: auto;
      }
    }
  }
}
</style>
