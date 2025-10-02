import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore"
import { app } from "./config"
import toast from "react-hot-toast"


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
        return { ...docSnap.data(), id: docSnap.id }
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!")
    }
}

export const createOrder = async (order) => {
    try {
        const docRef = await addDoc(collection(db, "orders"), order)
        const detalle = order.items
            .map(item => `${item.name} x${item.count} ($${item.price})`)
            .join(", ")
        toast.success(
            `Gracias por tu compra!\nTu Numero de ID es: ${docRef.id}\nDetalle:${detalle}\nTotal: $${order.total}`, {
            duration: 8000,
            icon: "🎉"
        }

        )
        return true
    } catch (error) {
        toast.error(`Ocurrio un error :${error.code}`)
        return false
    }
}



