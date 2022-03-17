import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './style';

const Profile = (props) => {
  const { classes } = props;
  return (
    <Grid container className={classes.profile} spacing={2} alignItems="center">
      <Grid container item xs={3} direction="column" alignItems="center">
        <Avatar alt="Not found avatar" src="" className={classes.avatar} />
        <Typography variant="h6">User Name</Typography>
      </Grid>
      <Grid item xs={9}>
        <form className={classes.information}>
          <TextField id="studentId" className={classes.field} label="Mã sinh viên" disabled={true} />
          <TextField id="studentName" className={classes.field} label="Tên sinh viên" disabled={true} />
          <TextField id="studentClass" className={classes.field} label="Lớp" disabled={true} />
          <TextField id="deparment" className={classes.field} label="Khoa" disabled={true} />
          <TextField id="point" className={classes.field} label="Điểm tín nhiệm" disabled={true} />
          <TextField id="note" className={classes.field} label="Ghi chú" variant="outlined" disabled={true} />
        </form>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
