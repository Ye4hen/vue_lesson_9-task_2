<template>
    <div class="filter__container">
        <h2 class="title">{{ title }}</h2>
        <div class="filter__items">
            <div class="filter__item">
                <label class="filter__label">
                    Title
                    <input v-model="titleVal" type="text" @input="onTitleChange" />
                </label>
            </div>
            <div class="filter__item">
                <label class="filter__label">
                    Rate
                    <input v-model="rateVal" type="number" @input="onRateChange" />
                </label>
            </div>
            <div class="filter__item">
                <label class="filter__label">
                    Year
                    <input v-model="yearVal" type="number" @input="onYearChange" />
                </label>
            </div>
            <div class="filter__item">
                <label class="filter__label">
                    Owner
                    <input v-model="ownerVal" type="text" @input="onOwnerChange" />
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CompaniesFilters',

    props: {
        title: {
            type: String,
            default: 'Filters',
        },
    },

    data() {
        return {
            titleVal: null,
            rateVal: null,
            yearVal: null,
            ownerVal: null,
        }
    },

    computed: {
        ...mapGetters(['getTitleVal', 'getRateVal', 'getYearVal', 'getOwnerVal']),
    },

    methods: {
        ...mapActions(['updateTitleVal', 'updateRateVal', 'updateYearVal', 'updateOwnerVal']),
        onTitleChange() {
            this.updateTitleVal(this.titleVal)
        },
        onRateChange() {
            this.updateRateVal(this.rateVal)
        },
        onYearChange() {
            this.updateYearVal(this.yearVal)
        },
        onOwnerChange() {
            this.updateOwnerVal(this.ownerVal)
        },
    },
}
</script>

<style lang="scss" scoped>
</style>