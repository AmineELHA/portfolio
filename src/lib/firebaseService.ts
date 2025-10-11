import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    // Add a new document with a generated id to the 'contact-messages' collection
    const docRef = await addDoc(collection(db, 'contact-messages'), {
      ...formData,
      timestamp: serverTimestamp(), // Use Firestore server timestamp
    });
    
    console.log('Document written with ID: ', docRef.id);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error('Error adding document: ', error);
    
    // Provide more specific error handling
    if (error instanceof Error) {
      if (error.message.includes('400') || error.message.includes('Bad Request')) {
        throw new Error('Firebase configuration error. Please check your project settings.');
      } else if (error.message.includes('403') || error.message.includes('permission')) {
        throw new Error('Permission denied. Please check your Firestore security rules.');
      } else if (error.message.includes('404')) {
        throw new Error('Connection failed. Please check your internet connection.');
      } else {
        throw new Error(`Failed to submit form: ${error.message}`);
      }
    } else {
      throw new Error('Failed to submit form due to an unknown error');
    }
  }
};