<template>
   <div id="keyboard">
      keyboard
      <input type="text" v-model="message" @keyup.enter="sendMessage">
   </div>
</template>

<script>
export default {
   data() {
      return {
         message: ''
      }
   },
   methods: {
      sendMessage: function() {
         if (this.message) {
            this.$emit('message', this.message);
            this.message = '';
         }
      }
   }
}
</script>
