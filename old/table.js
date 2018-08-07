function enregistrer(){

	var nom= document.getElementById('nom').value;

	var note= document.getElementById('note').value;

	var séquence=  document.getElementById('séquence').value;

	alert("C'est OK!!!");

	var table= document.getElementById('regtable');
	var row= table.insertRow();
	var nom= row.insertCell(0); 
	var note= row.insertCell(1);
	var séquence= row.insertCell(2);


	nom.innerHTML= nom;
	note.innerHTML= note;
	séquence.innerHTML= séquence;
	
}