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

    <div class="is-flex is-justify-content-center">

      <div class="file">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" @change="onChange" />
          <span class="file-cta">
            <span class="file-label"> Arquivo... </span>
          </span>
        </label>
      </div>

      <xlsx-read :file="file">
        <xlsx-json>
          <template #default="{ collection }">
            <div>
              {{ file ? toJson(collection) : "" }}
            </div>
          </template>
        </xlsx-json>
      </xlsx-read>
    </div>

    <div class="is-flex is-justify-content-center">
      <table class="table mt-5">
      <thead>
        <tr>
          <th class="has-text-centered" title="BASE">BASE</th>
          <th class="has-text-centered" title="SIM">SIM</th>
          <th class="has-text-centered" title="NAO">NÃO</th>
          <th class="has-text-centered" title="TOTAL">TOTAL</th>
          <th class="has-text-centered" title="PERCENT">%</th>
          <th class="has-text-centered" title="OBS">Observações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="base in bases" :key="base.nome">
          <td>
            <p>{{ base.name }}</p>
          </td>
          <td>
            <p>{{ base.sim }}</p>
          </td>
          <td>
            <p>{{ base.nao }}</p>
          </td>
          <td>
            <p>{{ base.total }}</p>
          </td>
          <td>
            <p>{{ base.percent }}</p>
          </td>
          <td>
            <div class="is-flex">
              <input class="input mr-2" type="text" :style="'width:300px'" />
              <button class="button mr-1">Editar</button>
              <button class="button">Excluir</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </main>
</template>

<script>
  import {
    XlsxRead,
    XlsxJson,
  } from "../../node_modules/vue3-xlsx/dist/vue3-xlsx.cjs";

  export default {
    components: {
      XlsxRead,
      XlsxJson,
    },
    data() {
      return {
        file: null,
        json: {},
        bases: [],
      };
    },

    methods: {
      onChange(event) {
        this.file = event.target.files ? event.target.files[0] : null;
      },

      onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      },

      toJson(collection) {
        this.json = collection;

        if (this.json) {
          this.json.forEach((line) => {
            
            const index = this.bases.findIndex((object) => {
              return object.name === line["Repr. usuário "];
            });

            if (index === -1) {
              const simCount = this.json
                .filter((item) => item["Ficha de visita recebida"] === "S")
                .filter(
                  (item) => item["Repr. usuário "] === line["Repr. usuário "]
                ).length;

              const naoCount = this.json
                .filter((item) => item["Ficha de visita recebida"] === "N")
                .filter(
                  (item) => item["Repr. usuário "] === line["Repr. usuário "]
                ).length;

              this.bases.push({
                name: line["Repr. usuário "],
                sim: simCount,
                nao: naoCount,
                total: simCount + naoCount,
                percent:
                  ((simCount / (simCount + naoCount)) * 100).toFixed() + "%",
              });
            }
          });

          this.bases = this.bases.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
        }
      },
    },
  };
</script>

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
