import axios from "axios";
import React, {useEffect} from "react";

const useUpload = (setData, setLoading, res, deps = []) => {
  useEffect(() => {
    setLoading(true);
    axios.get(res).then((info) => {
      setData(info.data);
      setLoading(false);
    });
  }, ...deps)
}

export default useUpload;