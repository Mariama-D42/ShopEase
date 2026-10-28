import { createContext, useContext, useState } from 'react';

const Ctx = createContext();
export const useAuth = () => useContext(Ctx);

const getUsers = () => JSON.parse(localStorage.getItem('users') || '[]');

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem('user') || 'null')
  );

  const start = (u) => {
    const safe = { id: u.id, name: u.name, email: u.email };
    localStorage.setItem('user', JSON.stringify(safe));
    setUser(safe);
  };

  const register = ({ name, email, password }) => {
    const users = getUsers();
    const mail = email.toLowerCase();
    if (users.find((u) => u.email === mail))
      throw new Error('Cet email est déjà utilisé');
    if (password.length < 6)
      throw new Error('Le mot de passe doit faire 6 caractères minimum');
    const u = { id: Date.now().toString(), name, email: mail, password };
    localStorage.setItem('users', JSON.stringify([...users, u]));
    start(u);
  };

  const login = ({ email, password }) => {
    const u = getUsers().find(
      (x) => x.email === email.toLowerCase() && x.password === password
    );
    if (!u) throw new Error('Email ou mot de passe incorrect');
    start(u);
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <Ctx.Provider value={{ user, register, login, logout }}>
      {children}
    </Ctx.Provider>
  );
}
