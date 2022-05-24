<template>
  <main >
    <section class="columns wrapped">
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

    <section class="columns">
      <div class="column align-center">
        <table class="table table-size is-bordered is-narrow is-hoverable">
        <thead>
          <tr>
            <th>Base</th>
            <th>Sim</th>
            <th>Não</th>
            <th>Total</th>
            <th>%</th>
            <th>Observações</th>
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
                <input type="text">
                <button class="button is-small is-link is-light">teste</button>
                <button class="button is-small is-link is-light">teste</button>
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
                <input type="text">
                <button class="button is-small is-link is-light">teste</button>
                <button class="button is-small is-link is-light">teste</button>
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
  .wrapped {
    display: flex;
    justify-content: space-around;
    margin: 0 150px;
  }

  .square {
    width: 280px;
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
    width: 80%;
    box-shadow: 4px 4px 12px 0px rgba(50, 50, 50, 0.18);
  }

  input {
    border: none;
    width: 90%;
    height: 100%;
    padding: 8px;
    margin-right: 5px;
    /* background: #f1f1f1; */
  }
</style>
