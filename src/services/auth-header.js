export default function authHeader() {

    var user = JSON.parse(localStorage.getItem(user));
  // console.log(user);
    if (user && user.accessToken) {
      // for Node.js Express back-end
      return { 'x-access-token': user.accessToken };
    } else {
      
      return {};
    }
  }