import { getNotes, setErrors } from 'actions/actionsNotes';
import { ref } from 'config/firebaseConfig';
import { getDocs, orderBy, query } from 'firebase/firestore';
import { useState } from 'react'
import { useDispatch } from 'react-redux';

const useGet = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    
    const getData = async () => {
        setLoading(true)
        try {
          const data = await getDocs(query(ref, orderBy("fecha", "desc")));
          dispatch(getNotes(data.docs));
        } catch (error: any) {
          dispatch(setErrors(error.message));
        }
        setLoading(false)
      };

  return {getData, loading}
}

export default useGet