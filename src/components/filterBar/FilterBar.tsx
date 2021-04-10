import React, { ChangeEventHandler } from "react";
import {
  Header,
  FilterBarContainer,
  FilterContent,
  IntpuContainer,
} from "./FilterBar.Styled";
import { Input, InputNumber, Select } from "antd";
import { ColorPalette } from "../style";
import { GameCardProps } from "../gameCard/GameCard";
import { setFlagsFromString } from "v8";

const { Option } = Select;

interface GameFilters {
  contains: string;
  minScore: number | null;
  orderBy: {
    type: string;
    order: string;
  };
}

interface FilterBarProps {
  games: GameCardProps[] | undefined;
  setFilteredGames: React.Dispatch<
    React.SetStateAction<GameCardProps[] | undefined>
  >;
}

const FilterBar: React.FC<FilterBarProps> = ({ games, setFilteredGames }) => {
  const [filters, setFilters] = React.useState<GameFilters>({
    contains: "",
    minScore: null,
    orderBy: {
      type: "",
      order: "",
    },
  });

  const ApplyFilters = (inputValue: string, minScore: number) => {
    setFilteredGames(() => {
      const filteredGames: GameCardProps[] = [...games];
      const filter = inputValue.toLowerCase();
      return filteredGames.filter((game) => {
        const gameName = game.name.toLowerCase();
        const gameRating = game.rating / 10;
        return gameName.includes(filter) && gameRating > minScore;
      });
    });
  };

  const filterByString = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setFilters({ ...filters, contains: inputValue });
    ApplyFilters(inputValue, filters.minScore);
  };

  const filterByMinScore = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minScore = e.target.value ? parseInt(e.target.value) : null;
    setFilters({ ...filters, minScore });
    ApplyFilters(filters.contains, minScore);
  };

  return (
    <FilterBarContainer>
      <FilterContent>
        <Header>Filter Results</Header>
        <IntpuContainer>
          <p>Name (contains)</p>
          <Input
            placeholder="Text String"
            bordered={false}
            value={filters?.contains}
            onChange={filterByString}
            className="input"
          />
        </IntpuContainer>
        <IntpuContainer>
          <p>Minimum Score</p>
          <Input
            placeholder="1 - 10"
            bordered={false}
            value={filters?.minScore}
            onChange={filterByMinScore}
            className="input"
            type="number"
          />
        </IntpuContainer>
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
