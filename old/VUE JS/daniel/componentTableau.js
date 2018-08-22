const tableauRegistre = {
	template: `
	<div class="conteneur">
		<div class="tableau1">
			<table id="table" border="1">
				<tr>
					<th>NOM complet de l'élève</th>
					<th>NOTE de l'élève</th>

					<th>N° séquence</th>
				</tr>

			</table>
		</div>
		<div class="tab" >
			NOM complet de l'élève : <input type="text" name="nom" id="nom">
			NOTE de l'élève : <input type="number" name="note" id="note">
			N° séquence : <input type="number" name="seq" id="seq">

			<button v-on:click="valider">Enregistrer</button>
			<button v-on:click="valider">Modifier</button>
			<button v-on:click="valider">Supprimer</button>
		</div>
	</div>

	<script type="text/javascript">



		
	</script>
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