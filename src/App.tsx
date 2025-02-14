import TopBar from "./components/top-bar/TopBar";
import Card from "./components/card/Card";
import Empty from "./components/empty-card/EmptyCard";

import Column from "./components/column/Column";
import { useState } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

function App() {
  const [cards, setCards] = useState([
    {
      id: Math.random().toString(),
      column: "toDo",
      title: "Task 01",
      content: "Taks about to do something",
      labelColors: ["blue", "red"],
    },
    {
      id: Math.random().toString(),
      column: "inProgress",
      title: "Task 02",
      content: "Taks about to do something more",
      labelColors: ["black", "orange"],
    },
    {
      id: Math.random().toString(),
      column: "completed",
      title: "Task 03",
      content: "Taks about to do something a little more",
      labelColors: ["green", "pink"],
    },
  ]);

  function addNewCard(column: string, title: string, description: string) {
    setCards([
      ...cards,
      {
        id: Math.random().toString(),
        column: column,
        title: title,
        content: description,
        labelColors: ["blue", "red"],
      },
    ]);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { over } = event;
    if (over === null) return;
    setCards((cards) =>
      cards.map((item) =>
        event.active.id === item.id
          ? { ...item, column: over.id as string }
          : item,
      ),
    );
  }

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
        <DndContext onDragEnd={handleDragEnd}>
          <Column title="To do" id="toDo">
            {filterToDo.map(({ content, labelColors, title, id }) => (
              <Card
                title={title}
                content={content}
                labelColors={labelColors}
                id={id}
              />
            ))}
            <Empty
              onAddNewCard={(title, description) =>
                addNewCard("toDo", title, description)
              }
            />
          </Column>
          <Column title="In progress" id="inProgress">
            {filterInProgress.map(({ content, labelColors, title, id }) => (
              <Card
                title={title}
                content={content}
                labelColors={labelColors}
                id={id}
              />
            ))}
            <Empty
              onAddNewCard={(title, description) =>
                addNewCard("inProgress", title, description)
              }
            />
          </Column>
          <Column title="Completed" id="completed">
            {filterCompleted.map(({ content, labelColors, title, id }) => (
              <Card
                title={title}
                content={content}
                labelColors={labelColors}
                id={id}
              />
            ))}
            <Empty
              onAddNewCard={(title, description) =>
                addNewCard("completed", title, description)
              }
            />
          </Column>
        </DndContext>
      </div>
    </>
  );
}

export default App;
