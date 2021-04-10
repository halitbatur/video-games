import React from "react";
import { Header, FilterBarContainer, FilterContent } from "./FilterBar.Styled";
import { Input, Select } from "antd";
import { ColorPalette } from "../style";

const { Option } = Select;

const FilterBar = () => {
  return (
    <FilterBarContainer>
      <FilterContent>
        <Header>Filter Results</Header>
        <p>Name (contains)</p>
        <Input placeholder="Text String" bordered={false} className="input" />
        <p>Minimum Score</p>
        <Input
          placeholder="1 - 10"
          bordered={false}
          className="input"
          type="number"
        />
        <p>Order By</p>
        <Select
          defaultValue="score"
          bordered={false}
          style={{
            width: "100%",
          }}
          dropdownStyle={{
            color: ColorPalette.headingAndLabels,
            backgroundColor: ColorPalette.inputBackground,
          }}
        >
          <Option value="releasedate">Release Date</Option>
          <Option value="score">Score</Option>
          <Option value="name">Name</Option>
        </Select>
      </FilterContent>
    </FilterBarContainer>
  );
};

export default FilterBar;
