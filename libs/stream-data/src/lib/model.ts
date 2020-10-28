export interface StreamValue {
  value: string | number;
  color: string;
}

export const colors = ['white', 'yellow', 'teal', 'red', 'lightblue', 'green'];

export function randomColor(): string {
  const color = Math.floor(Math.random() * 6) + 1;
  return colors[color];
}
