export interface LayoutComponentProps {
  children: React.ReactNode;
}

export enum Creator {
  Me = 0,
  Bot = 1
}

export interface MessageProps {
  text: string;
  from: Creator;
  key: number;
}

export interface InputProps {
  onSend: (input: string) => void;
  disabled: boolean;
}
