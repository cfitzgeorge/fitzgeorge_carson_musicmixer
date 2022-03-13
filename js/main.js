(() => {

    let theMixboard = document.querySelector(".interactible-section"),
    beatBlocks = document.querySelectorAll(".beat-block"),
    dropZones = document.querySelectorAll(".drop-zone");

    function dragStarted(event) {
        console.log('started dragging beatblock')
        event.dataTransfer.setData('currentItem', event.target.id);
    }

    function allowDragOver(event) {
        event.preventDefault();
        console.log('dragged over mixboard');
    }

    function allowDrop(event) {
        event.preventDefault;
        console.log('dropped on mixboard');
    }

    let droppedBB = event.dataTransfer.getData('currentItem');

    this.appendChild(document.querySelector(`#${droppedBB}`));
    console.log('droppedBB');

    theMixboard.forEach(block => block.addEventListener('dragstart', dragStarted));


})();

