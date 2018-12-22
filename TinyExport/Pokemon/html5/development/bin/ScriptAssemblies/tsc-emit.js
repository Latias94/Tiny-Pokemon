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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    var AudioService = /** @class */ (function () {
        function AudioService() {
        }
        AudioService.playAudioSourceByName = function (world, name) {
            var entity = world.getEntityByName(name);
            if (entity.isNone()) {
                console.error("AudioService cannot find the entity with the name '" + name + "'");
                return;
            }
            AudioService.playAudioSource(world, entity);
        };
        AudioService.playAudioSource = function (world, entity) {
            if (!world.hasComponent(entity, ut.Audio.AudioSource)) {
                console.error("AudioService Entity " + world.getEntityName(entity) + " does not have an AudioSource component");
                return;
            }
            if (!world.hasComponent(entity, ut.Audio.AudioSourceStart)) {
                world.addComponent(entity, ut.Audio.AudioSourceStart);
            }
        };
        return AudioService;
    }());
    game.AudioService = AudioService;
})(game || (game = {}));
var game;
(function (game) {
    var GameManagerSystem = /** @class */ (function (_super) {
        __extends(GameManagerSystem, _super);
        function GameManagerSystem() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GameManagerSystem.prototype.OnUpdate = function () {
            var config = this.world.getConfigData(game.GameConfig);
            switch (config.state) {
                case game.GameState.Initialize:
                    {
                        game.GameService.startMenu(this.world);
                    }
                    break;
                case game.GameState.Start: {
                    // TODO 开始界面
                    if (ut.Runtime.Input.getKeyDown(ut.Core2D.KeyCode.Space)) {
                        game.GameService.newGame(this.world);
                    }
                }
                case game.GameState.Menu:
                    {
                        // TODO Menu
                    }
                    break;
                case game.GameState.Play:
                    {
                    }
                    break;
                case game.GameState.Exit:
                    {
                        // TODO Exit game
                    }
                    break;
            }
        };
        GameManagerSystem = __decorate([
            ut.executeAfter(ut.Shared.UserCodeStart),
            ut.executeBefore(ut.Shared.UserCodeEnd)
        ], GameManagerSystem);
        return GameManagerSystem;
    }(ut.ComponentSystem));
    game.GameManagerSystem = GameManagerSystem;
})(game || (game = {}));
var game;
(function (game) {
    var GameService = /** @class */ (function () {
        function GameService() {
        }
        /*
         * Clear all entities and prepare for new game
         */
        // static clear(world: ut.World) {
        //     ut.EntityGroup.destroyAll(world, this.StartSceneName);
        //     ut.EntityGroup.destroyAll(world, this.PlaySceneName);
        //     ut.EntityGroup.destroyAll(world, this.GameExitSceneName);
        // }
        GameService.startMenu = function (world) {
            ut.EntityGroup.instantiate(world, this.StartSceneName);
            this.setGameState(world, game.GameState.Start);
        };
        GameService.newGame = function (world) {
            ut.EntityGroup.destroyAll(world, this.StartSceneName);
            game.AudioService.playAudioSourceByName(world, 'audio/bgm');
            // restart game, maybe add some feature to save player state
            ut.EntityGroup.instantiate(world, this.PlaySceneName);
            this.setGameState(world, game.GameState.Play);
        };
        GameService.setGameState = function (world, state) {
            var config = world.getConfigData(game.GameConfig);
            config.state = state;
            world.setConfigData(config);
        };
        GameService.StartSceneName = 'game.Start';
        GameService.PlaySceneName = 'game.GameScene';
        GameService.GameExitSceneName = 'game.GameExit';
        return GameService;
    }());
    game.GameService = GameService;
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