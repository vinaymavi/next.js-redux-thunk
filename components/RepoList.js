import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link'
const RepoCount = () => {
  const repolist = useSelector(state => state.github.repolist);
  const user = useSelector(state => state.github.user);
  return (
    <React.Fragment>
      <h1>Repo List </h1>
      <table style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <td>Name</td>
            <td>isPrivate</td>
            <td>desc</td>
            <td>stars</td>
          </tr>
        </thead>
        <tbody>
          {repolist.map((repo) => {
            return (
              <tr>
                <td>
                <Link href={{pathname:"/repodetail",query:{username:user.login,reponame:repo.name}}}>{repo.name}</Link>
                </td>
                <td>{repo.private ? 'yes' : 'no'}</td>
                <td>{repo.description}</td>
                <td>{repo.stargazers_count}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default RepoCount;