import * as React from 'react';
import type { FC } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import type { ImageProps } from './image.types';
import { useImageStyles } from './image.styles';
import { mergeClasses } from '@griffel/react';

export const Image: FC<ImageProps> = ({ image, className, isRounded, isHero, gatsbyImageProps }) => {
  const imageSrc = getImage(image?.localFile ?? null);
  const isSvg = image?.url?.endsWith('.svg');
  const isGatsbyImage = imageSrc && !isSvg;

  if (!isGatsbyImage && !isSvg) {
    return null;
  }

  const classes = useImageStyles();
  const rootClasses = mergeClasses(isRounded && classes.rounded, isHero && classes.hero, className);

  if (image && isSvg) {
    return <img src={image.url} alt={image.alternativeText} className={rootClasses} />;
  }

  return (
    <GatsbyImage image={imageSrc!} alt={image?.alternativeText ?? ''} className={rootClasses} {...gatsbyImageProps} />
  );
};
