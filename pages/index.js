import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { githubUser, repoCount } from '../store/actions'
import GithubUser from '../components/GithubUser';
import RepoCount from '../components/RepoCount';
import Github from '../github';
import { GITHUB_USER } from '../store/types';

class Index extends PureComponent {
  static async getInitialProps({ store, req }) {
    // TODO: this logic can be imporved.
    const resp = await Github.getGithubUser('vinaymavi');
    store.dispatch({type:GITHUB_USER,payload:{user:resp.data}});
    return {}
  }

  componentDidMount() {
    this.props.repoCount('vinaymavi');
  }

  render() {
    return (
      <>
        <GithubUser></GithubUser>
        <RepoCount></RepoCount>
      </>
    )
  }
}

const mapDispatchToProps = {
  repoCount,
}

export default connect(null, mapDispatchToProps)(Index)
