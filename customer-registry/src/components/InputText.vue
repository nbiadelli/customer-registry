<template>
  <div class="input-text">
    <input
      :id="id"
      :type="type"
      class="user-field-input"
    />
    <label class="user-field-label" :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
      default: "text",
    },
    value: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.user-field {
  &-input {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    padding: 10px 0;
    font-size: 16px;
    color: $primitives-gray-11;
    background-color: $--color-transparent;
    border: none;
    border-bottom: 1px solid $primitives-purple-10;
    outline: none;

    &:focus + label,
    &:valid + label {
      top: -85px;
      left: 0;
      color: $primitives-purple-10;
      font-size: 12px;
    }
  }
  &-label {
    position: relative;
    font-weight: 800;
  }
}
</style>
