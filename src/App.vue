<template>
  <div id="app">
    <h1>Javascript Calculator</h1>
    <Display/>
    <Keypad/>
  </div>
</template>

<script>
import Display from "./components/Display"
import Keypad from './components/Keypad'

export default {
  name: 'App',

  data () {
    return {
      count: [],
    }
  },

  computed: {
  },

  components: {
    Display,
    Keypad
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
