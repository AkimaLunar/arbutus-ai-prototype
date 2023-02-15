import { makeStyles, shorthands } from '@griffel/react';
import { HEADER_HEIGHT } from '@microsoft/arbutus.shell';

export const useHomeStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh)',
    display: 'grid',
    position: 'relative',
    top: `-${HEADER_HEIGHT}`,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(180deg, #EAF3EF 0%, #DADFEC 100%)'
  },
  container: {
    width: 'calc(100vw - 2 * 40px)',
    height: `calc(100vh - 2 * 40px)`,
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    borderBottomRightRadius: '24px',
    borderBottomLeftRadius: '24px',
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingLeft: '40px',
    paddingRight: '40px',
    backgroundImage:
      'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)'
  },
  gradientTransition: {
    height: '340px',
    width: '100%',
    position: 'absolute',
    bottom: '0'
  },
  title: {
    fontSize: '120px',
    marginTop: '80px',
    marginBottom: '20px',
    lineHeight: '120px',
    backgroundImage: 'linear-gradient(90.63deg, #65DBA9 0%, #436DCD 54.72%)',
    backgroundClip: 'text',
    textFillColor: 'transparent'
  },
  chatTrigger: {
    height: '160px',
    width: '30%',
    marginTop: '40px',
    marginBottom: '80px',
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingLeft: '24px',
    paddingRight: '24px',
    cursor: 'text',
    ...shorthands.border('1px', 'solid', '#DADFEC'),
    ...shorthands.borderRadius('24px')
  },
  inputCursor: {
    verticalAlign: '-14%',
    display: 'inline-block',
    width: '4px',
    height: '22px',
    backgroundColor: 'hsla(167, 60%, 38%, 1)',
    marginLeft: '8px',
    animationIterationCount: 'infinite',
    animationDuration: '0.6s',
    animationTimingFunction: 'linear',
    animationDirection: 'alternate',
    animationName: {
      '0%': { opacity: 1 },
      '40%': { opacity: 1 },
      '60%': { opacity: 0 },
      '100%': { opacity: 0 }
    }
  },
  articles: {
    marginTop: `-${HEADER_HEIGHT}`,
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingBottom: '80px',
    paddingTop: '40px',
    backgroundImage: 'linear-gradient(180deg, #DADFEC 0%, rgba(255,255,255,1) 100%)',
    gridAutoRows: 'minmax(200px, auto)',
    gridRowGap: '24px',
    gridColumnGap: '24px'
  },
  articleTitle: {
    color: 'rgba(255, 255, 255, 1)'
  },
  articleDescription: {
    color: 'rgba(255, 255, 255, 0.85)'
  },
  articleFeatured: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridRowStart: 1,
    gridRowEnd: 3
  }
});
