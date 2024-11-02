function updateImage(){
    const ref = firebase.storage().ref();
    const file = document.querySelector('#photo').files[0];
    const metadata = {
        contentType: file.type
    };
    const name = file.name;
    const updateIMG = ref.child(name).put(file, metadata);
    updateIMG
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            console.log(url);
        })
        .catch(console.error)
}