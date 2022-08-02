import React from "react";
import { db } from "../firebase";
import { uid } from "uid";
import { onValue,ref } from "firebase/database";

export default function Data() {
  const [tem, setTem] = React.useState(0);
  const [hum, setHum] = React.useState(0);
  React.useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        setTem(data.tem);
        setHum(data.hum);
        // console.log(data);
      }
    });
  }, []);
  return <div>
    {tem} + {hum}
  </div>;
}
