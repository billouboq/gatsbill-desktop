<template>
   <div id="screen">
      screen
      <div v-for="message in messages">
         {{message}}
      </div>
   </div>
</template>

<script>
export default {
   props: {
      messages: Array
   }
}
</script>
