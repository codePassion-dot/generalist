import { Button, Typography } from "@generalist/connect-four/ui";
import { Accessor, Component, JSX, ParentComponent, Setter } from "solid-js";
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

type MenuChildProps = {
  onContinueGamePressed: () => void;
  onGameRestarted: () => void;
  onGameQuitted: () => void;
};

const MenuChild: Component<MenuChildProps> = (props) => {
  return (
    <>
      <Typography intent="h1" class="uppercase">
        Pause
      </Typography>
      <Button onClick={props.onContinueGamePressed} intent="white">
        <ButtonTypography>Continue Game</ButtonTypography>
      </Button>
      <Button onClick={props.onGameRestarted} intent="white">
        <ButtonTypography>Restart</ButtonTypography>
      </Button>
      <Button onClick={props.onGameQuitted} intent="salmon">
        <ButtonTypography>Quit Game</ButtonTypography>
      </Button>
    </>
  );
};

const MenuModal: Component<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { resetGame, continueTimer }] = useGameBoard();
  const navigate = useNavigate();

  const onContinueGamePressed = () => {
    continueTimer();
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
      class="relative h-fit w-[95%] overflow-hidden rounded-b-[38px] rounded-t-[40px] bg-black pb-10 backdrop:bg-black/50 md:w-[60%]"
      {...props}
      ref={props.ref}
    >
      {/* this is just a hack to make the parent take into account child's height */}
      <div class="invisible flex flex-col gap-3 pt-6">
        <MenuChild
          onGameQuitted={onGameQuitted}
          onGameRestarted={onGameRestarted}
          onContinueGamePressed={onContinueGamePressed}
        />
      </div>
      <section class="bg-violet-blue absolute inset-1 flex h-[96%] flex-col items-center gap-3 rounded-b-[38px] rounded-t-[36px] px-5 pt-5 text-white outline-none">
        <MenuChild
          onGameQuitted={onGameQuitted}
          onGameRestarted={onGameRestarted}
          onContinueGamePressed={onContinueGamePressed}
        />
      </section>
    </dialog>
  );
};

export default MenuModal;
