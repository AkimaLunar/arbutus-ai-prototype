import * as React from 'react';
import type { FC } from 'react';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import { Text } from '@fluentui/react-text';
import { Tile } from '@microsoft/arbutus.tile';

import { Statement, StatementItem } from './partials';
import { HeroButton } from '../../components/hero-button';
import { MicrosoftLogo } from '../../components/microsoft-logo';
import { useHomeStyles } from './home.styles';
import type { HomeProps } from './home.types';
import { statements } from './content';

export const HomeLayout: FC<HomeProps> = () => {
  const classes = useHomeStyles();
  const space = useSpaceStyles();
  
  const onOpenChat = () => {};

  return (
    <div className={classes.root} style={{ background: 'linear-gradient(0deg, #EAF3EF 0%, #DADFEC 100%)' }}>
      <div
        className={classes.container}
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%'
        }}
      >
        <MicrosoftLogo />
        <Text block as="h1" weight="bold" className={classes.title}>
          Arbutus
        </Text>
        <Text block size={800} weight="bold">
          Design and build your documentation site.
        </Text>
        <Tile variant='card' className={classes.chatTrigger} onClick={onOpenChat}>
          Get started with Arbutus.
        </Tile>
        <Statement>
          {statements.map(({ headline, description }, i) => (
            <StatementItem key={i} number={i + 1} headline={headline} description={description} />
          ))}
        </Statement>
      </div>
    </div>
  );
};
