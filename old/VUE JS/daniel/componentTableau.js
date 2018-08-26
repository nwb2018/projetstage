const tableauRegistre = {
	data: function () {
		return {
			listeNotes: [],
			noteToCreate: {nom: '', note: '', seq: '', id: ''},
			dernierIDInsere: 1,
			listeEleves: ["Atangana Mba","Badjeck Ball","Boum ","Fodjo","edoa","Daniel"]
		}
	},
	template: `
	<div class="conteneur">
	<div class="tableau1">
	<table id="table" border="1">
	<tr>
	<th>NOM complet de l'élève</th>
	<th>NOTE de l'élève</th>

	<th>N° séquence</th>
	</tr>

	<tr v-for="note in listeNotes" v-on:click="envoie(note)" >
	<th>{{note.nom}}</th>
	<th>{{note.note}}</th>
	<th>{{note.seq}}</th>
	</tr>

	</table>
	</div>
	<div class="tab" >
	<form>
	NOM complet de l'élève : <input list="name" v-model='noteToCreate.nom' name="nom" id="nom">
	<datalist id="name">
	<option v-for="nom in listeEleves" :value='nom'>
	</datalist>
	</form>

	NOTE de l'élève : <input type="number" v-model='noteToCreate.note' name="note" id="note">
	N° séquence : <input type="number" v-model='noteToCreate.seq' name="seq" id="seq">

	<button v-on:click="valider">Enregistrer</button>
	<button v-on:click="test">Modifier</button>
	<button v-on:click="supprimer">Supprimer</button>
	</div>
	</div>

	`,
	methods: {

		valider: function () {

			if(!this.noteToCreate.nom.trim() || 
				!this.noteToCreate.note.trim() || 
				!this.noteToCreate.seq.trim() ){
				alert("Bien vouloir entrer toutes les informations requises");
			return;
		};

		if(this.noteToCreate.note >= 20 || this.noteToCreate.seq >=7) {
			
			alert("veillez entrer les valeurs exactes !");
			return;
		};



		let noteAAjouter = Object.assign({},this.noteToCreate)
		noteAAjouter['id'] = this.dernierIDInsere
		console.log('note a ajouter :', noteAAjouter)
		this.listeNotes.push(noteAAjouter)
		this.dernierIDInsere = this.dernierIDInsere + 1
		console.log(JSON.stringify(this.listeNotes),this.nom_a_ajouter)
		this.noteToCreate = {nom: '', note: '', seq: '', id : ''}



	},




	modifier: function () {

		if(!this.noteToCreate.nom.trim() || 
			!this.noteToCreate.note.trim() || 
			!this.noteToCreate.seq.trim() ){
			alert("Bien vouloir entrer toutes les informations requises");
		return;
	};

	if(this.noteToCreate.note >= 20 || this.noteToCreate.seq >=7) {
		alert("veillez entrer les valeurs exactes !");
		return;
	};



	let noteAAjouter = Object.assign({},this.noteToCreate)
	noteAAjouter['id'] = this.dernierIDInsere
	console.log('note a ajouter :', noteAAjouter)
	noteAAjouter=this.listeNotes 
	this.dernierIDInsere = this.dernierIDInsere 
	console.log(JSON.stringify(this.listeNotes),this.nom_a_ajouter)
	this.noteToCreate = {nom: '', note: '', seq: '', id : ''}
},




envoie: function (noteAModifier) {
	console.log(JSON.stringify(noteAModifier))
	this.noteToCreate = noteAModifier 

	a = this.listeNotes.findIndex(note => note.id === noteAModifier.id)
	console.log(a)
},

test: function() {
	var MongoClient = import('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("mydb");
		var myobj = [
		{ name: 'John', address: 'Highway 71'},
		{ name: 'Peter', address: 'Lowstreet 4'},
		{ name: 'Amy', address: 'Apple st 652'},
		{ name: 'Hannah', address: 'Mountain 21'},
		{ name: 'Michael', address: 'Valley 345'},
		{ name: 'Sandy', address: 'Ocean blvd 2'},
		{ name: 'Betty', address: 'Green Grass 1'},
		{ name: 'Richard', address: 'Sky st 331'},
		{ name: 'Susan', address: 'One way 98'},
		{ name: 'Vicky', address: 'Yellow Garden 2'},
		{ name: 'Ben', address: 'Park Lane 38'},
		{ name: 'William', address: 'Central st 954'},
		{ name: 'Chuck', address: 'Main Road 989'},
		{ name: 'Viola', address: 'Sideway 1633'}
		];
		dbo.collection("customers").insertMany(myobj, function(err, res) {
			if (err) throw err;
			console.log("Number of documents inserted: " + res.insertedCount);
			db.close();
		});
	});
},






supprimer: function() {
	indexNoteASupprimer = this.listeNotes.findIndex(note => note.id === this.noteToCreate.id)
	console.log("note_a_modifier", this.noteToCreate, indexNoteASupprimer)

	if (indexNoteASupprimer >=0){
		this.listeNotes.splice(indexNoteASupprimer,1)
	}
}



}
};