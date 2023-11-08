<template>
    <div>
        <company-edit v-if="mode === 'edit'" />
        <company-create v-else />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CompanyCreate from './CompanyCreate.vue'
import CompanyEdit from './CompanyEdit.vue'
export default {
    components: { CompanyCreate, CompanyEdit },
    name: 'CompanyEditor',

    computed: {
        ...mapGetters(['mode']),
    },
}
</script>

<style lang="scss" scoped>
</style>