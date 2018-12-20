namespace game {

    /** New System */
    export class MovementSystem extends ut.ComponentSystem {

        OnUpdate(): void {
            let dt = this.scheduler.deltaTime();

            this.world.forEach([ut.Core2D.TransformLocalPosition, Movement, PlayerTag], (localPos, movement) => {
                let direction = new Vector3(0, 0, 0);
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.W)) {
                    direction.y += 1;
                    movement.direction = MoveDirection.up;
                } else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.S)) {
                    direction.y -= 1;
                    movement.direction = MoveDirection.down;
                } else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D)) {
                    direction.x += 1;
                    movement.direction = MoveDirection.right;
                } else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A)) {
                    direction.x -= 1;
                    movement.direction = MoveDirection.left;
                }
                // direction.normalize();
                if (movement.lastDirection == MoveDirection.idle) {
                    movement.lastDirection = movement.direction;
                }
                if (direction.length() == 0) {
                    movement.direction = MoveDirection.idle;
                }


                direction.multiplyScalar(movement.speed * dt);
                let position = localPos.position;
                position.add(direction);
                localPos.position = position;
            });
        }
    }
}
