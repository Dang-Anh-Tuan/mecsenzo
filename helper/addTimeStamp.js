import { serverTimestamp } from '@firebase/firestore'

export default function (obj) {
  return {
    ...obj,
    timestamp: serverTimestamp(),
  }
}
