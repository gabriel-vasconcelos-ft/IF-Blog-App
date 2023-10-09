import axios from "axios";

async function hadAuthorization() {
  if (localStorage.getItem("user")) {
    const user = localStorage.getItem("user");

    return await axios
      .post("http://localhost:8080/autor/auth", {
        token: JSON.parse(user).token,
      })
      .then((res) => {
        if (res.data.auth === "false") {
          return false;
        } else {
          return true;
        }
      })
      .catch(() => false);
  } else return false;
}
export default hadAuthorization;
