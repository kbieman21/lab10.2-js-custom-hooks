import useDebounce from "../hooks/useDebounce";
import { useState } from "react";

function UseDebounceSearch() {
  const [text, setText] = useState("");
  const [delay, setDelay] = useState(500);
  const debouncedValue = useDebounce(text, delay);

  // const formatedDelay= 1;

  // if(delay <=0){
  //   formatedDelay = 1;
  // }else{
  //   formatedDelay = delay;
  // }
  
  return (
    <div>
      <h3>Debounce Search Demo</h3>

      <label htmlFor="delay">Debounce Delay (ms): </label>
      <input
        name="delay"
        type="number"
        value={delay}
        onChange={(e) => setDelay(parseInt(e.target.value))}
      />
      <br />
      <input
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div><b>Current Input:</b> {text}</div>
      <div><b>Debounced Value (after {delay}ms):</b> {debouncedValue}</div>
      <div>Simulated Search Results</div>
      <div>
        <ul>
          <li>Result for {text}: Item 1</li>
          <li>Result for {text}: Item 2</li>
          <li>Result for {text}: Item 3</li>
        </ul>
      </div>
    </div>
  );
}

export default UseDebounceSearch;