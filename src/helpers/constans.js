import jwtDecode from "jwt-decode";

export const tokenJwt = sessionStorage.getItem("token") ? jwtDecode(sessionStorage.getItem("token")) : null;

export const formatPrice = (price) => "$" + Intl.NumberFormat('de-DE').format(price);
