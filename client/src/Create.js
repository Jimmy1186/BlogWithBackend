import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [pic, setPic] = useState([]);
  const [realPic, setRealPic] = useState("");
  const [routePic, setRoutePic] = useState("");
  const [body, setBody] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [isLoading, setisLoading] = useState("false");

  const history = useHistory();

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    setRealPic(e.target.files[0]);
    setRoutePic(`../img/${e.target.files[0].name}`);

    if (e.target.files[0]) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setPic(filesArray);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const blog = { title, time, routePic, body };
    setisLoading(true);
    const formData = new FormData();
    formData.append("file", realPic);
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog");
      setisLoading(false);
      // history.go(-1);返回前一頁
      history.push("/");
    });

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const { fileName, filePath } = res.data;

      setUploadedFile({ fileName, filePath });

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }

  };

  return (
    <div className="create">
      <h2>Add New Blogs</h2>
      <form onSubmit={onSubmit}>
        <label>Blog title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Time :</label>
        <input
          type="datetime-local"
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
          }}
        ></input>
        <label>picture</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <label>Blog body :</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        {!setisLoading && <button>Add Blog</button>}
        {setisLoading && <button>Add Blog</button>}
      </form>

      <div className="blog-preview">
        <h2>{title}</h2>
        <h3>{time}</h3>
        <img src={pic} alt="da" />
        {<div>{body}</div>}
      </div>
    </div>
  );
};

export default Create;
