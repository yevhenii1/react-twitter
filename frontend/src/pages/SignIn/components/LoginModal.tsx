import React from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField'
import { ModalBlock } from '../../../components/ModalBlock'
// import { useForm, Controller } from 'react-hook-form'

import { useStylesSignIn } from '..'

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }): React.ReactElement => {
  const classes = useStylesSignIn()
  
  return (
    <ModalBlock visible={open} onClose={onClose} classes={classes} title="Войти в аккаунт">
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <form>
        <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
          <FormGroup aria-label="position" row>
          <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="email"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Пароль"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="filled"
                  type="password"
                  fullWidth
                />
            <Button
              // disabled={loadingStatus === LoadingStatus.LOADING}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth>
              Войти
            </Button>
          </FormGroup>
        </FormControl>
      </form>
    </ModalBlock>
  )
}