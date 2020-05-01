import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  marg: {
    marginTop: 25
  },
}));

export default function Regulamin() {
  const classes = useStyles();
  return (
    <div>
    <Container component="main" maxWidth="md">
    <div className={`${classes.root} ${classes.marg}`}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Postanowienia ogólne</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget. 
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Godziny otwarcia, rezerwacje, opłaty</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Mauris sit amet lorem et erat volutpat fermentum. Nam viverra arcu eu aliquet porttitor. Aenean porta tellus in convallis fermentum. Donec pretium rhoncus arcu, vitae porttitor orci pulvinar vitae. Maecenas porta ornare enim, vitae elementum sem molestie ut. Curabitur turpis quam, fermentum sed erat lacinia, consequat posuere purus. Aenean in feugiat diam. In id condimentum mi. Vestibulum feugiat mattis neque sit amet cursus. Curabitur ornare feugiat erat vel aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla id faucibus ante, vitae posuere tortor. Nullam dignissim velit non odio aliquet, et tempor magna commodo. Nulla lorem magna, pharetra nec mauris eu, tincidunt viverra ipsum. Vestibulum aliquet odio vel libero efficitur fringilla. Duis finibus vestibulum turpis vel tincidunt.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Zasady bezpieczeństwa </Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
     
    </Container>
    </div>
  );
}