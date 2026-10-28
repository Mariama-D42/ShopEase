import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    alert("Le formulaire fonctionne !");

  }

  return (

    <div className="login-container">

      <h1>Se connecter</h1>

      <p>Bienvenue ! Connecte-toi à ton compte.</p>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label htmlFor="email">Adresse e-mail</label>

          <input

            id="email"

            type="email"

            placeholder="exemple@email.com"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

            required

          />

        </div>

        <div className="form-group">

          <label htmlFor="password">Mot de passe</label>

          <input

            id="password"

            type="password"

            placeholder="Entre ton mot de passe"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

            required

          />

        </div>

        <button type="submit">Se connecter</button>

      </form>

    </div>

  );

}