class Flower_r4sr0 {
    constructor() {
        this.vm = null; // will be set by PenguinMod
    }

    getInfo() {
        return {
            id: 'flowerr4sr0',
            name: 'Flower_r4sr0',
            color1: '#FFD700',
            blocks: [
                {
                    opcode: 'flashVar',
                    blockType: 'command',
                    text: 'set [VAR] to 1, wait [TIME] seconds, set [VAR] to 0',
                    arguments: {
                        VAR: {
                            type: 'string',
                            defaultValue: 'myVariable'
                        },
                        TIME: {
                            type: 'number',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'getFPS',
                    blockType: 'reporter',
                    text: 'FPS'
                }
            ]
        };
    }

    async flashVar(args, util) {
        const variable = util.target.lookupVariableByName(args.VAR);
        if (!variable) {
            console.warn(`Variable "${args.VAR}" not found.`);
            return;
        }

        variable.value = 1;
        await new Promise(resolve => setTimeout(resolve, Number(args.TIME) * 1000));
        variable.value = 0;
    }

    getFPS() {
        try {
            return this.vm.runtime.frameLoop.framerate;
        } catch (e) {
            console.warn('FPS access failed:', e);
            return 0;
        }
    }

    // Required for PenguinMod to inject VM reference
    setVM(vm) {
        this.vm = vm;
    }
}

PMExtensions.registerInternalExtension(new Flower_r4sr0());
