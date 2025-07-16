export function Button({ children, onClick, variant = 'default', className = '' }) {
  return <button onClick={onClick} className={className + ' px-3 py-1 bg-green-200 rounded'}>{children}</button>;
}