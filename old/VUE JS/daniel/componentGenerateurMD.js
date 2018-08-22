const MotDePasseGenerator = {
	data: function () {
		return {
			message: '',
			nom:'',
			matricule: '',
			classe: '',
			count: 0,
		}
	},
	template: `
	<div id="motDePasseGenerator">
	<router-link to="/inscription" class="exit-button">X</router-link>      
	{{message}}
	<div class="row">
	Nom:
	<input type='text' id="" placeholder="Entrer votre nom complet"
	v-model="nom"></div>
	<div class="row">
	Matricule/N° CNI:<input type='text' id="" placeholder="matricule/N° CNI"
	v-model="matricule"></div>
	<div class="row">
	Classe(s) enseignée(s): 
	<input type='text' id="" placeholder="classe" v-model="classe">
	</div>
	<button v-on:click="valider">Générer un nouveau mot de passe</button>
	</div>
	`,
	methods: {
		valider: function (enlargeAmount) {

			if(!this.nom.trim() || !this.matricule.trim() || !this.classe.trim() ){
				alert("Bien vouloir entrer toutes les informations requises");
				return;
			};

			identifiantPourMotDePasse = {nom :this.nom, matricule: this.matricule, classe: this.classe}
			console.log('identifiants pour retrouver mot de passe :', identifiantPourMotDePasse)
			alert(JSON.stringify(identifiantPourMotDePasse))}

		}
	};

	// const motDePasseGeneratorVue = new Vue({
	// 	el: '#motDePasseGenerator',
	// 	data: {
	// 		message: 'Veuillez entrer votre mot de passe',
	// 		posts: [
	// 		{ id: 1, title: 'My journey with Vue' },
	// 		{ id: 2, title: 'Blogging with Vue' },
	// 		{ id: 3, title: 'Why Vue is so fun' }
	// 		]
	// 	},
	// 	props: {

	// 	}
	// })

