/* eslint-disable no-console */
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/firebase/config'
import addTimeStamp from '~/helper/addTimeStamp'
import useFirestoreQueryCondition from '~/hooks/useFirestoreQueryCondition'

const collectionRef = collection(db, 'users')

export const createUser = async function (user) {
  await addDoc(collectionRef, addTimeStamp(user))
}

export const getAllUser = function () {
  const users = []
  onSnapshot(collectionRef, (snapshort) => {
    snapshort.docs.map((doc) => users.push(doc.data()))
  })
  return users
}

export const getUserByEmail = async function (email) {
  const data = await useFirestoreQueryCondition(
    'users',
    {
      field: 'email',
      operator: '==',
      value: email,
    },
    null,
    1
  )

  const user = data[0]

  return user
}
