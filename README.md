# Ticket Tracking System

This project is a ticket tracking system built using React and Typescript. It allows employees to increment and decrement their ticket counts. The components manage their own state, and the components are generated using the `map()` function.

## Requirements

- React + Typescript
- Each component should manage its own state
- Components should be generated using the `map()` function

## Usage

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.

## Code Samples

- Below is the beating heart of what makes the code work. It is in a component called Ticket.tsx and generates the tickets that make up the project. In order for this component to work it has to interact with another component that is being fed the handleInput function to it. I also had time to color the backgrounds of each ticket with a condition depending on how many tickets each employee had completed.

```typescript
const Ticket = ({ info }: TicketProps) => {
  const [counters, setCounters] = useState<number[]>(
    new Array(info.length).fill(0)
  );

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(userInput);
  };

  const filteredWorkersBySearchTerm = info.filter((worker) => {
    if (worker.name.toLowerCase().includes(searchTerm)) {
      return true;
    } else if (worker.role.toLowerCase().includes(searchTerm)) {
      return true;
    } else {
      return false;
    }
  });

  const handleIncrement = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];
      newCounters[index] += 1;
      return newCounters;
    });
  };

  const handleDecrement = (index: number) => {
    setCounters((prevCounters) => {
      const newCounters = [...prevCounters];

      if (newCounters[index] > 0) {
        newCounters[index] -= 1;
      }
      return newCounters;
    });
  };

  const total = counters.reduce((sum, currentValue) => sum + currentValue, 0);

  return (
    <div>
      <div className="search-box__created">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      </div>
      <div className="ticket-container__created">
        {filteredWorkersBySearchTerm.map((worker, index) => (
          <div
            className={`ticket-tile ${
              counters[index] <= 1
                ? "ticket-tile--low"
                : counters[index] <= 5
                ? "ticket-tile--medium"
                : "ticket-tile--high"
            }`}
            key={worker.id}
          >
            <p>Name: {worker.name}</p>
            <p>Role: {worker.role}</p>
            <div className="ticket-tile__counterContainer">
              <p>
                Counter: <br></br> {counters[index]}
              </p>
              <div className="ticket-tile__buttonContainer">
                <button onClick={() => handleDecrement(index)}>-</button>
                <button onClick={() => handleIncrement(index)}>+</button>
              </div>
            </div>
          </div>
        ))}
        <div className="ticket-tile ticket-tile__counter">
          <p>Total Tickets:</p>
          <div className="ticket-tile__counterContainer">
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
```

## What I have learnt

- This project though small has helped enormously in solidifying my understanding of useState and how components "talk" to each other as well as the main app.tsx. Using props is a vital tool when working in react and until this project I found it quite daunting to use. I have a lot more to learn when using react hooks however I am proud of the progress I have made thanks to this project.

- As always if you want to get in contact to discuss this code please feel free to message me. Happy Coding.
