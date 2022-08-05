import {
  collection,
  orderBy,
  query,
  where,
  limit,
  getDocs,
} from 'firebase/firestore'

import { db } from '~/firebase/config'

const useFirestoreQueryCondition = async function (
  collectionName,
  condition,
  orderby = null,
  limitValue = null
) {
  const collectionRef = collection(db, collectionName)
  const results = []

  /* Condition {
    filed, --------- ex : "name", "age" , ...
    operator, ------ ex : ==, >, < ...
    value, --------- ex : "Tuan", 18
  } */
  /* Condition {
    filed, --------- ex : "name", "age" , ...
    value "asc" | "desc"
  } */
  // limit : number

  let q

  if (!orderby && !limit) {
    q = query(
      collectionRef,
      where(condition.field, condition.operator, condition.value)
    )
  } else if (orderby && !limit) {
    q = query(
      collectionRef,
      where(condition.field, condition.operator, condition.value),
      orderBy(orderby.field, orderby.value)
    )
  } else if (!orderby && limit) {
    q = query(
      collectionRef,
      where(condition.field, condition.operator, condition.value),
      limit(limitValue)
    )
  } else {
    q = query(
      collectionRef,
      where(condition.field, condition.operator, condition.value),
      orderBy(orderby.field, orderby.value),
      limit(limitValue)
    )
  }

  const querySnapshot = await getDocs(q)

  querySnapshot.forEach((doc) => {
    results.push({
      ...doc.data(),
      id: doc.id,
    })
  })

  return results
}

export default useFirestoreQueryCondition
