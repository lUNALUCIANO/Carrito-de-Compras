import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc} from "firebase/firestore"
import { app } from "./config"


const db = getFirestore(app)

export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"))
    const items = []
    querySnapshot.forEach((doc) => {

        items.push({ ...doc.data(), id: doc.id })
    })
    return items
}

export const getCategory = async () => {
    const querySnapshot = await getDocs(collection(db, "category"))
    const category = []
    querySnapshot.forEach((doc) => {

        category.push({ ...doc.data(), id: doc.id })
    })
    return category
}

export const getItemsByCategory = async (category) => {

    const q = query(collection(db, "items"), where("category", "==", category))
    const items = []

    const querySnapshot = await getDocs(q)

    querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id })
    })
    return items
}

export const getItem = async (id) => {
    
    const docRef = doc(db, "items", id)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      return {...docSnap.data(), id: docSnap.id}
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!")
    }
}

export const createOrder = async (order) =>{
    
const docRef = await addDoc(collection(db, "orders" ), order)
console.log("Document written with ID: ", docRef.id)
}
 