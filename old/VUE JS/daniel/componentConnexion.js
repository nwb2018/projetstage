const ConnexionComponent = {template: `<div class="login">
	  	<img src="image/logo.jpg" class="avatar" style="border-radius: 50%;">

	  	<h1>CONNEXION</h1>
	  	<form>
	  		<p>Nom d'utilisateur:</p>
	  		<input type="text" name="utilisateur" placeholder="Entrer votre nom d'utilisateur">

	  		<p>Mot de passe:</p>
	  		<input type="password" name="passe" placeholder="Entrer votre mot de passe">
	  		<router-link to="/inscription/tableau"><input type="submit" name="submit" value="Se connecter"></router-link>
	  		<router-link to="/inscription/mdpoublie"> Mot de passe oublié? </router-link>      
	  		

	  	</form>

	  </div>`};
