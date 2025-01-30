import TopBar from "./components/top-bar/TopBar";
import Card from "./components/card/Card";
import Empty from "./components/empty-card/EmptyCard";

import Column from "./components/column/Column";

function App() {
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
          <Card title="Hey" content="Hey you" labelColors={["blue", "red"]} />
          <Card
            title="Hey again"
            content="Hey you again"
            labelColors={["blue", "red", "green"]}
          />
          <Card
            title="Hey again"
            content="Hey you again again"
            labelColors={["blue", "red", "green", "pink"]}
          />
          <Empty />
        </Column>
        <Column title="In progress">
          <Card title="Hey" content="Hey you" labelColors={["blue", "red"]} />
          <Card
            title="Hey again"
            content="Hey you again"
            labelColors={["blue", "red", "green"]}
          />
          <Empty />
        </Column>
        <Column title="Completed">
          <Card title="Hey" content="Hey you" labelColors={["blue", "red"]} />
          <Card
            title="Hey again"
            content="Hey you again"
            labelColors={["blue", "red", "green"]}
          />
          <Empty />
        </Column>
      </div>
    </>
  );
}

export default App;
