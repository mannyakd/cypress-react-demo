import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme, createMuiTheme } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { palette } from '@material-ui/system';
import Box from '@material-ui/core/Box';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch'
      },
    },
  }),
);

function App() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          <label>
            Pick your favorite testing tool:
          <select>
              <option value="cypress">Cypress</option>
              <option value="selenium">Selenium</option>
              <option value="playwright">Playwright</option>
              <option value="testproject">TestProject</option>
            </select>
          </label>

        </p>
        <p>
          <textarea id="textarea">
          Cypress component tests!!!
          </textarea>
        </p>

        <p>
          <label>
            Is going:
          <input
              name="isGoing"
              type="checkbox" />
          </label>
        </p>

        <div>

          <Box bgcolor="success.main" color="success.contrastText" p={2}>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Hello World"
              variant="filled"
            />
          </Box>

        </div>


      </header>
      <footer>


        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction id="recent" label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction id="favorite" label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction id="nearby" label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </footer>
    </div>
  );
}

export default App;
