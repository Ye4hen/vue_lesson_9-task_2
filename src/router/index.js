import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ContactsView from "../views/ContactsView.vue";
import CompanyView from "../views/CompanyView.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: HomeView,
	},
	{
		path: "/about",
		name: "about",
		component: AboutView,
	},
	{
		path: "/contacts",
		name: "contacts",
		component: ContactsView,
	},
	{
		path: "/company",
		name: "create_company",
		component: CompanyView,
	},
	{
		path: "/company/:companyId",
		name: "edit_company",
		component: CompanyView,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
