import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { useHistory } from 'react-router'
import Alert from '@material-ui/lab/Alert'
import { actions, register } from '../../redux/auth-reducer'
import { Button, createStyles, IconButton, makeStyles, TextField, Theme } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'



import Collapse from '@material-ui/core/Collapse'


const Register: React.FC<Props> = ({errMsg, redirectTo, register, setErrMsg, setRedirectTo}) => {

  const history = useHistory()

  const [username, setUsername] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  
  const onRegister = () => {
    if (username && password1 && password2) {
      if (password1 === password2) {
        register(username, password1)
      } else {
        setErrMsg('Passwords don\'t match.')
      }
    } else {
      setErrMsg('Each field is required.')
    }
  }


  useEffect(() => {
    if (errMsg) {
      setTimeout(() => {
        setErrMsg('')
      }, 5000)
    }
  }, [errMsg, setErrMsg])


  useEffect(() => {
    if (redirectTo) {
      setRedirectTo('')
      history.push(redirectTo)
    }
  }, [history, redirectTo, setRedirectTo])

  
  return (
    <div className="acc">
      <h1>Instagram</h1>

      <TextField label="Username" onChange={e => setUsername(e.target.value)} type="text" value={username}/>

      <TextField label="Password" onChange={e => setPassword1(e.target.value)} type="password" value={password1}/>
      <TextField label="Confirm password" onChange={e => setPassword2(e.target.value)} type="password" value={password2}/>
      <Button onClick={onRegister}>Register</Button>

      <div className="err">
        {errMsg ? <p>{errMsg}</p> : null}
      </div>

      <p>Already have an accout?</p>
      <Button onClick={() => history.push('/login')}>Sign in</Button>

      <TransitionAlerts />
    </div>
  )
}

const mapStateToProps = (state: RootState): MapStateProps => ({
  errMsg: state.auth.errMsg,
  redirectTo: state.auth.redirectTo,
})

const {setErrMsg, setRedirectTo} = {...actions}
const mapDispatchToProps: MapDispatchProps = {
  register,
  setErrMsg,
  setRedirectTo,
}

export default connect
  <MapStateProps, MapDispatchProps, {}, RootState>
  (mapStateToProps, mapDispatchToProps)(Register)



// types

type MapStateProps = {
  errMsg: string
  redirectTo: string
}
type MapDispatchProps = {
  register: (username: string, password: string) => void
  setErrMsg: (msg: string) => void
  setRedirectTo: (to: string) => void
}
type Props = MapStateProps & MapDispatchProps







const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

function TransitionAlerts() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert>
      </Collapse>
      <Button
        disabled={open}
        variant="outlined"
        onClick={() => {
          setOpen(true);
        }}
      >
        Re-open
      </Button>
    </div>
  );
}