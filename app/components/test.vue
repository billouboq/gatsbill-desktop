<template>
   <div id="chat">
      <div class="screen">
         <p>{{name}}</p>
         <div v-for="msg in messages">
            {{msg.name}} : {{msg.text}}
         </div>
      </div>
      <div class="text-edit">
         <input type="text">
      </div>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            name: 'billou',
            messages: [
               {name: 'Bill', text: 'Salut !'},
               {name: 'Pa', text: 'Hey !'},
               {name: 'Dadou', text: 'Plop !'},
            ]
         };
      }
   }
</script>

<style>
   #chat {
      background-color: whitesmoke;
   }
</style>

