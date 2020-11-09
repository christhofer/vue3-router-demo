<template>
    
  <router-link :to="{name: 'products detail', params: {type: 'keyboard'}}">Keyboard</router-link> |
  <router-link :to="{name: 'products detail', params: {type: 'mouse'}}">Mouse</router-link> |
  <router-link :to="{name: 'products detail', params: {type: 'monitor'}}">Monitor</router-link>

</template>