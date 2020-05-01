import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import LocationMap from './LoactionMap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    marg: {
      marginTop: 25,
      marginBottom: 50,
    },
    
  }));

export default function About() {
    const classes = useStyles();
  return (
    <div>
    <Container component="main" maxWidth="md">
        <Typography align='center' variant='h3'>O nas</Typography>
        <Typography align='center' variant='body1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus leo in porta blandit. Sed faucibus neque vitae massa gravida, a faucibus orci varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Suspendisse vehicula ac augue in fringilla. Ut turpis lorem, convallis nec fermentum quis, ultricies quis mauris. Aliquam nec tellus in leo elementum ullamcorper. Nulla bibendum ligula vel lorem tempus feugiat. Sed arcu lacus, euismod vitae viverra eget, laoreet at libero. Donec mollis venenatis posuere.

        Pellentesque in egestas mi, sit amet eleifend sapien. Proin scelerisque dapibus dui non gravida. Donec non velit tincidunt, efficitur nibh vitae, scelerisque erat. Sed molestie quis enim quis laoreet. Morbi mollis dolor nec mattis eleifend. Praesent at eros vel augue consectetur sagittis. Etiam vel porttitor libero. Quisque fringilla arcu a dolor consectetur, in tincidunt lorem maximus. Nunc sit amet arcu sit amet elit lacinia ornare eget ut sapien.
        </Typography>
        <Typography align='center' variant='h4' className={classes.marg}>Znajdź nas</Typography>
        <LocationMap />
    </Container>
    </div>
  );
}