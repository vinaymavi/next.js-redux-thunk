import React from 'react';
import {useSelector} from 'react-redux';

const GithubUser = ()=>{
  const user = useSelector(state=>state.github.user);
  return (
    <React.Fragment>
      <h1>Github user name = {user.name} </h1>
      <table>
        <tr>
          <td>Name</td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Public Repo</td>
          <td>{user.public_repos}</td>
        </tr>
        <tr>
          <td>Public Gists</td>
          <td>{user.public_gists}</td>
        </tr>
      </table>
    </React.Fragment>
  )
}

export default GithubUser;