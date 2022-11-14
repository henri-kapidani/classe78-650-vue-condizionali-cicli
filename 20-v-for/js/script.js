const app = new Vue({
	el: '#root',
	data: {
		arrNames: ['Pinco', 'Pallino', 'Rossi', 'Bianchi', 'Nuovo Nome'],
		arrObjs: [
			{
				name: 'Pinco',
				age: 25,
			},
			{
				name: 'Pallino',
				age: 30,
			},
			{
				name: 'Rossi',
				age: 32,
			},
			{
				name: 'Bianchi',
				age: 20,
			},
		],
		name: '',
		age: '',

		activeIndex: 0,
	},
	methods: {
		addPerson() {
			console.log(this.name, this.age)
			this.arrObjs.push({
				name: this.name,
				age: this.age
			});
			this.name = '';
			this.age = '';
		},
		sayHi(text) {
			console.log(text);
		},
		sayBy() {
			console.log('bye');
		}
	}
});
