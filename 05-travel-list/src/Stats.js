export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );

  const numPacked = items.filter((items) => items.packed).length;
  const percentage = (numPacked / items.length) * 100;
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything, ready to go 🛫"
          : `You have ${items.length} items on your list, and you already packed
        ${numPacked} (${percentage}%) 🚀`}
      </em>
    </footer>
  );
}
