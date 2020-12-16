<template>
	<Page>
		<ActionBar :title="'Simulado ' + title"/>

		<ScrollView orientation="vertical" marginTop="10">
	    	<StackLayout orientation="vertical">
				<HtmlView v-for="(proof) in proofs" :html="proof.question" margin="10"/>

				<Label v-for="(answer, index) in answers"
				@tap="onSelect(answer)"
				backgroundColor="lightgray"
				margin="10"
				padding="10"
				>{{ index }} - {{ answer.answer }}</Label>
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
export default {
	props: {
		title: '',
		slug: ''
	},

	data() {
		return {
			select: '',

			proofs: [
				{
					id: 1,
					question: 'Quem descobriu o Brasil? Pedro Álvares Ca... ',
					answer_id: 1,
					category_id: 1
				},
			],

			answers: [
				{
					id: 1,
					answer: '...bral',
					proof_id: 1,
					category_id: 1
				},
				{
					id: 2,
					answer: '...brel',
					proof_id: null,
					category_id: 1
				},
				{
					id: 3,
					answer: '...bril',
					proof_id: null,
					category_id: 1
				},
				{
					id: 4,
					answer: '...brol',
					proof_id: null,
					category_id: 1
				}
			]
		}
	},

	methods: {
		onSelect(answer) {
			alert(JSON.stringify(answer))

			if (answer.proof_id == 1) {
				alert("Acertou")
			} else {
				alert("Errrrrrouuuuuuuuuuu!")
			}
		}
	}
}
</script>
