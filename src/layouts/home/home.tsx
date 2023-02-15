import * as React from 'react';
import { useState, useEffect } from 'react';
import type { FC } from 'react';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { Text } from '@fluentui/react-text';
import { Tile } from '@microsoft/arbutus.tile';

import { Statement, StatementItem } from './partials';
import { HeroButton } from '../../components/hero-button';
import { MicrosoftLogo } from '../../components/microsoft-logo';
import { useHomeStyles } from './home.styles';
import type { HomeProps } from './home.types';
import { statements, articles, prompts } from './content';
import { Grid } from '../../components/grid';
import { mergeClasses } from '@griffel/react';

const waitForMs = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const HomeLayout: FC<HomeProps> = ({ data }) => {
  const classes = useHomeStyles();
  const space = useSpaceStyles();
  const [string, setString] = useState('I am designing a documentation site for a component library. How do I get started?');
  const [promptNumber, setPromptNumber] = useState(0);

  const onOpenChat = () => {};

  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <MicrosoftLogo />
          <Text block as="h1" weight="bold" className={classes.title}>
            Arbutus
          </Text>
          <Text block size={800} weight="bold">
            Design and build your documentation site.
          </Text>
          <div className={classes.chatTrigger} onClick={onOpenChat}>
            <Text size={400} block weight="bold" as="p">
              How can we help you today?&ensp;
            </Text>
            <Text size={400} block as="p">
              {string}
              <span className={classes.inputCursor} />
            </Text>
          </div>
          <Statement>
            {statements.map(({ headline, description }, i) => (
              <StatementItem key={i} number={i + 1} headline={headline} description={description} />
            ))}
          </Statement>
        </div>
      </div>
      <Grid layout="large" className={classes.articles}>
        {articles.map(({ title, description }, i) => (
          <Tile
            variant="image"
            key={i}
            // @ts-ignore
            imageSrc={data?.[`background${i + 1}`]?.publicURL ?? data?.[`background4`]?.publicURL}
            className={mergeClasses(i === 0 ? space.p12 : space.p9, i === 0 && classes.articleFeatured)}
          >
            <Text block as="h2" size={i === 0 ? 1000 : 600} weight="bold" className={classes.articleTitle}>
              {title}
            </Text>
            <Text block size={i === 0 ? 500 : 300} weight="semibold" className={classes.articleDescription}>
              {description}
            </Text>
          </Tile>
        ))}
      </Grid>
    </>
  );
};
