import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import {repoCount } from '../store/actions'
import GithubUser from '../components/GithubUser';
import RepoDetail from '../components/RepoDetail';
import Github from '../github';
import { GITHUB_USER, REPO_LIST, REPO_DETAIL } from '../store/types';

class Index extends PureComponent {
  static async getInitialProps({ store, req, query }) {
    // TODO: this logic can be imporved.
    const username = query.username;
    const reponame = query.reponame;
    let resp = await Github.getGithubUser(username);
    store.dispatch({type:GITHUB_USER,payload:{user:resp.data}});
    resp = await Github.getRepoDetails(username,reponame);
    store.dispatch({type:REPO_DETAIL,payload:{repodetail:resp.data}});
    return {}
  }

  render() {
    return (
      <>
        <Link href={{pathname:"/",query:{username:this.props.github.user.login}}}>Home</Link>&nbsp; &nbsp; &nbsp;
        <Link href={{pathname:"/repolist",query:{username:this.props.github.user.login}}}>Repo List</Link>
        <GithubUser></GithubUser>
        <RepoDetail/>
      </>
    )
  }
}

const mapDispatchToProps = {
  repoCount,
}
const mapStateToProsp = (state)=>({github:state.github});
export default connect(mapStateToProsp, mapDispatchToProps)(Index)


