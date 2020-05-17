import React from 'react';
import { useSelector } from 'react-redux';

const RepoDetail = () => {
  const repodetail = useSelector(state => state.github.repodetail);
  return (
    <React.Fragment>
      <h1>Repo name = {repodetail.name} </h1>
      <table style={{ borderCollapse: "collapse" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{repodetail.name}</td>
          </tr>
          <tr>
            <td>language</td>
            <td>{repodetail.language}</td>
          </tr>
          <tr>
            <td>isPrivate</td>
            <td>{repodetail.private ? "yes" : "no"}</td>
          </tr>
          <tr>
            <td>Desc</td>
            <td>{repodetail.description}</td>
          </tr>
          <tr>
            <td>clone_url</td>
            <td>{repodetail.clone_url}</td>
          </tr>
      </tbody>
    </table>
    </React.Fragment>
  )
}

export default RepoDetail;