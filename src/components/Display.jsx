import React, { useEffect, useState } from "react";
import axios from "axios";

const Display = () => {
  const [list, setList] = useState();

  useEffect(() => {
    const getdata = async () => {
      let res = await axios.get(`http://localhost:8080/data`);
      setList(res.data);
    };
    getdata();
  }, []);
  return (
    <div>
      {list.map((e) => (
        <>
          <div key={e.id}>
            {e.id} {e.first_name}:{e.last_name}
            <img src={e.avatar} />
          </div>
        </>
      ))}
    </div>
  );
};

export default Display;