import { JSX, splitProps } from "solid-js";

export interface EmojiProps extends JSX.HTMLAttributes<HTMLSpanElement> {
  label?: string;
  symbol: string;
}

export default function Emoji(props: EmojiProps) {
  const [local, other] = splitProps(props, ["label", "symbol"]);
  return (
    <span
      {...other}
      aria-hidden={local.label ? undefined : "true"}
      aria-label={local.label}
      role="img"
    >
      {local.symbol}
    </span>
  );
}
