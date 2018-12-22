namespace game {


    export class GameService {
        private static StartSceneName: string = 'game.Start';
        private static PlaySceneName: string = 'game.GameScene';
        private static GameExitSceneName: string = 'game.GameExit';

        /*
         * Clear all entities and prepare for new game
         */
        // static clear(world: ut.World) {
        //     ut.EntityGroup.destroyAll(world, this.StartSceneName);
        //     ut.EntityGroup.destroyAll(world, this.PlaySceneName);
        //     ut.EntityGroup.destroyAll(world, this.GameExitSceneName);
        // }

        static startMenu(world: ut.World) {
            ut.EntityGroup.instantiate(world, this.StartSceneName);
            this.setGameState(world, game.GameState.Start);
        }

        static newGame(world: ut.World) {
            ut.EntityGroup.destroyAll(world, this.StartSceneName);
            game.AudioService.playAudioSourceByName(world, 'audio/bgm');
            // restart game, maybe add some feature to save player state
            ut.EntityGroup.instantiate(world, this.PlaySceneName);
            this.setGameState(world, game.GameState.Play);
        }
        
        static setGameState(world: ut.World, state: game.GameState){
            let config = world.getConfigData(game.GameConfig);
            config.state = state;
            world.setConfigData(config);
        }
    }
}
