<template>
    <div>
        <div class="company__container">
            <div class="company__card">
                <div>
                    <label class="company__label">
                        Title:
                        <input ref="companyName" v-model="newName" type="text" />
                    </label>
                </div>
                <div>
                    <label class="company__label">
                        Rate:
                        <input v-model="newRate" type="text" />
                    </label>
                </div>
                <div>
                    <label class="company__label">
                        Year:
                        <input v-model="newYear" type="text" />
                    </label>
                </div>
                <div>
                    <label class="company__label">
                        Owner:
                        <input v-model="newOwner" type="text" />
                    </label>
                </div>
            </div>
            <button class="company__button" @click="createNewCompany">Create</button>
            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CompanyEdit',

    data() {
        return {
            newName: null,
            newRate: null,
            newYear: null,
            newOwner: null,
        }
    },

    computed: {
        ...mapGetters(['errorMessage']),
    },

    methods: {
        ...mapActions(['addNewCompany', 'setErrorMessage']),
        createNewCompany() {
            if (!this.newName || !this.newRate || !this.newYear || !this.newOwner) {
                this.setErrorMessage("Заповнення всіх полів є обов'язковим")
                this.$refs.companyName.focus()
            } else {
                this.setErrorMessage(null)
                this.addNewCompany({
                    name: this.newName,
                    rate: this.newRate,
                    year: this.newYear,
                    owner: this.newOwner,
                })
                this.$router.push({ name: 'home' })
            }
        },
    },
}
</script>

<style lang="scss" scoped>
</style>