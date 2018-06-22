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
        doMath (key) {
            if(this.memory.length < 2){
                this.memory.push(this.toScreen)
                this.memory.push(key)
                this.currentDisplay = []
            } else {
                this.memory.push(this.toScreen)
                this.toScreen = eval(this.memory[0] + this.memory[1] + this.memory[2])
                this.currentDisplay = []
                this.memory = []
                this.memory.push(this.toScreen)
                this.memory.push(key)
                Event.$emit('toDisplay', this.toScreen)
            }
        },
        equal () {
            this.memory.push(this.toScreen)
            this.toScreen = eval(this.memory[0] + this.memory[1] + this.memory[2])
            this.currentDisplay = []
            this.memory = []
            Event.$emit('toDisplay', this.toScreen)
        },
    },

    created() {
        Event.$on('pressed', (keyPressed)=> {
            var operators = ['+',  '-',  '/', '*']
            
            if(operators.includes(keyPressed)) {
                this.doMath(keyPressed)
            }
            else if(keyPressed === '=') {
                this.equal() 
            }
            else
            {
            this.currentDisplay.push(keyPressed)
            this.toScreen = parseFloat(this.currentDisplay.join(''), 10)
            Event.$emit('toDisplay', this.toScreen)
            }
        }),

         Event.$on('clear', ()=> {
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

