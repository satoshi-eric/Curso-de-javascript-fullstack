<template>
  <div class="calculator">
      <Display />
      <Button />
      <Button />
      <Button />
  </div>
</template>

<script>
import Display  from '../components/Display.vue'
import Button   from '../components/Button.vue'

export default {
    components: { Button, Display}
}
</script>

<style>
    .calculator {
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr repeat(5, 48px);

    }
</style>