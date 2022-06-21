<template>
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
</template>

<style lang="scss" scoped>
.table-size {
  width: 100%;

  .table-scroll {
    display: block;
    height: 200px;
    overflow: auto;
  }
}
</style>
