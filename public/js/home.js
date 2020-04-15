function goToRoom(id) {
    window.location = id.id;
}

function createRoom() {
    fetch('/create', {
        method: 'post'
    }).then((res) => { return res.json(); })
    .then(
        myJson => {
            window.location = myJson;
        }
    ).catch(err => {
        console.log(err)
        })
}