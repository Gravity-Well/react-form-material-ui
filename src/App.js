import React,{useState} from 'react';
import ReactDOM from 'react-dom';

import { TextField, Checkbox, Radio, Select } from '@material-ui/core';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
// Picker
// import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  TimePicker,
  DatePicker,
} from '@material-ui/pickers';


export default function App() {

  
const formObj = {
  firstname: "",
  lastname: "",
  email: "",
  employed:false,
  work:"",
  languages:[],
  position:[],
  otherinfo:""


}

  const [formState, setFormState] = useState(formObj)
  
  const formHandler=(ev)=>{    
    ev.preventDefault()
   
    
    }

const handleInputChange=(ev)=> {

    if (ev.target.name==='employed'){
   
      setFormState({
        ...formState,
        [ev.target.name]:ev.target.checked
      })
    }else{
    setFormState({
      ...formState,
      [ev.target.name]:ev.target.value
    })
  }
}


  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h5" align="center" component="h1" gutterBottom>
      Gravity Well Application for Employment Form
      </Typography>
      
      
     
          <form onSubmit={formHandler}>
            <Paper style={{ padding: 16 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                <Grid item xs={6}>
                  <TextField

                    fullWidth
                    required
                    id="firstname"
                    name="firstname"
                    label="First Name"
                    onChange={handleInputChange}
                    value={formState.firstname}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="lastname"
                    name="lastname"
                    label="Last Name"
                    onChange={handleInputChange}
                    value={formState.lastname}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="email"
                    id="email"
                    fullWidth
                    required
                    label="Email"
                    onChange={handleInputChange}
                    value={formState.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    label="Employed"
                    control={
                      <Checkbox
                        name="employed"
                        onChange={handleInputChange}
                        value={formState.employed}
                       
                      />
                    }
                  />
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Work Desirability</FormLabel>
                    <RadioGroup row name="work" onChange={handleInputChange} value={formState.work}>
                      <FormControlLabel
                        value="Full-time"
                        label="Full-time"
                        control={
                          <Radio/>
                        }
                      />
                      <FormControlLabel
                      value="Part-time Fixed hours"
                        label="Part-time Fixed hours"
                        control={
                          <Radio/>
                        }
                      />
                      <FormControlLabel
                      value="Part-time on-demand"
                        label="Part-time on-demand"
                        control={
                          <Radio/>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Languages/Frameworks</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="React"
                        control={
                          <Checkbox
                            name="languages"
                            
                            value="React"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Angular"
                        control={
                          <Checkbox
                            name="languages"
                            
                            value="Angular"
                          />
                        }
                      />
                      <FormControlLabel
                        label="C#"
                        control={
                          <Checkbox
                            name="languages"
                           
                            value="C#"
                          />
                        }
                      />
                      <FormControlLabel
                        label="nodejs"
                        control={
                          <Checkbox
                            name="languages"
                           
                            value="nodejs"
                          />
                        }
                      />
                      
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Position Desired</FormLabel>
                    <FormGroup row>
                      <FormControlLabel
                        label="Front-End"
                        control={
                          <Checkbox
                            name="position"
                           
                            value="Front-End"
                          />
                        }
                      />
                      <FormControlLabel
                        label="Back-End"
                        control={
                          <Checkbox
                            name="position"
                            
                            value="Back-End"
                          />
                        }
                      />
                     
                      
                    </FormGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="otherinfo"
                   
                    multiline
                    label="Other Information"
                  />
                </Grid>
                <Grid item xs={10}>
                  <Select
                    fullWidth
                    name="location"
                    component={Select}
                   
                    formControlProps={{ fullWidth: true }}
                  >
                    <MenuItem value="On-premise">On-premise</MenuItem>
                    <MenuItem value="Remote">Remote</MenuItem>
                    <MenuItem value="combination">
                      Combination
                    </MenuItem>
                  </Select>
                </Grid>
               
                
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    type="button"
                    variant="contained"
                    
                  >
                    Reset
                  </Button>
                </Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                  
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
            <pre>{JSON.stringify(formState,0,2)}</pre>
          </form>
        
      
    </div>
  );
}