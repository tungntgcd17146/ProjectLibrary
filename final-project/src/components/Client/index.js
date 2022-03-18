import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { styles } from './style';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const BookAlbum = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <main>
        <Container>
          <Grid container spacing={5}>
            {cards.map((card) => (
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://m.media-amazon.com/images/I/51S4VEe99IL.jpg" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="title" component="h2" color="primary">
                      Book Title
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      Author
                    </Typography>
                    <Typography variant="subtitle2">Status</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="medium" variant="contained" color="primary">
                      Borrow
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

BookAlbum.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookAlbum);
