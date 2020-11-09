<template>
  <div>
    <router-link :to="{name: 'about company'}">
      Company
    </router-link> | 
    <router-link :to="{name: 'about services'}">
      Services
    </router-link>
  </div>

  <router-view></router-view>
</template>
