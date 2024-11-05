import { addDoc, collection, deleteDoc, getDocs, updateDoc ,doc} from "firebase/firestore";
import { db } from "./FirebaseConfig";

const taskCollection = collection(db, "tasks");

export const addTask = async (task) => {
  await addDoc(taskCollection, task);
};

export const getTasks = async () => {
  const snapshot = await getDocs(taskCollection);
  return snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
};

export const updateTask = async (id, updatedTask) => {
  const taskDoc = doc(db, "tasks", id);
  await updateDoc(taskDoc, updatedTask);
};

export const deleteTask = async (id) => {
    const taskDoc = doc(db,"tasks",id);
    await deleteDoc(taskDoc);
}