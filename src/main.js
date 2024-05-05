const blocks = document.querySelectorAll('.block');

function clickHandle(event) {
    const currentBlock = event.currentTarget;

    const cPlusBlockId = 'imgC++';
    const PythonBlockId = 'imgPython';
    const JSBlockId = 'imgJS';

    const blocksIds = [cPlusBlockId, PythonBlockId, JSBlockId];

    const currentBlockId = currentBlock.id;

    for (let i in blocksIds) {
        compareIds(currentBlockId, blocksIds[i])
        // console.log(blocksIds[i])
    }
}

function compareIds(comparedId, sourceId) {
    if (comparedId === sourceId) return console.log(`${comparedId} Done`);
    else return console.log('Something went wrong');
}

blocks.forEach(button => {
    button.addEventListener('click', clickHandle);
});