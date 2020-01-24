import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import BackImage from '../components/BackImage';
import Sidebar from '../components/Sidebar';
import FloatingPaper from '../components/FloatingPaper';
import Repos, { ReposProps } from '../components/Github';
import { Repo } from '../services/github/models';
import { GithubState } from '../store/github';
import { getRepos } from '../actions/github';

interface StateProps {
  github: {
    repos: Repo[];
    isLoading?: boolean;
  };
}

interface DispatchProps {
  getReposStart: (userName: string) => void;
}

type EnhancedReposProps = ReposProps & StateProps & DispatchProps;

const Github: FC<EnhancedReposProps> = ({
  repos,
  isLoading,
  getReposStart,
}) => {
  const userName = 'uitspitss';

  useEffect(() => {
    getReposStart(userName);
  }, []);

  return (
    <Sidebar>
      <BackImage image="keyboard.jpg">
        <Repos repos={repos} isLoading={isLoading} />
      </BackImage>
    </Sidebar>
  );
};

const mapStateToProps = (state: { github: GithubState }) => ({
  repos: state.github.repos,
  isLoading: state.github.isLoading,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getReposStart: (userName: string) => getRepos.start({ userName }),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Github);
