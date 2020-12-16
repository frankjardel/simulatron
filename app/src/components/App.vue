<template>
   <Page>
      <ActionBar title="Simulatron"/>

      <Categories/>
   </Page>
</template>

<script >
import Categories from './Categories'

export default {
   data() {
      return {
      }
   },

   components: {
      Categories
   }
}
</script>

<style>
ActionBar {
   background-color: #53ba82;
   color: #ffffff;
}
</style>
