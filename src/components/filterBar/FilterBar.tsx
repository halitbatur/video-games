import React from "react";
import { Header, FilterBarContainer, FilterContent } from "./FilterBar.Styled";
import { Input } from "antd";
import { ColorPalette } from "../style";

const FilterBar = () => {
  return (
    <FilterBarContainer>
      <FilterContent>
        <Header>Filter Results</Header>
        <p>Name (contains)</p>
        <Input
          placeholder="Text String"
          bordered={false}
          style={{
            backgroundColor: ColorPalette.inputBackground,
            color: ColorPalette.headingAndLabels,
            marginBottom: "30px",
          }}
        />
        <p>Minimum Score</p>
        <Input
          placeholder="1 - 10"
          bordered={false}
          style={{
            backgroundColor: ColorPalette.inputBackground,
            color: ColorPalette.headingAndLabels,
          }}
        />
      </FilterContent>
    </FilterBarContainer>
  );
};

export default FilterBar;
