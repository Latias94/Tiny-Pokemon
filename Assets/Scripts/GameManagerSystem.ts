namespace game {

    @ut.executeAfter(ut.Shared.UserCodeStart)
    @ut.executeBefore(ut.Shared.UserCodeEnd)
    export class GameManagerSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let config = this.world.getConfigData(game.GameConfig);
            switch (config.state) {
                case game.GameState.Initialize: {
                    game.GameService.startMenu(this.world);
                }
                    break;
                case game.GameState.Start: {
                    // TODO 开始界面
                    if(ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space)){
                        game.GameService.newGame(this.world);
                    }
                }
                case game.GameState.Menu: {
                    // TODO Menu
                }
                    break;
                case game.GameState.Play: {
                }
                    break;
                case game.GameState.Exit: {
                    // TODO Exit game
                }
                    break;
            }
        }
    }
}
