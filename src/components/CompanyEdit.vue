<template>
    <div>
        <div class="company__container">
            <div>
                <label class="company__label">
                    Title:
                    <input v-model="currentCompany.name" type="text" />
                </label>
            </div>
            <div>
                <label class="company__label">
                    Rate:
                    <input v-model="currentCompany.rate" type="text" />
                </label>
            </div>
            <div>
                <label class="company__label">
                    Year:
                    <input v-model="currentCompany.year" type="text" />
                </label>
            </div>
            <div>
                <label class="company__label">
                    Owner:
                    <input v-model="currentCompany.owner" type="text" />
                </label>
            </div>
            <button class="company__button" @click="updateCompanyInfo">Save</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CompanyEdit',

    data() {
        return {
            currentCompany: {},
        }
    },

    computed: {
        ...mapGetters(['getCompanyById']),
        companyId() {
            return this.$route.params.companyId
        },
    },

    created() {
        this.currentCompany = this.getCompanyById(this.companyId)
    },

    methods: {
        ...mapActions(['changeCompanyInfo']),
        updateCompanyInfo() {
            this.changeCompanyInfo(this.currentCompany)
            this.$router.push({
                name: 'home',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
</style>