import { makeStyles } from '@griffel/react';
import { HEADER_HEIGHT } from '@microsoft/arbutus.shell';

export const useHomeStyles = makeStyles({
  root: {
    minHeight: 'calc(100vh)',
    display: 'grid',
    position: 'relative',
    top: `-${HEADER_HEIGHT}`,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    width: 'calc(100vw - 2 * 40px)',
    height: `calc(100vh - 2 * 40px)`,
    backgroundColor: 'white',
    borderTopLeftRadius: '24px',
    borderTopRightRadius: '24px',
    borderBottomRightRadius: '24px',
    borderBottomLeftRadius: '24px',
    paddingTop: '40px',
    paddingBottom: '40px',
    paddingLeft: '40px',
    paddingRight: '40px'
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
    height: '220px',
    width: '30%',
    marginTop: '40px',
    marginBottom: '40px',
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingLeft: '24px',
    paddingRight: '24px'
  }
});
