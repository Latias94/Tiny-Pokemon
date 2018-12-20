var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var game;
(function (game) {
    var AnimSystem = /** @class */ (function (_super) {
        __extends(AnimSystem, _super);
        function AnimSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        AnimSystem.prototype.OnUpdate = function () {
            this.world.forEach([ut.Core2D.Sprite2DSequencePlayer, ut.Core2D.Sprite2DSequence, game.WalkSprite, game.Movement, ut.Core2D.Sprite2DRenderer, game.PlayerTag], function (sequencePlayer, sequence, anim, movement, renderer) {
                // down
                if (movement.lastDirection == game.MoveDirection.down
                    && movement.direction == game.MoveDirection.idle) {
                    movement.lastDirection = game.MoveDirection.idle;
                    renderer.sprite = anim.walk_down_0;
                }
                if (movement.direction == game.MoveDirection.down) {
                    sequence.sprites = [anim.walk_down_1, anim.walk_down_2];
                }
                // up
                if (movement.lastDirection == game.MoveDirection.up
                    && movement.direction == game.MoveDirection.idle) {
                    movement.lastDirection = game.MoveDirection.idle;
                    renderer.sprite = anim.walk_up_0;
                }
                if (movement.direction == game.MoveDirection.up) {
                    sequence.sprites = [anim.walk_up_1, anim.walk_up_2];
                }
                // left
                if (movement.lastDirection == game.MoveDirection.left
                    && movement.direction == game.MoveDirection.idle) {
                    movement.lastDirection = game.MoveDirection.idle;
                    renderer.sprite = anim.walk_left_0;
                }
                if (movement.direction == game.MoveDirection.left) {
                    sequence.sprites = [anim.walk_left_1, anim.walk_left_2];
                }
                // right
                if (movement.lastDirection == game.MoveDirection.right
                    && movement.direction == game.MoveDirection.idle) {
                    movement.lastDirection = game.MoveDirection.idle;
                    renderer.sprite = anim.walk_right_0;
                }
                if (movement.direction == game.MoveDirection.right) {
                    sequence.sprites = [anim.walk_right_1, anim.walk_right_2];
                }
                sequencePlayer.paused = movement.direction == game.MoveDirection.idle;
            });
        };
        return AnimSystem;
    }(ut.ComponentSystem));
    game.AnimSystem = AnimSystem;
})(game || (game = {}));
var game;
(function (game) {
    /** New System */
    var MovementSystem = /** @class */ (function (_super) {
        __extends(MovementSystem, _super);
        function MovementSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MovementSystem.prototype.OnUpdate = function () {
            var dt = this.scheduler.deltaTime();
            this.world.forEach([ut.Core2D.TransformLocalPosition, game.Movement, game.PlayerTag], function (localPos, movement) {
                var direction = new Vector3(0, 0, 0);
                if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.W)) {
                    direction.y += 1;
                    movement.direction = game.MoveDirection.up;
                }
                else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.S)) {
                    direction.y -= 1;
                    movement.direction = game.MoveDirection.down;
                }
                else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.D)) {
                    direction.x += 1;
                    movement.direction = game.MoveDirection.right;
                }
                else if (ut.Runtime.Input.getKey(ut.Core2D.KeyCode.A)) {
                    direction.x -= 1;
                    movement.direction = game.MoveDirection.left;
                }
                // direction.normalize();
                if (movement.lastDirection == game.MoveDirection.idle) {
                    movement.lastDirection = movement.direction;
                }
                if (direction.length() == 0) {
                    movement.direction = game.MoveDirection.idle;
                }
                direction.multiplyScalar(movement.speed * dt);
                var position = localPos.position;
                position.add(direction);
                localPos.position = position;
            });
        };
        return MovementSystem;
    }(ut.ComponentSystem));
    game.MovementSystem = MovementSystem;
})(game || (game = {}));
var ut;
(function (ut) {
    var EntityGroup = /** @class */ (function () {
        function EntityGroup() {
        }
        /**
         * @method
         * @desc Creates a new instance of the given entity group by name and returns all entities
         * @param {ut.World} world - The world to add to
         * @param {string} name - The fully qualified name of the entity group
         * @returns Flat list of all created entities
         */
        EntityGroup.instantiate = function (world, name) {
            var data = this.getEntityGroupData(name);
            if (data == undefined)
                throw "ut.EntityGroup.instantiate: No 'EntityGroup' was found with the name '" + name + "'";
            return data.load(world);
        };
        ;
        /**
         * @method
         * @desc Destroys all entities that were instantated with the given group name
         * @param {ut.World} world - The world to destroy from
         * @param {string} name - The fully qualified name of the entity group
         */
        EntityGroup.destroyAll = function (world, name) {
            var type = this.getEntityGroupData(name).Component;
            world.forEach([ut.Entity, type], function (entity, instance) {
                // @TODO This should REALLY not be necessary
                // We are protecting against duplicate calls to `destroyAllEntityGroups` within an iteration
                if (world.exists(entity)) {
                    world.destroyEntity(entity);
                }
            });
        };
        /**
         * @method
         * @desc Returns an entity group object by name
         * @param {string} name - Fully qualified group name
         */
        EntityGroup.getEntityGroupData = function (name) {
            var parts = name.split('.');
            if (parts.length < 2)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            var shiftedParts = parts.shift();
            var initialData = entities[shiftedParts];
            if (initialData == undefined)
                throw "ut.Streaming.StreamingService.getEntityGroupData: name entry is invalid";
            return parts.reduce(function (v, p) {
                return v[p];
            }, initialData);
        };
        return EntityGroup;
    }());
    ut.EntityGroup = EntityGroup;
})(ut || (ut = {}));
var ut;
(function (ut) {
    var EntityLookupCache = /** @class */ (function () {
        function EntityLookupCache() {
        }
        EntityLookupCache.getByName = function (world, name) {
            var entity;
            if (name in this._cache) {
                entity = this._cache[name];
                if (world.exists(entity))
                    return entity;
            }
            entity = world.getEntityByName(name);
            this._cache[name] = entity;
            return entity;
        };
        EntityLookupCache._cache = {};
        return EntityLookupCache;
    }());
    ut.EntityLookupCache = EntityLookupCache;
})(ut || (ut = {}));
//# sourceMappingURL=tsc-emit.js.map