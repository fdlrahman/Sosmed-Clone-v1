import firebase, {db, provider} from '../firebase'

export const addPosts = data => dispatch => {
    return new Promise((resolve, reject) => {
        db.collection("posts")
            .add(
                {
                    timestamp: firebase.firestore.Timestamp.fromDate(new Date()), 
                    ...data
                }
            )
            .then((res) => resolve(res))
            .catch((err) => reject(err));
    })
}