import React, { useContext } from 'react';
import { Switch } from 'react-router';
import { CustomInput } from '../common/forms/customInput';
import { AuthContextAPI } from '../contexts/auth.context';


const MainRouter = () => {
  const { auth } = useContext(AuthContextAPI);
  return (
    <div >
      <Switch>
        <CustomInput/>
      </Switch>
    </div>
  );
}

export { MainRouter };
