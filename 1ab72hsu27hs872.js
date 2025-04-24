class MyExtension {
    getInfo() {
        return {
            id: 'myextension',
            name: 'My Extension',
            blocks: [
                {
                    opcode: 'sayHello',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'say hello',
                }
            ]
        };
    }

    sayHello() {
        alert('Hello from my extension!');
    }
}

Scratch.extensions.register(new MyExtension());
