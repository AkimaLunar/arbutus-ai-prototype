import type { ImageDataLike, GatsbyImageProps } from 'gatsby-plugin-image';

export type ImageProps = {
  image?: {
    alternativeText: string;
    url?: string;
    localFile: ImageDataLike;
  };
  className?: string;
  isRounded?: boolean;
  isHero?: boolean;
  gatsbyImageProps?: Omit<GatsbyImageProps, 'alt' | 'image'>;
};
