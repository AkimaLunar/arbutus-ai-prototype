import * as React from 'react';
import type { FC } from 'react';
import type { HeadFC } from 'gatsby';
import type { PageProps } from 'gatsby';

import { HomeLayout } from '../layouts/home';

type HomePageData = {};

const IndexPage: FC<PageProps<HomePageData>> = () => {

  return <HomeLayout />;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Arbutus | AI Prototype</title>;
