import { Typography } from "@generalist/connect-four/ui";
import { Component, JSX, Show } from "solid-js";
import { useGameBoard } from "../providers/game-board-provider";
import { cn } from "@generalist/utils";

const PlayerOneIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      width={54}
      height={59}
      viewBox="0 0 54 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={27} cy={27} r={27} fill="#000" />
      <circle cx={27} cy={32} r={27} fill="#000" />
      <circle cx={27} cy={27} r={24} fill="#FD6687" />
      <g fill="#000">
        <path d="M45.25 25c0 7.456-6.044 13.5-13.5 13.5s-13.5-6.044-13.5-13.5h3c0 5.799 4.701 10.5 10.5 10.5s10.5-4.701 10.5-10.5h3zM30.75 17v5.984h-3V17h3zM40.75 17v5.984h-3V17h3z" />
      </g>
    </svg>
  );
};

function PlayerTwoIcon(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
  return (
    <svg
      width={54}
      height={59}
      viewBox="0 0 54 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={27}
        cy={27}
        r={27}
        transform="matrix(-1 0 0 1 54 0)"
        fill="#000"
      />
      <circle
        cx={27}
        cy={27}
        r={27}
        transform="matrix(-1 0 0 1 54 5)"
        fill="#000"
      />
      <circle
        cx={24}
        cy={24}
        r={24}
        transform="matrix(-1 0 0 1 51 3)"
        fill="#FFCE67"
      />
      <g fill="#000">
        <path d="M8.75 25c0 7.456 6.044 13.5 13.5 13.5s13.5-6.044 13.5-13.5h-3c0 5.799-4.701 10.5-10.5 10.5s-10.5-4.701-10.5-10.5h-3zM23.25 17v5.984h3V17h-3zM13.25 17v5.984h3V17h-3z" />
      </g>
    </svg>
  );
}

type PlayerWidgetProps = {
  playerName: string;
  playerId: 1 | 2;
  playerScore: number;
};

const PlayerWidget: Component<PlayerWidgetProps> = (props) => {
  return (
    <section class="relative h-24 w-full rounded-b-3xl rounded-t-3xl bg-black">
      <div class="absolute inset-[3px] flex h-5/6 flex-col items-center justify-center rounded-b-3xl rounded-t-[21px] bg-white outline-none">
        <Typography intent="h4" class="uppercase">
          {props.playerName}
        </Typography>
        <Typography intent="h2" class="text-[32px] uppercase leading-none">
          {props.playerScore}
        </Typography>
      </div>
      <div
        class={cn(
          props.playerId === 1 ? "-left-6" : "-right-6",
          "absolute top-[41.6667%] -translate-y-[41.6667%]",
        )}
      >
        <Show fallback={<PlayerTwoIcon />} when={props.playerId === 1}>
          <PlayerOneIcon />
        </Show>
      </div>
    </section>
  );
};

const PlayersVs = () => {
  const [{ player1, player2 }] = useGameBoard();
  return (
    <div class="flex items-center justify-between gap-3 px-8">
      <PlayerWidget
        playerId={player1.playerId}
        playerName={player1.label}
        playerScore={player1.score}
      />
      <PlayerWidget
        playerId={player2.playerId}
        playerName={player2.label}
        playerScore={player2.score}
      />
    </div>
  );
};

export default PlayersVs;
