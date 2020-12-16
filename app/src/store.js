import Vue from "nativescript-vue"
import Vuex from 'vuex'
import * as AppSettings from '@nativescript/core/application-settings'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		categories: AppSettings.getString('category') ? JSON.parse(AppSettings.getString('category')) : [],
	},

	getters: {
		getCategories: state => {
			return state.categories
		}
	},

	mutations: {
		setCategories(state, category) {
			state.categories = category
		}
	},

	actions: {
		category(context, content) {
			context.commit('setCategories', JSON.parse(content))
			AppSettings.setString('category', content)
		}
	}
})
