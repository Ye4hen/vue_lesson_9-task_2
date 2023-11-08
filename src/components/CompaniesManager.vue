<template>
    <div>
        <companies-filters title="Фільтри" />
        <companies-list title="Список Компаній" />
    </div>
</template>

<script>
import CompaniesList from '@/components/CompaniesList.vue'
import CompaniesFilters from './CompaniesFilters.vue'
// @ is an alias to /src

export default {
    name: 'CompaniesManager',
    components: { CompaniesList, CompaniesFilters },
}
</script>

        CompaniesFilters