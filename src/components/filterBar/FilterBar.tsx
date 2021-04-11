import React from "react";
import {
  Header,
  FilterBarContainer,
  FilterContent,
  IntpuContainer,
  ArrowContainer,
} from "./FilterBar.Styled";
import { Input, Select, Button } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { ColorPalette } from "../style";
import { GameCardProps } from "../gameCard/GameCard";

const { Option } = Select;

interface GameFilters {
  contains: string;
  minScore: number | null;
  orderBy: {
    type: string;
    order: "asc" | "dsc";
  };
}

const defatultFilters: GameFilters = {
  contains: "",
  minScore: null,
  orderBy: {
    type: "",
    order: "asc",
  },
};

interface FilterBarProps {
  games: GameCardProps[] | undefined;
  setFilteredGames: React.Dispatch<
    React.SetStateAction<GameCardProps[] | undefined>
  >;
}

const FilterBar: React.FC<FilterBarProps> = ({ games, setFilteredGames }) => {
  const [filters, setFilters] = React.useState<GameFilters>(defatultFilters);

  const compareGames = (a, b) => {
    let firstElement, secondElement;

    if (filters.orderBy.type === "first_release_date") {
      firstElement = new Date(a.first_release_date).getTime();
      secondElement = new Date(b.first_release_date).getTime();
    } else if (filters.orderBy.type === "name") {
      firstElement = a.name.toLowerCase();
      secondElement = b.name.toLowerCase();
    } else if (filters.orderBy.type === "rating") {
      firstElement = a.rating;
      secondElement = b.rating;
    } else {
      return;
    }

    if (firstElement > secondElement) {
      return filters.orderBy.order === "dsc" ? -1 : 1;
    } else if (secondElement > firstElement) {
      return filters.orderBy.order === "dsc" ? 1 : -1;
    } else {
      return 0;
    }
  };

  const applyFilters = () => {
    setFilteredGames(() => {
      const filteredGames: GameCardProps[] = [...games];
      const filter = filters.contains.toLowerCase();
      return filteredGames
        .filter((game) => {
          const gameName = game.name.toLowerCase();
          const gameRating = game.rating / 10;
          return gameName.includes(filter) && gameRating > filters.minScore;
        })
        .sort(compareGames);
    });
  };

  const handleStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setFilters({ ...filters, contains: inputValue });
  };

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minScore = e.target.value ? parseInt(e.target.value) : null;
    if ((minScore <= 10 && minScore >= 1) || !minScore) {
      setFilters({ ...filters, minScore });
    }
  };

  React.useEffect(() => {
    if (games) {
      applyFilters();
    }
  }, [filters]);

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
            onChange={handleStringChange}
            className="input"
          />
        </IntpuContainer>
        <IntpuContainer>
          <p>Minimum Score</p>
          <Input
            placeholder="1 - 10"
            bordered={false}
            value={filters?.minScore}
            onChange={handleScoreChange}
            className="input"
            type="number"
          />
        </IntpuContainer>
        <p>Order By</p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex" }}>
            <ArrowContainer
              onClick={(e) => {
                const changeOrderTo =
                  filters.orderBy.order === "asc" ? "dsc" : "asc";
                setFilters({
                  ...filters,
                  orderBy: { ...filters.orderBy, order: changeOrderTo },
                });
              }}
            >
              {filters.orderBy.order === "dsc" ? (
                <ArrowUpOutlined />
              ) : (
                <ArrowDownOutlined />
              )}
            </ArrowContainer>
            <Select
              value={filters.orderBy.type}
              onChange={(orderType) =>
                setFilters({
                  ...filters,
                  orderBy: { ...filters.orderBy, type: orderType },
                })
              }
              bordered={false}
              style={{
                width: "100%",
              }}
              dropdownStyle={{
                color: "red",
                backgroundColor: ColorPalette.inputBackground,
              }}
            >
              <Option value="first_release_date">Release Date</Option>
              <Option value="rating">Score</Option>
              <Option value="name">Name</Option>
            </Select>
          </div>
          <Button
            type="primary"
            style={{
              alignSelf: "flex-end",
              marginTop: "10px",
            }}
            onClick={(e) => {
              setFilters(defatultFilters);
              setFilteredGames(games);
            }}
          >
            Clear
          </Button>
        </div>
      </FilterContent>
    </FilterBarContainer>
  );
};

export default FilterBar;
