<template>
<div class="grid grid-cols-12">
    <component :is="form.component"
    :placeholder="form.placeholder"
    v-model="form.value"
    :disabled="form.disabled"
    :class="form.classes"
    :options="form.options"
    ></component>
  </div>
</template>

<script>
export default {
    props: ["form"]
}
</script>

<style>

</style>