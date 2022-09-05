import decode from 'jwt-decode';

export function isAuthenticated() {
  const token = localStorage.getItem('token');

  if (!token) return false;

  const decoded = decode(token);

  if (decoded.exp > Date.now() / 1000) return decoded.data;
}