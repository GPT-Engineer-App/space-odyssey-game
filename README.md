# space-odyssey-game

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useGameLogic from './hooks/useGameLogic';
import Background from './components/Background';
import Spaceship from './components/Spaceship';
import Enemy from './components/Enemy';
import Bullet from './components/Bullet';
import Explosion from './components/Explosion';
import PowerUp from './components/PowerUp';
import useAudio from './hooks/useAudio';
import LeaderboardModal from './components/LeaderboardModal';
import SettingsModal from './components/SettingsModal';

export default function KioSpaceOdyssey() {
  const {
    isGameOver,
    score,
    spaceshipPosition,
    enemies,
    bullets,
    explosions,
    powerUps,
    handleKeyDown,
    restartGame,
  } = useGameLogic();

  const { playSoundEffect, playBackgroundMusic, stopBackgroundMusic } = useAudio();
  const [isLeaderboardOpen, setIsLeaderboardOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleToggleLeaderboard = () => {
    setIsLeaderboardOpen(!isLeaderboardOpen);
  };

  const handleToggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div
      onKeyDown={handleKeyDown}
      tabIndex="0"
      className="game-container"
      style={{ outline: 'none' }}
    >
      <Background />
      <AnimatePresence>
        {isGameOver && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="game-over-modal"
          >
            <h2>Game Over</h2>
            <p>Score: {score}</p>
            <button onClick={restartGame}>Restart</button>
          </motion.div>
        )}
      </AnimatePresence>
      <Spaceship position={spaceshipPosition} />
      {enemies.map(enemy => (
        <Enemy key={enemy.id} {...enemy} />
      ))}
      {bullets.map(bullet => (
        <Bullet key={bullet.id} {...bullet} />
      ))}
      {explosions.map(explosion => (
        <Explosion
          key={explosion.id}
          {...explosion}
          onComplete={() => playSoundEffect('explosion')}
        />
      ))}
      {powerUps.map(powerUp => (
        <PowerUp key={powerUp.id} {...powerUp} />
      ))}
      <div className="game-ui">
        <div className="score">Score: {score}</div>
        <button className="leaderboard-button" onClick={handleToggleLeaderboard}>
          Leaderboard
        </button>
        <button className="settings-button" onClick={handleToggleSettings}>
          Settings
        </button>
      </div>
      <AnimatePresence>
        {isLeaderboardOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="modal-overlay"
          >
            <LeaderboardModal onClose={handleToggleLeaderboard} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isSettingsOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="modal-overlay"
          >
            <SettingsModal
              onClose={handleToggleSettings}
              onMusicToggle={playBackgroundMusic}
              onMusicStop={stopBackgroundMusic}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/space-odyssey-game.git
cd space-odyssey-game
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
