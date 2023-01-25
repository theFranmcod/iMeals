import { createSignal } from 'solid-js';
import './Counter.css';

const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();

export default function Counter(props) {
	const [count, setCount] = createSignal(0);
	const add = () => setCount(count() + 1);
	const subtract = () => setCount(count() - 1);
  
  console.log(count)
	return (
		<>
			<div class="counter">
				<button onClick={subtract}>-</button>
				<pre>{count()}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class="counter-message">{props.children}</div>
      <div>{data.userId}</div>
		</>
	);
}