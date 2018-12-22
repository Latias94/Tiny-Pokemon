namespace game {

    export class AnimSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            this.world.forEach(
                [ut.Core2D.Sprite2DSequencePlayer, ut.Core2D.Sprite2DSequence, WalkSprite, Movement, ut.Core2D.Sprite2DRenderer, PlayerTag],
                (sequencePlayer, sequence, anim, movement, renderer) => {
                    // down
                    if (movement.lastDirection == MoveDirection.down
                        && movement.direction == MoveDirection.idle) {
                        movement.lastDirection = MoveDirection.idle;
                        renderer.sprite = anim.walk_down_0;
                    }
                    if (movement.direction == MoveDirection.down) {
                        sequence.sprites = [anim.walk_down_1, anim.walk_down_2];
                    }

                    // up
                    if (movement.lastDirection == MoveDirection.up
                        && movement.direction == MoveDirection.idle) {
                        movement.lastDirection = MoveDirection.idle;
                        renderer.sprite = anim.walk_up_0;
                    }
                    if (movement.direction == MoveDirection.up) {
                        sequence.sprites = [anim.walk_up_1, anim.walk_up_2];
                    }

                    // left
                    if (movement.lastDirection == MoveDirection.left
                        && movement.direction == MoveDirection.idle) {
                        movement.lastDirection = MoveDirection.idle;
                        renderer.sprite = anim.walk_left_0;
                    }
                    if (movement.direction == MoveDirection.left) {
                        sequence.sprites = [anim.walk_left_1, anim.walk_left_2];
                    }

                    // right
                    if (movement.lastDirection == MoveDirection.right
                        && movement.direction == MoveDirection.idle) {
                        movement.lastDirection = MoveDirection.idle;
                        renderer.sprite = anim.walk_right_0;
                    }
                    if (movement.direction == MoveDirection.right) {
                        sequence.sprites = [anim.walk_right_1, anim.walk_right_2];
                    }
                    
                    sequencePlayer.paused = movement.direction == game.MoveDirection.idle;
                })
        }
    }
}
