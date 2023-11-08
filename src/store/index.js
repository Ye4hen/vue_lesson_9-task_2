import { createStore } from "vuex";
import companies from "@/data/companiesData.json";

export default createStore({
	state() {
		return {
			companiesList: [],
			mode: null,
			errorMessage: null,
			titleVal: null,
			rateVal: null,
			yearVal: null,
			ownerVal: null,
		}
	},
	getters: {
		companiesList: ({ companiesList }) => companiesList,

		getTitleVal: ({ titleVal }) => titleVal,
		getRateVal: ({ rateVal }) => rateVal,
		getYearVal: ({ yearVal }) => yearVal,
		getOwnerVal: ({ ownerVal }) => ownerVal,

		errorMessage: ({ errorMessage }) => errorMessage,
		mode: ({ mode }) => mode,
		getCompanyById: (state) => {
			return (companyId) => {
				return { ...state.companiesList.find((company) => company.id == companyId) }
			}
		},

		filteredCompaniesList: (state) => {
			let filteredList = state.companiesList.filter((company) => {
				const titleValue = !state.titleVal || company.name.toLowerCase().includes(state.titleVal.toLowerCase());
				const rateValue = !state.rateVal || company.rate.toString().includes(state.rateVal.toString());
				const yearValue = !state.yearVal || company.year.toString().includes(state.yearVal.toString());
				const ownerValue = !state.ownerVal || company.owner.toLowerCase().includes(state.ownerVal.toLowerCase());
				return (
					titleValue && rateValue && yearValue && ownerValue
				)
			});
			if (filteredList.length === 0) {
				state.errorMessage = "Не має таких компаній"
			} else {
				state.errorMessage = null
			}
			return filteredList
		}
	},
	mutations: {
		setCompaniesList(state, list) {
			state.companiesList = list
		},
		deleteCompany(state, companyId) {
			const index = state.companiesList.findIndex((company) => company.id === companyId);
			if (index !== -1) {
				state.companiesList.splice(index, 1);
			}
		},
		setMode(state, mode) {
			state.mode = mode;
		},
		changeCompanyInfo(state, companyData) {
			const companyIndex = state.companiesList.findIndex((company) => company.id === companyData.id)
			state.companiesList[companyIndex] = { ...companyData }
		},
		addCompany(state, newCompanyData) {
			const newCompany = {
				id: new Date().getTime(),
				name: newCompanyData.name,
				rate: newCompanyData.rate,
				year: newCompanyData.year,
				owner: newCompanyData.owner,
			}
			state.companiesList.push(newCompany)
		},
		setErrorMessage(state, message) {
			state.errorMessage = message;
		},

		setTitleVal(state, title) {
			state.titleVal = title;
		},
		setRateVal(state, rate) {
			state.rateVal = rate;
		},
		setYearVal(state, year) {
			state.yearVal = year;
		},
		setOwnerVal(state, owner) {
			state.ownerVal = owner;
		},
	},
	actions: {
		getCompaniesList({ commit }) {
			commit("setCompaniesList", companies)
		},
		deleteCompany({ commit }, companyId) {
			commit('deleteCompany', companyId)
		},
		editCompany({ commit }, companyId) {
			commit('setMode', 'edit', companyId);
			console.log("edit");
		},
		createCompany({ commit }) {
			commit('setMode', 'create');
			console.log("create");
		},
		changeCompanyInfo({ commit }, companyData) {
			commit('changeCompanyInfo', companyData)
		},
		addNewCompany({ commit }, newCompanyData) {
			commit('addCompany', newCompanyData)
		},
		setErrorMessage({ commit }, message) {
			commit('setErrorMessage', message);
		},

		updateTitleVal({ commit }, title) {
			commit('setTitleVal', title);
		},
		updateRateVal({ commit }, rate) {
			commit('setRateVal', rate);
		},
		updateYearVal({ commit }, year) {
			commit('setYearVal', year);
		},
		updateOwnerVal({ commit }, owner) {
			commit('setOwnerVal', owner);
		},
	},
});
