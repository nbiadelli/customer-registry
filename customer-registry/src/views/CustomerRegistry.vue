<template>
  <div class="c-register">
    <h2 class="c-register__title">Cadastro de Clientes</h2>
    <form action="" class="c-register__form">
      <div class="c-register__user-field">
        <input-text :label="'Nome'" id="name" for="name" type="text" />
      </div>
      <div class="c-register__user-field">
        <input-text :label="'E-mail'" id="email" for="email" type="email" />
      </div>
      <div class="c-register__user-field">
        <input-text :label="'Telefone'" id="fone" for="fone" type="number" />
      </div>
      <div class="c-register__user-field">
        <input-text :label="'CEP'" id="cep" for="cep" type="number" />
      </div>
      <div class="c-register__user-field">
        <input-text :label="'Rua'" id="street" for="street" type="text" />
      </div>
      <div class="c-register__user-field">
        <input-text :label="'Número'" id="number" for="number" type="number" />
      </div>
      <div class="c-register__user-field">
        <input-text
          :label="'Bairro'"
          id="neighborhood"
          for="neighborhood"
          type="text"
        />
      </div>
      <div class="c-register__user-field">
        <input-text :label="'Cidade'" id="city" for="city" type="text" />
      </div>

      <div class="c-register__footer">
        <a href="#" id="sregister" class="c-register__submit">Cadastrar</a>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Register",
};
</script>

<style lang="scss">
.c-register {
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

  .c-register__title {
    margin: 0 0 5rem;
    padding: 0;
    color: $primitives-purple-10;
    text-align: center;
  }

  .c-register__form {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-between;
  }

    .c-register__user-field {
        width: 45%;
    }

  .c-register__footer {
    display: contents;
    margin-top: 20px;

    .c-register__submit {
      margin: auto;
      padding: 10px 20px;
      color: $primitives-purple-10;
      font-size: 16px;
      text-decoration: none;
      text-transform: uppercase;
      letter-spacing: 4px;
      border: 1px solid $primitives-purple-10;
      overflow: hidden;
      transition: 0.5s;

      &:hover {
        color: $primitives-purple-10;
        border-radius: 5px;
        background-color: $primitives-purple-5;
        box-shadow: 0 0 5px $primitives-purple-5, 0 0 25px $primitives-purple-5,
          0 0 50px $primitives-purple-5, 0 0 100px $primitives-purple-5;
      }
    }

    .c-register__register {
      margin: auto;
      width: 60%;
      font-size: 14px;
      text-align: center;
      text-decoration: none;
    }
  }
}
</style>
