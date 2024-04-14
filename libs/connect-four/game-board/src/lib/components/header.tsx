import { Component, JSX, createSignal } from "solid-js";
import { Logo, SimpleRoundedButton } from "@generalist/connect-four/ui";
import MenuModal from "./menu-modal";
import { useGameBoard } from "../providers/game-board-provider";

const GameBoardHeader: Component = () => {
  const [menuDialogElement, setMenuDialogElement] =
    createSignal<HTMLDialogElement>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { resetGame }] = useGameBoard();

  const onDialogClicked: JSX.EventHandlerUnion<
    HTMLDialogElement,
    MouseEvent
  > = (e) => {
    if (e.target.nodeName === "DIALOG") {
      (e.target as HTMLDialogElement).close();
    }
  };

  const onMenuPressed = () => {
    menuDialogElement()?.showModal();
  };

  const onRestartGamePressed = () => {
    resetGame();
  };

  return (
    <>
      <header class="my-10 flex items-center justify-between px-4">
        <div class="basis-1/3">
          <SimpleRoundedButton onClick={onMenuPressed}>
            Menu
          </SimpleRoundedButton>
        </div>
        <Logo />
        <div class="basis-1/3">
          <SimpleRoundedButton onClick={onRestartGamePressed}>
            Restart
          </SimpleRoundedButton>
        </div>
      </header>
      <MenuModal
        onClick={onDialogClicked}
        menuDialogElement={menuDialogElement}
        ref={setMenuDialogElement}
      />
    </>
  );
};

export default GameBoardHeader;
