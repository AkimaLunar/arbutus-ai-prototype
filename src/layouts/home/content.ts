type Statements = { headline: string; description: string }[];

export const statements: Statements = [
  {
    headline: 'Best Practices',
    description: 'Learn about the best practices for documentation sites based on rigorous research and testing.'
  },
  {
    headline: 'Shell and Layouts',
    description:
      'Use our shell to create a consistent experience across your documentation site. Choose from a variety of layouts to create the right experience.'
  },
  {
    headline: 'Theming',
    description: 'Make the documentation site your own with theming.'
  },
  {
    headline: 'Components and Utilities',
    description: 'Build your documentation site with our React components and utilities.'
  }
];

type Articles = { title: string; description: string; imageSrc: string }[];

export const articles: Articles = [
  {
    title: 'Guide for designing documentation sites',
    description: 'Proven strategies and patterns for designing documentation sites.',
    imageSrc: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Server side rendering vs static site generation',
    description: 'Learn the pros and cons to see which approach is best for your documentation site.',
    imageSrc: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'How to use the documentation site shell',
    description:
      'Learn how to use the documentation site shell to create a consistent experience across your documentation site.',
    imageSrc: 'https://via.placeholder.com/300x200'
  },
  {
    title: 'Effective technical writing',
    description: 'Check list for writing effective technical documentation.',
    imageSrc: 'https://via.placeholder.com/300x200'
  }
];

export const prompts: string[] = [
  'What is the best way to write documentation?',
  'How do I use the Shell component?',
  'How do I get started with Arbutus?'
];
