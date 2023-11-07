import { jwtDecode } from "jwt-decode";

export function decodeToken(token: any) {
  try {
    const tokenAux = token.replace(/['"]+/g, "");
    return jwtDecode(tokenAux);
  } catch (e: any) {
    localStorage.removeItem(import.meta.env.VITE_TOKEN_NAME);
    window.location.reload();
  }
}
