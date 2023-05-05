export const isLoggedIn = () => {
  const token =  document.cookie.split("=")[1];
  if(!token){
    console.log("token not found")
    return false;
  }
  if(token){
    console.log("token found")
    return true;
  }
  return false;
    };

