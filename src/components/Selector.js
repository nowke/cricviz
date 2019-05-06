import React from "react";
import Select from "react-select";

function Selector({ value, onChange, data }) {
  return (
    <Select
      value={value}
      label="Select team"
      options={data}
      onChange={onChange}
      styles={{
        control: provided => ({
          ...provided,
          borderColor: "#fff",
          background: "#2d3436",
          "&:hover": {
            borderColor: "#fff"
          }
        }),
        indicatorsContainer: provided => ({
          ...provided,
          color: "fff",
          "&:hover": {
            color: "#fff"
          }
        }),
        singleValue: provided => ({
          ...provided,
          color: "#fff"
        })
      }}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: "#c7e4ec",
          primary: "#2d3436",
          neutral20: "#fff",
          neutral30: "#fff",
          neutral40: "#fff",
          neutral50: "#fff",
          neutral60: "#fff",
          neutral70: "#fff",
          neutral80: "#fff",
          neutral90: "#fff"
        }
      })}
    />
  );
}

export default Selector;
