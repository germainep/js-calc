<template>
<div class='display'>{{toScreen}}</div>
</template>

<script>
export default {
    props: ['count'],
    data () {
        return {
            disMemory: [],
            toScreen: 0,
        }
    },

    created () {
        Event.$on('toDisplay', (data)=> {
            this.toScreen = data
        })
    }
    

    
    
}
</script>

<style scoped>
.display {
    background-color: #03b43f;
    color: #12473c;
    font-size: 45px;
    height: 52px;
    margin: 0 auto;
    padding: 10px;
    text-align: end;
    width: 45%;

}

</style>
