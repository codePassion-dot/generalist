import { Button, Typography } from "@generalist/connect-four/ui";
import {
  Accessor,
  Component,
  JSX,
  ParentComponent,
  Setter,
  onCleanup,
  onMount,
} from "solid-js";
import { useNavigate } from "@solidjs/router";
import { useGameBoard } from "../providers/game-board-provider";

type Props = {
  ref: Setter<HTMLDialogElement | undefined>;
  menuDialogElement: Accessor<HTMLDialogElement | undefined>;
} & JSX.HTMLAttributes<HTMLDialogElement>;

const ButtonTypography: ParentComponent = (props) => {
  return (
    <Typography class="w-full text-center" intent="h2">
      {props.children}
    </Typography>
  );
};

const MenuModal: Component<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { pauseTimer, continueTimer, resetGame }] = useGameBoard();
  const navigate = useNavigate();

  onMount(() => {
    pauseTimer();
  });

  onCleanup(() => {
    continueTimer();
  });

  const onContinueGamePressed = () => {
    props.menuDialogElement()?.close();
  };

  const onGameQuitted = () => {
    resetGame();
    navigate("/");
  };

  const onGameRestarted = () => {
    resetGame();
    props.menuDialogElement()?.close();
  };

  return (
    <dialog
      class="relative h-[48%] w-[95%] rounded-b-[38px] rounded-t-[40px] bg-black backdrop:bg-black/50"
      {...props}
      ref={props.ref}
    >
      <section class="bg-violet-blue absolute inset-1 flex h-[97.5%] flex-col items-center gap-3 rounded-b-[38px] rounded-t-[36px] px-5 pt-5 text-white outline-none">
        <Typography intent="h1" class="uppercase">
          Pause
        </Typography>
        <Button onClick={onContinueGamePressed} intent="white">
          <ButtonTypography>Continue Game</ButtonTypography>
        </Button>
        <Button onClick={onGameRestarted} intent="white">
          <ButtonTypography>Restart</ButtonTypography>
        </Button>
        <Button onClick={onGameQuitted} intent="salmon">
          <ButtonTypography>Quit Game</ButtonTypography>
        </Button>
      </section>
    </dialog>
  );
};

export default MenuModal;
