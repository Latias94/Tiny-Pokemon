using Unity.Collections.LowLevel.Unsafe;
namespace game
{
    public enum GameState
    {
        Initialize = 0,
        Menu = 1,
        Play = 2,
        Exit = 3,
        Start = 4,
    }
}
namespace game
{
    public enum MoveDirection
    {
        up = 0,
        down = 1,
        left = 2,
        right = 3,
        idle = 4,
    }
}
namespace entities.game.Bootstrap
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.GameScene
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace entities.game.Start
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Component : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Movement : UTiny.IComponentData
    {


        public float speed;
        public game.MoveDirection direction;
        public game.MoveDirection lastDirection;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct PlayerTag : UTiny.IComponentData
    {





    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct WalkSprite : UTiny.IComponentData
    {


        public UTiny.Entity walk_down_0;
        public UTiny.Entity walk_down_1;
        public UTiny.Entity walk_down_2;
        public UTiny.Entity walk_up_0;
        public UTiny.Entity walk_up_1;
        public UTiny.Entity walk_up_2;
        public UTiny.Entity walk_left_0;
        public UTiny.Entity walk_left_1;
        public UTiny.Entity walk_left_2;
        public UTiny.Entity walk_right_0;
        public UTiny.Entity walk_right_1;
        public UTiny.Entity walk_right_2;



    }
}
namespace game
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct GameConfig : UTiny.IComponentData
    {


        public game.GameState state;



    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Default : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct TransparentFX : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct IgnoreRaycast : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct Water : UTiny.IComponentData
    {





    }
}
namespace ut.Core2D.layers
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct UI : UTiny.IComponentData
    {





    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAnimationClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceAudioClip : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSprite : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceSpriteAtlas : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTexture2D : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTile : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct AssetReferenceTMP_FontAsset : UTiny.IComponentData
    {


        public string guid;
        public long fileId;
        public int type;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct CameraCullingMask : UTiny.IComponentData
    {


        public int mask;



    }
}
namespace ut.EditorExtensions
{
    [global::System.Runtime.InteropServices.StructLayout(global::System.Runtime.InteropServices.LayoutKind.Sequential)]
    public struct EntityLayer : UTiny.IComponentData
    {


        public int layer;



    }
}



