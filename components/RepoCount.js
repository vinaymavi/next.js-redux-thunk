import React from 'react';
import {useSelector} from 'react-redux';

const RepoCount = () => {
  const github = useSelector(state=>state.github);
  return(
    <React.Fragment>
    <h1>Total Repository count = {github.repocount} </h1>
    <p>Repo count rendered on client side.</p>
    <button onClick={()=>{
      console.log("Repo List");
    }} >List Repos</button>
    </React.Fragment>
  )
}

export default RepoCount;