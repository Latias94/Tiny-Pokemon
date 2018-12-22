namespace game {

    export class AudioService {

        static playAudioSourceByName(world: ut.World, name: string) {
            let entity = world.getEntityByName(name);
            if (entity.isNone()) {
                console.error(`AudioService cannot find the entity with the name '${name}'`)
                return;
            }

            AudioService.playAudioSource(world, entity);
        }

        static playAudioSource(world: ut.World, entity: ut.Entity) {
            if (!world.hasComponent(entity, ut.Audio.AudioSource)) {
                console.error(`AudioService Entity ${world.getEntityName(entity)} does not have an AudioSource component`);
                return;
            }

            if (!world.hasComponent(entity, ut.Audio.AudioSourceStart)) {
                world.addComponent(entity, ut.Audio.AudioSourceStart);
            }
        }
    }
}
