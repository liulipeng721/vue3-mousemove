<template>
<div>
    <h1> Vue3的鼠标移动事件监听 </h1>
    <div> X:{{x}}   Y:{{ y}} </div>
    <div> X:{{ obj.x }}   Y:{{ obj.y }} </div>
</div>
   
</template>

<script>
// import { toRefs } from "vue";
import { move, move2 } from "../components/move.js";
export default {
    // name:"MouseMove",
    setup(){
        const {x,y} = move(); 
        console.log(move)
        const obj = move2();


        // const {x,y} = toRefs(move2()); 
        

        return {
            obj,
            x,
            y
        }
    }
}
</script>

<style>

</style>