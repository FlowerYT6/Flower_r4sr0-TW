class FlashVariable {
    getInfo() {
        return {
            id: 'flashvariable',
            name: 'Flash Variable',
            blocks: [
                {
                    opcode: 'flashVar',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'set [VAR] to 1, wait [TIME] seconds, set [VAR] to 0',
                    arguments: {
                        VAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'myVariable'
                        },
                        TIME: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'getFPS',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'FPS'
                }
            ]
        };
    }

    async flashVar(args, util) {
        const variable = util.target.lookupVariableByName(args.VAR);
        if (!variable) return;

        variable.value = 1;
        await new Promise(resolve => setTimeout(resolve, args.TIME * 1000));
        variable.value = 0;
    }

    getFPS() {
        return Math.round(Scratch.vm.runtime.frameRate);
    }
}

Scratch.extensions.register(new FlashVariable());
