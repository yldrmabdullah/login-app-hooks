import React, { useState, useEffect } from "react";
//burası UserService.getAdminBoard() ı çağırır
import userService from "../../services/user.service";
import EventBus from "../../common/EventBus";

const BoardAdmin = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    userService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
      </header>
    </div>
  );
};

export default BoardAdmin;
