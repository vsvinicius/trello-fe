import TopBar from "./components/top-bar/TopBar";
import Card from "./components/card/Card";
import Empty from "./components/empty-card/EmptyCard";

import Column from "./components/column/Column";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    {
      column: "toDo",
      title: "Hey",
      content: "Hey you",
      labelColors: ["blue", "red"],
    },
    {
      column: "inProgress",
      title: "Hey",
      content: "Hey you",
      labelColors: ["black", "orange"],
    },
    {
      column: "completed",
      title: "Hey",
      content: "Hey you",
      labelColors: ["green", "pink"],
    },
  ]);

  function addNewCard(column: string, title: string, description: string) {
    setCards([
      ...cards,
      {
        column: column,
        title: title,
        content: description,
        labelColors: ["blue", "red"],
      },
    ]);
  }

  // const addNewCard = (column: string) => {
  //   setCards([
  //     ...cards,
  //     {
  //       column: column,
  //       title: "Hey",
  //       content: "Hey you",
  //       labelColors: ["blue", "red"],
  //     },
  //   ]);
  // };

  const filterToDo = cards.filter((card) => card.column === "toDo");
  const filterInProgress = cards.filter((card) => card.column === "inProgress");
  const filterCompleted = cards.filter((card) => card.column === "completed");

  return (
    <>
      <TopBar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Column title="To do">
          {filterToDo.map(({ content, labelColors, title }) => (
            <Card title={title} content={content} labelColors={labelColors} />
          ))}
          <Empty
            onAddNewCard={(title, description) =>
              addNewCard("toDo", title, description)
            }
          />
        </Column>
        <Column title="In progress">
          {filterInProgress.map(({ content, labelColors, title }) => (
            <Card title={title} content={content} labelColors={labelColors} />
          ))}
          <Empty
            onAddNewCard={(title, description) =>
              addNewCard("inProgress", title, description)
            }
          />
        </Column>
        <Column title="Completed">
          {filterCompleted.map(({ content, labelColors, title }) => (
            <Card title={title} content={content} labelColors={labelColors} />
          ))}
          <Empty
            onAddNewCard={(title, description) =>
              addNewCard("completed", title, description)
            }
          />
        </Column>
      </div>
    </>
  );
}

export default App;
