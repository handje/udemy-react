import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" target={1} />
        <TimerChallenge title="NOT EASY" target={5} />
        <TimerChallenge title="GETTING TOUGH" target={10} />
        <TimerChallenge title="PROS ONLY" target={15} />
      </div>
    </>
  );
}

export default App;
