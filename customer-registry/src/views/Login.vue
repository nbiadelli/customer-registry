<template>
  <div class="c-login">
    <h2 class="c-login__title">Login</h2>
    <form action="" class="c-login__form">
      <div class="c-login__user-field">
        <input-text :label="'Usuario'" id="user" for="user" type="text" />
      </div>
      <div class="c-login__user-field">
        <input-text
          :label="'Password'"
          id="password"
          for="password"
          type="password"
        />
      </div>
      <div class="c-login__footer">
        <a href="#" id="submit" class="c-login__submit">Login</a>
      </div>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Login",
};
</script>

<style lang="scss">
.c-login {
  // top: 50%;
  width: 400px;
  // border-radius: 12px;
  background-color: $primitives-blue-1;

  display: flex;
  -webkit-display: box;
  -moz-display: box;
  -ms-display: flexbox;
  -webkit-display: flex;
  flex-direction: column;

  flex-wrap: wrap;
  // justify-content: center;
  // align-content: center;

  padding: 6%;
  margin: 0;

  .c-login__title {
    margin: 0 0 30px;
    padding: 0;
    color: $primitives-purple-10;
    text-align: center;
  }

  .c-login__footer {
    display: flex;
    margin-top: 20px;

    .c-login__submit {
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

    .c-login__register {
      margin: auto;
      width: 60%;
      font-size: 14px;
      text-align: center;
      text-decoration: none;
    }
  }
}
</style>
