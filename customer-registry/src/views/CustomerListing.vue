<template>
  <div class="c-listing">
    <h2 class="c-listing__title">Lista de Clientes</h2>
    <div class="c-listing__search">
      <input-text :label="'Pesquisar'" id="search" for="search" type="text"/>
    </div>
    <div action="" class="c-listing__head">
      <div class="c-listing__user-field">Nome</div>
      <div class="c-listing__user-field">E-mail</div>
      <div class="c-listing__user-field">Telefone</div>
      <div class="c-listing__user-field">CEP</div>
      <div class="c-listing__user-field">Endereço</div>
      <div class="c-listing__user-field">Número</div>
      <div class="c-listing__user-field">Bairro</div>
      <div class="c-listing__user-field">Cidade</div>
    </div>
    <div action="" class="c-listing__body">
      <div class="c-listing__user-field">Maria Cataria</div>
      <div class="c-listing__user-field">mari@gmail.com</div>
      <div class="c-listing__user-field">(11)956866-325</div>
      <div class="c-listing__user-field">123589-122</div>
      <div class="c-listing__user-field">Rua Benedito santos</div>
      <div class="c-listing__user-field">203</div>
      <div class="c-listing__user-field">Jd Beterra</div>
      <div class="c-listing__user-field">São Paulo</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "CustomerListing",
};
</script>

<style lang="scss">
.c-listing {
  width: 100%;
  background-color: $primitives-blue-1;

  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem 5rem;
  margin: 0 10rem 5rem;

  .c-listing__title {
    margin: 0 0 5rem;
    padding: 0;
    color: $primitives-purple-10;
    text-align: center;
  }

  .c-listing__search{
    width: 45%;
  }

  .c-listing__head {
    display: flex;
    align-content: center;
    justify-content: space-between;
    color: $primitives-purple-10;
  }

  .c-listing__body {
    display: flex;
    align-content: center;
    justify-content: space-between;
    color: $primitives-gray-11;
    font-weight: 500;
  }

  .c-listing__user-field {
    width: 45%;
  }
}
</style>
