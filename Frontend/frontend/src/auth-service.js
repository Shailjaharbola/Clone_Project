let isUserLoggedIn=null;
export default {
//const isUserLoggedIn;
  getAuth () {
      return sessionStorage.getItem("token");
   },
 async setAuth (data) {
      sessionStorage.setItem("token", data);
      this.isUserLoggedIn=data;
   },
 async removeToken () {
     sessionStorage.removeItem("token");
   }
}