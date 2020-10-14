import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BackImage from '@/components/BackImage';
import Sidebar from '@/components/Sidebar';
import Repos from '@/components/Github';
import { RootState } from '@/store';
import { fetchRepos } from '@/features/github';
import bgImg from '@public/images/keyboard.jpg';

const GithubPage: FC = () => {
  const userName = 'uitspitss';
  const dispatch = useDispatch();
  const { repos, isLoading } = useSelector((state:RootState) => state.github);

  useEffect(() => {
    dispatch(fetchRepos({ userName }));
  }, [userName, dispatch]);

  return (
    <Sidebar>
      <BackImage image={bgImg}>
        <Repos repos={repos} isLoading={isLoading} />
      </BackImage>
    </Sidebar>
  );
};

export default GithubPage;
