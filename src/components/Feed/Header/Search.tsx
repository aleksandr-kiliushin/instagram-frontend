// import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

interface CountryType {
  name: string;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Search() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState<CountryType[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = {json: 'world'}// fetch('https://country.register.gov.uk/records.json?page-size=5000');
      await sleep(1e3); // For demo purposes.
      // @ts-ignore
      const countries = await response.json();

      if (active) {
        setOptions(Object.keys(countries).map((key) => countries[key].item[0]) as CountryType[]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <div className="header__search">
      <Autocomplete
        id="asynchronous-demo"
        style={{ width: 200 }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}

        // @ts-ignore
        getOptionSelected={(option, value) => option.name === value.name}
        // @ts-ignore
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        // @ts-ignore
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search"
            size="small"
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </div>
  )
}