<template>
    <div class="company__container">
        <h2 class="title">{{ title }}</h2>
        <ul class="company__list">
            <li v-for="company in filteredCompaniesList" :key="company.id" class="company__item">
                <h5 class="company__name">{{ company.name }}</h5>
                <div class="company__rate">{{ company.rate }}</div>
                <div class="company__year">{{ company.year }}</div>
                <div class="company__owner">{{ company.owner }}</div>
                <div class="company__buttons">
                    <button class="company__button" @click="deleteCompany(company.id)">Delete</button>
                    <button class="company__button" @click="onEditCompany(company.id)">Edit</button>
                </div>
            </li>
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </ul>
        <button class="company__button" @click="onCreateCompany()">Create a company</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CompaniesList',
    props: {
        title: {
            type: String,
            default: 'Companies List',
        },
    },
    computed: {
        ...mapGetters(['companiesList', 'filteredCompaniesList', 'errorMessage']),
    },
    methods: {
        ...mapActions(['getCompaniesList', 'deleteCompany', 'createCompany', 'editCompany']),
        onCreateCompany() {
            this.createCompany()
            this.$router.push({
                name: 'create_company',
            })
        },
        onEditCompany(id) {
            this.editCompany(id)
            this.$router.push({
                name: 'edit_company',
                params: {
                    companyId: id,
                },
            })
        },
    },
    created() {
        this.getCompaniesList()
    },
}
</script>

<style lang="scss" scoped>
</style>