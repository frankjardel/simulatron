<template>
	<ScrollView orientation="vertical" marginTop="10">
    	<StackLayout orientation="vertical">
    		<Label text="Simulados" marginLeft="15"/>

        	<Button v-for="item in categories"
        		@tap="show(item)"
        		height="70"
        		>
				<FormattedString>
					<Span :text="item.title" fontWeight="bold" />
				</FormattedString>
        	</Button>

        	<Button @tap="loadCategory" text="test"/>
    	</StackLayout>
	</ScrollView>
</template>

<script>
import Proofs from '@/components/Proofs'
const httpModule = require("tns-core-modules/http")

export default {
	name: 'Categories',

	props: [
		"title",
		"slug"
	],

   data() {
      return {
      }
   },

   created() {
   	this.loadCategory()
   },

	methods: {
		loadCategory() {
			httpModule.request({
			   url: this.$api+'category/',
			   method: "GET"
			})
			.then((response) => {
				this.$store.dispatch('category', response.content)
			}, (err) => {
				alert(err)
			})
		},

		show(item) {
			this.$navigateTo(Proofs, {props: { title: item.title, slug: item.slug }})
		}
	},

	computed: {
		categories() {
			return this.$store.state.categories
		}
	}
}
</script>
