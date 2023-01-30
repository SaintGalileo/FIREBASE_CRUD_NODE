const { async } = require("@firebase/util");
const express = require("express");
const { addDoc, collection, query, onSnapshot, updateDoc, doc, deleteDoc } = require("firebase/firestore");
const db = require("./Firebase");
const app = express();
const PORT = 4000

//This is code is written for a CRUD SYSTEM using node js and firebase!




//app request to create data
app.post("/create", (req, res) => {

    //this is the function to create to firebase, firestore to be specific
    async function CreateData() {
        await addDoc(collection(db, 'User'), {
            username: "Daniel",
            address: "26 mbukpa",
            number: 0333,
        })
    }

    //calling the function 
    CreateData().then((result) => {
        res.send(result)
    }).catch((error) => {
        res.status(500).send("an error occured dear brethren")
    })
})


//app request to read from database
app.get('/read', (req, res) => {
    //this is the function to read data from database
    async function ReadData() {
        const q = query(collection(db, 'User'));
        const data = onSnapshot(q, (querySnapShot) => {
            querySnapShot.forEach((doc) => {
                res.json(doc.data())
            })
        })
    }

    //calling the function
    ReadData()
})


//app request for update
app.post("/update", (req, res) => {

    //function for updating the data
    async function UpdateData() {
        await updateDoc(doc(db, 'User', "hagI8DqId151cKuByjAl"), {
            username: "Emma",
            address: "51 Ngo rivers state",
            number: 1235
        }).then((result) => {
            res.send('')
        }).catch((err) => {
            res.status(500).send('ooops an error occured!')
        })
    }

    //calls the function
    UpdateData()
})


//app request for deleting
app.post("/delete", (req, res) => {

    //function to delete data
    async function DeleteData() {
        await deleteDoc(doc(db, "User", "hagI8DqId151cKuByjAl")).then((result) => {
            res.send("deleted!")
        }).catch((error) => {
            res.status(500).send("oops and error occured!")
        })
    }

    //calling the function
    DeleteData()
})


app.listen(PORT)