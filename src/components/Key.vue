<template>
    <button class='key' @click='press'>{{name}}</button>
</template>

<script>
export default {
    props: ['name'],
    data () {
        return {
        }
    },

    methods: {
        press () {
            if(this.name === 'C'){
                Event.$emit('clear')
            }

            else if(this.name === 'AC') {
                Event.$emit('allClear')
            }
            else {
                Event.$emit('pressed', this.name)
            }
        }
    }
}
</script>

<style scoped>
    .key {
        height: 10%;
        width: 20%;
        margin: 1%;
    }

</style>


