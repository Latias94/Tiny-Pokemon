using UTiny;
using UTiny.Core2D;
using UTiny.Math;
using UTiny.Shared;
using ut;
using UTiny.HTML;
using UTiny.Rendering;
using ut.EditorExtensions;
using UTiny.Tilemap2D;
using UTiny.HitBox2D;
using UTiny.Physics2D;
using UTiny.Interpolation;
using UTiny.Audio;
using UTiny.Text;
using UTiny.UILayout;

/*
 * !!! TEMP UNITL PROPER SCENE FORMAT !!!
 */
namespace entities.game
{
    namespace Bootstrap
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace GameScene
    {
        public struct Component : IComponentData
        {
        }
    }
    namespace Start
    {
        public struct Component : IComponentData
        {
        }
    }
}

namespace game
{
    public struct Movement : IComponentData
    {
        public float speed;
        public game.MoveDirection direction;
        public game.MoveDirection lastDirection;
    }
    public struct PlayerTag : IComponentData
    {
    }
    public struct WalkSprite : IComponentData
    {
        public Entity walk_down_0;
        public Entity walk_down_1;
        public Entity walk_down_2;
        public Entity walk_up_0;
        public Entity walk_up_1;
        public Entity walk_up_2;
        public Entity walk_left_0;
        public Entity walk_left_1;
        public Entity walk_left_2;
        public Entity walk_right_0;
        public Entity walk_right_1;
        public Entity walk_right_2;
    }
    public enum GameState
    {
        Initialize = 0
        , Menu = 1
        , Play = 2
        , Exit = 3
        , Start = 4
    }
    public enum MoveDirection
    {
        up = 0
        , down = 1
        , left = 2
        , right = 3
        , idle = 4
    }
    [Configuration]
    public struct GameConfig : IComponentData
    {
        public game.GameState state;
    }
}

namespace ut.Core2D
{
    namespace layers
    {
        public struct Default : IComponentData
        {
        }
        public struct TransparentFX : IComponentData
        {
        }
        public struct IgnoreRaycast : IComponentData
        {
        }
        public struct Water : IComponentData
        {
        }
        public struct UI : IComponentData
        {
        }
    }
}

namespace ut.Math
{
}

namespace ut
{
}

namespace ut.Shared
{
}

namespace ut.Core2D
{
}

namespace ut
{
}

namespace ut.HTML
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.HTML
{
}

namespace ut.Core2D
{
}

namespace ut.Rendering
{
}

namespace ut.Rendering
{
}

namespace ut.Core2D
{
}

namespace ut.EditorExtensions
{
    public struct AssetReferenceAnimationClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceAudioClip : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSprite : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceSpriteAtlas : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTexture2D : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTile : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct AssetReferenceTMP_FontAsset : IComponentData
    {
        public string guid;
        public long fileId;
        public int type;
    }
    public struct CameraCullingMask : IComponentData
    {
        public int mask;
    }
    public struct EntityLayer : IComponentData
    {
        public int layer;
    }
}

namespace ut.Tilemap2D
{
}

namespace ut.HitBox2D
{
}

namespace ut.Physics2D
{
}

namespace ut.Interpolation
{
}

namespace ut.Audio
{
}

namespace ut.Text
{
}

namespace ut.HTML
{
}

namespace ut.UILayout
{
}
namespace game
{
    public class AnimSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    [UpdateBefore(typeof(UTiny.Shared.UserCodeEnd))]
    [UpdateAfter(typeof(UTiny.Shared.UserCodeStart))]
    public class GameManagerSystemJS : IComponentSystem
    {
    }
}
namespace game
{
    public class MovementSystemJS : IComponentSystem
    {
    }
}
