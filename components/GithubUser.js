import React from 'react';
import {useSelector} from 'react-redux';

const GithubUser = ()=>{
  const user = useSelector(state=>state.github.user);
  return (
    <React.Fragment>
      <h1>Github user name = {user.name} </h1>
    </React.Fragment>
  )
}

export default GithubUser;