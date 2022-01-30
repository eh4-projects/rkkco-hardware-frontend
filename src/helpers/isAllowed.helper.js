const isAllowed=(userTypes=[],userType="")=>{
    for(let i = 0 ;i<userTypes.length;i++){
      if(userType===userTypes[i]){
        return true;
      }
    }
    return false;
}
export {isAllowed};