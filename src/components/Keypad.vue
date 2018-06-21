<template>
<div class='keypad'>
    <div class='number-group'>
        <Key name='1'></Key>
        <Key name='2'></Key>
        <Key name='3'></Key>
        <Key name='/'></Key>
        <Key name='4'></Key>
        <Key name='5'></Key>
        <Key name='6'></Key>
        <Key name='*'></Key>
        <Key name='7'></Key>
        <Key name='8'></Key>
        <Key name='9'></Key>
        <Key name='-'></Key>
        <Key name='C'></Key>
        <Key name='0'></Key>
        <Key name='.'></Key>
        <Key name='+'></Key>
        <Key name='AC'></Key>
        <Key name='='></Key>
    </div>
</div>

</template>
<script>
import Key from './Key'

export default {
    data () {

        return {
            currentDisplay: [],
            memory: [],
            operator: '',
            toScreen: 0,

        }
    },

    components: {
    Key
    },

    methods: {
       
        clear () {
            this.toScreen = 0
            this.currentDisplay = []
            Event.$emit('toDisplay', 0)
        },
        allClear () {
            this.clear()
            this.memory = []
        },
        plus () {
            if(this.memory.length < 1){
                this.memory.push(this.toScreen)
                this.currentDisplay = []
            } else {
                this.memory.push(this.toScreen)
                this.toScreen = this.memory.reduce(function(total, num){
                    return total + num
                })
                this.currentDisplay = []
                this.memory = []
                this.memory.push(this.toScreen)
            }
        },
        minus (){},
        divide () {},
        multiply () {},
        decimal () {},
        equal () {},
    },

    created() {
        Event.$on('pressed', (keyPressed)=> {
            this.currentDisplay.push(keyPressed)
            this.toScreen = parseInt(this.currentDisplay.join(''))
            Event.$emit('toDisplay', this.toScreen)
        }),

        Event.$on('operator', (keyPressed)=> {
            this.operator = keyPressed;
            if(this.operator === '+') {
                this.plus()
                console.log(this.memory, this.toScreen)
                Event.$emit('toDisplay', this.toScreen)
            }
        }),
         Event.$on('clear', ()=> {
            console.log(this.toScreen)
            this.clear()
            Event.$emit('toDisplay', 0)
        }),
        Event.$on('allClear', ()=> {
            this.allClear()

        })
    }
}
</script>

<style scoped>
    .keypad {
        height: 800px;
        margin: 0 auto;
        width: 50%;
    }
    .number-group {
        height: 100%;
        width: 50%;
        margin: 0 auto;
    }
    .operator-group {
        width: 40%;
    }
</style>

