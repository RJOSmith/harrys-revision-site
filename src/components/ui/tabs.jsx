export function Tabs({ value, onValueChange, children }) {
  return <div className="flex gap-2">{children}</div>;
}
export function Tab({ value, label }) {
  return <button className="px-3 py-1 bg-blue-200 rounded">{label}</button>;
}