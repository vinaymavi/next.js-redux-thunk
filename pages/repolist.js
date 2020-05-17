import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { githubUser, repoCount } from '../store/actions'
import GithubUser from '../components/GithubUser';
import RepoList from '../components/RepoList';
import Github from '../github';
import { GITHUB_USER, REPO_LIST } from '../store/types';

class Index extends PureComponent {
  static async getInitialProps({ store, req, query }) {
    // TODO: this logic can be imporved.
    const username = query.username ? query.username : 'vinaymavi';
    let resp = await Github.getGithubUser(username);
    store.dispatch({type:GITHUB_USER,payload:{user:resp.data}});
    resp = await Github.getRepoList(username);
    store.dispatch({type:REPO_LIST,payload:{repolist:resp.data}});
    return {}
  }

  render() {
    return (
      <>
        <Link href={{pathname:"/",query:{username:this.props.github.user.login}}}>Home</Link>
        <GithubUser></GithubUser>
        <RepoList/>
      </>
    )
  }
}

const mapDispatchToProps = {
  repoCount,
}
const mapToState = (state)=>({github:state.github})
export default connect(mapToState, mapDispatchToProps)(Index)
