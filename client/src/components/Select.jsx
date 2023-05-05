import React, { useState } from "react";
import Select from "react-select";

const SelectboxA = () => {
  const [choice, setChoice] = useState(0);

  const onChange = (value) => {
    // 콜백 함수 정의
  };

  const options = [
    { value: "14", label: "14기" },
    { value: "13", label: "13기" },
    { value: "12", label: "12기" },
    { value: "11", label: "11기" },
    { value: "10", label: "10기" },
    { value: "9", label: "9기" },
    { value: "8", label: "8기" },
    { value: "7", label: "7기" },
    { value: "6", label: "6기" },
    { value: "5", label: "5기" },
    { value: "4", label: "4기" },
    { value: "3", label: "3기" },
    { value: "2", label: "2기" },
    { value: "1", label: "1기" },
  ];
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: "1px solid black",
      borderRadius: "10px",
      height: "46px",
    }),
    option:(styles, { data, isDisabled, isFocused, isSelected }) => {
        // const color = chroma(data.color);
        console.log({ data, isDisabled, isFocused, isSelected });
        return {
          ...styles,
          backgroundColor: isFocused ? "red" : "null",
          color: "#333333"
        };
      },
    menu: (provided) => ({
      ...provided,
      border: "1px solid #2b2d42",
      borderRadius: "8px",
    }),
  };

  return (
    <>
      <Select
        styles={customStyles}
        value={options.find((op) => {
          // choice state에 따라 디폴트 option 세팅
          return op.value === choice;
        })}
        placeholder="기수를 선택해주세요."
        onChange={(value) => {
          onChange(value.value);
        }}
        options={options}
      />
    </>
  );
};

const SelectboxB = () => {
    const [choice, setChoice] = useState(0);
  
    const onChange = (value) => {
      // 콜백 함수 정의
    };
  
    const options = [
      { value: "React", label: "React" },
      { value: "Spring", label: "Spring" },
      { value: "Node.js", label: "Node.js" },
    ];
    const customStyles = {
      control: (provided) => ({
        ...provided,
        border: "1px solid black",
        borderRadius: "10px",
        height: "46px"
      }),
      option:(styles, { data, isDisabled, isFocused, isSelected }) => {
          // const color = chroma(data.color);
          console.log({ data, isDisabled, isFocused, isSelected });
          return {
            ...styles,
            backgroundColor: isFocused ? "red" : "null",
            color: "#333333"
          };
        },
      menu: (provided) => ({
        ...provided,
        border: "1px solid #2b2d42",
        borderRadius: "8px",
      }),
    };
  
    return (
      <>
        <Select
          styles={customStyles}
          value={options.find((op) => {
            // choice state에 따라 디폴트 option 세팅
            return op.value === choice;
          })}
          placeholder="주특기를 선택해주세요."
          onChange={(value) => {
            onChange(value.value);
          }}
          options={options}
        />
      </>
    );
  };
  const SelectboxC = () => {
    const [choice, setChoice] = useState(0);
  
    const onChange = (value) => {
      // 콜백 함수 정의
    };
  
    const options = [
        { value: "React", label: "React" },
        { value: "Spring", label: "Spring" },
        { value: "Node.js", label: "Node.js" },
    ];
    const customStyles = {
      control: (provided) => ({
        ...provided,
        border: "1px solid black",
        borderRadius: "10px",
        height: "30px",
        width:"270px"
      }),
      option:(styles, { data, isDisabled, isFocused, isSelected }) => {
          // const color = chroma(data.color);
          console.log({ data, isDisabled, isFocused, isSelected });
          return {
            ...styles,
            backgroundColor: isFocused ? "red" : "null",
            color: "#333333"
          };
        },
      menu: (provided) => ({
        ...provided,
        border: "1px solid #2b2d42",
        borderRadius: "8px",
      }),
    };
  
    return (
      <>
        <Select
          styles={customStyles}
          value={options.find((op) => {
            // choice state에 따라 디폴트 option 세팅
            return op.value === choice;
          })}
          placeholder="주특기를 선택해주세요."
          onChange={(value) => {
            onChange(value.value);
          }}
          options={options}
        />
      </>
    );
  };

const Selectbox = {SelectboxA, SelectboxB, SelectboxC}
export default Selectbox;
