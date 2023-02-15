import * as React from 'react';
import type { FC } from 'react';
import { graphql, HeadFC } from 'gatsby';
import type { PageProps } from 'gatsby';

import { HomeLayout } from '../layouts/home';

export type HomePageData = {
  background1: { publicURL: string };
  background2: { publicURL: string };
  background3: { publicURL: string };
  background4: { publicURL: string };
};

const IndexPage: FC<PageProps<HomePageData>> = ({ data }) => {
  return <HomeLayout data={data} />;
};
export const Head: HeadFC = () => <title>Arbutus | AI Prototype</title>;

export const query = graphql`
  query HomePageQuery {
    background1: file(relativePath: { eq: "gradient-backdrop.svg" }) {
      publicURL
    }
    background2: file(relativePath: { eq: "gradient-backdrop-2.svg" }) {
      publicURL
    }
    background3: file(relativePath: { eq: "gradient-backdrop-3.svg" }) {
      publicURL
    }
    background4: file(relativePath: { eq: "gradient-backdrop-4.svg" }) {
      publicURL
    }
  }
`;

export default IndexPage;
