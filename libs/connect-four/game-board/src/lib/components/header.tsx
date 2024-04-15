import { Component, JSX, createSignal } from "solid-js";
import { Logo, SimpleRoundedButton } from "@generalist/connect-four/ui";
import MenuModal from "./menu-modal";
import { useGameBoard } from "../providers/game-board-provider";

const GameBoardHeader: Component = () => {
  const [menuDialogElement, setMenuDialogElement] =
    createSignal<HTMLDialogElement>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { resetGame, pauseTimer, continueTimer }] = useGameBoard();

  const onDialogClicked: JSX.EventHandlerUnion<
    HTMLDialogElement,
    MouseEvent
  > = (e) => {
    if (e.target.nodeName === "DIALOG") {
      (e.target as HTMLDialogElement).close();
      continueTimer();
    }
  };

  const onMenuPressed = () => {
    menuDialogElement()?.showModal();
    pauseTimer();
  };

  const onRestartGamePressed = () => {
    resetGame();
  };

  const onDialogKeyDown: JSX.EventHandlerUnion<
    HTMLDialogElement,
    KeyboardEvent
  > = (event) => {
    if (event.key === "Escape") {
      continueTimer();
      event.currentTarget.close();
    }
  };

  return (
    <>
      <header class="my-10 flex items-center justify-between px-4 md:px-20">
        <div class="basis-1/3 md:basis-1/6">
          <SimpleRoundedButton onClick={onMenuPressed}>
            Menu
          </SimpleRoundedButton>
        </div>
        <Logo />
        <div class="basis-1/3 md:basis-1/6">
          <SimpleRoundedButton onClick={onRestartGamePressed}>
            Restart
          </SimpleRoundedButton>
        </div>
      </header>
      <MenuModal
        onKeyDown={onDialogKeyDown}
        onClick={onDialogClicked}
        menuDialogElement={menuDialogElement}
        ref={setMenuDialogElement}
      />
    </>
  );
};

export default GameBoardHeader;
