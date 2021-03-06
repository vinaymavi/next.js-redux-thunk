import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import {useSelector} from 'react-redux'
import {repoCount } from '../store/actions'
import GithubUser from '../components/GithubUser';
import RepoCount from '../components/RepoCount';
import Github from '../github';
import { GITHUB_USER } from '../store/types';

class Index extends PureComponent {
  static async getInitialProps({ store, req, query }) {
    // TODO: this logic can be imporved.
    const username = query.username ? query.username : 'vinaymavi';
    const resp = await Github.getGithubUser(username);
    store.dispatch({type:GITHUB_USER,payload:{user:resp.data}});
    return {}
  }

  componentDidMount() {
    this.props.repoCount(this.props.github.username);
  }

  render() {
    return (
      <>
        <GithubUser></GithubUser>
        <RepoCount></RepoCount>
        <Link href={{pathname:'/repolist',query:{username:this.props.github.user.login}}} >Repo List</Link>
      </>
    )
  }
}

const mapDispatchToProps = {
  repoCount,
}
const mapStateToProps = (state) => ({
  github : state.github
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)
