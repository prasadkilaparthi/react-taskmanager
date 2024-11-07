import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

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
};

export const signup = async (email,password) => {
    return await createUserWithEmailAndPassword(auth,email,password);
};

export const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth,email,password);
};

export const logout = async () => {
    return await signOut(auth);
};