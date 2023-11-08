<template>
    <div class="home">
        <companies-manager />
    </div>
</template>

<script>
import CompaniesManager from '../components/CompaniesManager.vue'
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: { CompaniesManager },
}
</script>
