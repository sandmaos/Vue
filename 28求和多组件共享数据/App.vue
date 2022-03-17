<template>
    <div class="container">
    <Count/>
    <hr><hr>
    <Person/>
    </div>
</template>

<script>
import Count from './components/Count'
import Person from './components/Person'

export default {
    components:{Count,Person},
    name:'App',
}
</script>

<style scoped>

</style>