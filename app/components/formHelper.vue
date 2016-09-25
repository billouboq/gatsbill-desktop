<template>
   <form class="form" @submit.prevent>
     <h3>{{ title }}</h3>
     <slot name="inputs"></slot><!-- children will go here -->
     <slot name="buttons"></slot>
   </form>
</template>
