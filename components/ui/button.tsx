// button.tsx
export const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-blue-600 text-white px-4 py-2 rounded">{children}</button>
);

// card.tsx
export const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-white shadow-md rounded">{children}</div>
);

// input.tsx
export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className="border border-gray-300 rounded px-3 py-2" {...props} />
);

// index.ts
export * from './button';
export * from './card';
export * from './input';
