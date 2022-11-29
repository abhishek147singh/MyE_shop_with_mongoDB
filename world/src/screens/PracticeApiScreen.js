import React from 'react'

export default function PracticeApiScreen() {
  const upload = (e) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append('img' , files[0]);

    fetch('/api/practice_api', {
      method:"POST",
      body:formData
    }).then((res) => {
      // res.json().then(data => {
      //   console.log(data);
      // })
      console.log(res);
    }).catch(err => {
      console.log("Error"+err);
    });
  }
  return (
    <div>
      <h1>Choose the File !</h1>
      <input type="file" onChange={(e) => upload(e)} name = "img" />
    </div>
  )
}
