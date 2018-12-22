/**
 * TINY GENERATED CODE, DO NOT EDIT BY HAND
 * @project Pokemon
 */

console.log('runtime version: internal');

ut.importModule(ut.Core2D);
ut.importModule(ut.Math);
ut.importModule(ut);
ut.importModule(ut.Shared);
ut.importModule(ut.Core2D);
ut.importModule(ut.HTML);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.HTML);
ut.importModule(ut.Core2D);
ut.importModule(ut.Rendering);
ut.importModule(ut.Rendering);
ut.importModule(ut.Core2D);
ut.importModule(ut.Tilemap2D);
ut.importModule(ut.HitBox2D);
ut.importModule(ut.Physics2D);
ut.importModule(ut.Interpolation);
ut.importModule(ut.Audio);
ut.importModule(ut.Text);
ut.importModule(ut.HTML);
ut.importModule(ut.UILayout);
ut.main = function() {
    // Singleton world
    var world = new ut.World();

    // Schedule all systems
    var scheduler = world.scheduler();
    game.AnimSystemJS.update = new game.AnimSystem()._MakeSystemFn();
    game.GameManagerSystemJS.update = new game.GameManagerSystem()._MakeSystemFn();
    game.MovementSystemJS.update = new game.MovementSystem()._MakeSystemFn();
    scheduler.schedule(game.AnimSystemJS);
    scheduler.schedule(ut.HTML.InputHandler);
    scheduler.schedule(ut.HTML.AssetLoader);
    scheduler.schedule(ut.Core2D.SequencePlayerSystem);
    scheduler.schedule(ut.HitBox2D.HitBox2DSystem);
    scheduler.schedule(ut.Shared.InputFence);
    scheduler.schedule(ut.Shared.UserCodeStart);
    scheduler.schedule(game.GameManagerSystemJS);
    scheduler.schedule(game.MovementSystemJS);
    scheduler.schedule(ut.Shared.UserCodeEnd);
    scheduler.schedule(ut.Tilemap2D.TilemapChunkingSystem);
    scheduler.schedule(ut.UILayout.UICanvasSystem);
    scheduler.schedule(ut.UILayout.UILayoutSystem);
    scheduler.schedule(ut.UILayout.SetRectTransformSizeSystem);
    scheduler.schedule(ut.HTML.TextMeasurement);
    scheduler.schedule(ut.UILayout.SetSprite2DSizeSystem);
    scheduler.schedule(ut.Shared.RenderingFence);
    scheduler.schedule(ut.Core2D.UpdateLocalTransformSystem);
    scheduler.schedule(ut.Core2D.UpdateWorldTransformSystem);
    scheduler.schedule(ut.Core2D.Sprite2DInitSystem);
    scheduler.schedule(ut.Text.Text2DInitSystem);
    scheduler.schedule(ut.Core2D.DisplayList);
    scheduler.schedule(ut.Shared.PlatformRenderingFence);
    scheduler.schedule(ut.Rendering.RendererCanvas);
    scheduler.schedule(ut.Rendering.RendererGLWebGL);
    scheduler.schedule(ut.Physics2D.Physics2DSystem);
    scheduler.schedule(ut.Audio.AudioSystem);

    // Initialize all configuration data
    var c0 = world.getConfigData(ut.Core2D.DisplayInfo);
    c0.width = 800;
    c0.height = 600;
    c0.renderMode = 0;
    world.setConfigData(c0);
    var c1 = world.getConfigData(ut.Physics2D.Physics2DConfig);
    var s0 = new ut.Math.Vector2();
    s0.x = 0;
    s0.y = -10;
    c1.gravity = s0;
    world.setConfigData(c1);
    var c2 = world.getConfigData(game.GameConfig);
    c2.state = 0;
    world.setConfigData(c2);
    var c3 = world.getConfigData(ut.Audio.AudioConfig);
    world.setConfigData(c3);

    // Create and initialize all resource entities
    UT_ASSETS_SETUP(world);

    // Create and initialize all startup entities
    ut.EntityGroup.instantiate(world, "game.Bootstrap");

    // Set up the WebSocket client
    ut._wsclient = ut._wsclient || {};
    ut._wsclient.world = world;

    // Start the player loop
    try { ut.Runtime.Service.run(world); } catch (e) { if (e !== 'SimulateInfiniteLoop') throw e; }
}
