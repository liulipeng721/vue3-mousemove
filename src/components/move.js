import { ref, reactive, onMounted, onUnmounted } from "vue";

export function move() {
    
    const x = ref(0);
    const y = ref(0);
    console.log("x---",x);
    console.log("y---",y); 

    const handleMouseMove = (e)=>{ 
        x.value = e.clientX;
        y.value = e.clientY;
    };

    onMounted(()=>{
        window.addEventListener("mousemove", handleMouseMove)
    });

    onUnmounted(()=>{
        window.removeEventListener("mousemove", handleMouseMove)
    })

    return {
        x,
        y
    }
    
}

export function move2() {
    const addrObj = reactive({
        x:0,
        y:0
    });  
    console.log(addrObj)
    const handleMouseMove = (e)=>{ 
        addrObj.x = e.clientX;
        addrObj.y = e.clientY;
    };

    onMounted(()=>{
        window.addEventListener("mousemove", handleMouseMove)
    });

    onUnmounted(()=>{
        window.removeEventListener("mousemove", handleMouseMove)
    })

    return addrObj
}