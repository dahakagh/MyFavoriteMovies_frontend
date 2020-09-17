


const initialUserData = () => {

  const usersData = { login: "Admin", password: "12345"  }
   

  if (localStorage.getItem("usersData") === null) 
  {
      localStorage.setItem("usersData", JSON.stringify(usersData))
  } 
};

export default initialUserData