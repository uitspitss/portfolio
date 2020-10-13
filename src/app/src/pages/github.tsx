import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import BackImage from '@/components/BackImage';
import Sidebar from '@/components/Sidebar';
import Repos, { ReposProps } from '@/components/Github';
import { Repo } from '@/services/github/models';
import { GithubState } from '@/store/github';
import { getRepos } from '@/actions/github';
import bgImg from '@public/images/keyboard.jpg';

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
      <BackImage image={bgImg}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Github);
