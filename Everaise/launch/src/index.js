import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Router, Route, Switch } from "react-router";

import "./index.css";

//helper functions

function formatDate(date) {
  return date.toLocaleDateString() + " at " + date.toLocaleTimeString();
}

function PostHeader(props) {
  return (
    <h6>
      Posted by {props.author} on {formatDate(props.date)}
    </h6>
  );
}

function PostBody(props) {
  return (
    <div class="card-body">
      <p>{props.postText}</p>
      <br></br>
    </div>
  );
}

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a class="navbar-brand" href="github.com">
            Everaise Launch
          </a>

          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="forum.html">
                Forum <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="classroom.html">
                Classroom
              </a>
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

function bold() {
  console.log();
}

function underline() {
  console.log();
}

function italic() {
  console.log();
}

function color(c) {
  console.log();
}

function hide() {
  console.log();
}

function url() {
  console.log();
}

function img() {
  console.log();
}

function attach() {
  console.log();
}

class Main extends React.Component {
  render() {
    return (
      <>
        <main role="main" class="container">
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <div class="jumbotron">
            <h1>Everaise Launch Forum</h1>
            
            <div class="card" id="submit">
              <div class="card-header alert-primary">
                <ul class="nav navbar navbar-left">
                  <li class="nav-item">
                    <button
                      class="btn btn-outline-dark my-2 my-sm-0"
                      type="submit"
                      onClick={bold}
                    >
                      <i class="fas fa-bold"></i>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="btn btn-outline-dark my-2 my-sm-0"
                      type="submit"
                      onClick={underline}
                    >
                      <i class="fas fa-underline"></i>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="btn btn-outline-dark my-2 my-sm-0"
                      type="submit"
                      onClick={italic}
                    >
                      <i class="fas fa-italic"></i>
                    </button>
                  </li>

                  <li class="nav-item dropdown">
                    <button
                      href="#"
                      class="btn btn-outline-dark dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i class="fas fa-palette"></i>
                    </button>
                    <ul class="dropdown-menu multi-column ">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm">
                            <ul class="list-inline">
                              <ul class="multi-column-dropdown list-inline">
                                <li class="nav-item">
                                  <a href="github.com" onClick={color("#f00")}>
                                    <i
                                      style={{ color: "#f00" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a
                                    href="github.com"
                                    onClick={color("#ff9a00")}
                                  >
                                    <i
                                      style={{ color: "#ff9a00" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a
                                    href="github.com"
                                    onClick={color("#38761D")}
                                  >
                                    <i
                                      style={{ color: "#38761D" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a href="github.com" onclick="color('#00f');">
                                    <i
                                      style={{ color: "#00f" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a
                                    href="github.com"
                                    onClick={color("#9a00ff")}
                                  >
                                    <i
                                      style={{ color: "#9a00ff" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a href="github.com" onClick={color("#aaa")}>
                                    <i
                                      style={{ color: "#aaa" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a href="github.com" onClick={color("#888")}>
                                    <i
                                      style={{ color: "#888" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                </li>
                                <li class="nav-item">
                                  <a
                                    href="github.com"
                                    onClick={color("#800000")}
                                  >
                                    <i
                                      style={{ color: "#800000" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a
                                    href="github.com"
                                    onClick={color("#783F04")}
                                  >
                                    <i
                                      style={{ color: "#783F04" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a
                                    href="github.com"
                                    onClick={color("#274E13")}
                                  >
                                    <i
                                      style={{ color: "#274E13" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a
                                    href="github.com"
                                    onClick={color("#001e7b")}
                                  >
                                    <i
                                      style={{ color: "#001e7b" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a
                                    href="github.com"
                                    onClick={color("#351C75")}
                                  >
                                    <i
                                      style={{ color: "#351C75" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a href="github.com" onClick={color("#444")}>
                                    <i
                                      style={{ color: "#444" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                  <a href="github.com" onClick={color("#000")}>
                                    <i
                                      style={{ color: "#000" }}
                                      class="fas fa-square"
                                    ></i>
                                  </a>
                                </li>
                              </ul>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <button
                      class="btn btn-outline-dark my-2 my-sm-0"
                      type="submit"
                      onclick="hide()"
                    >
                      <i class="fas fa-eye-slash"></i>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="btn btn-outline-dark my-2 my-sm-0"
                      type="submit"
                      onclick="url()"
                    >
                      <i class="fas fa-link"></i>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="btn btn-outline-dark my-2 my-sm-0"
                      type="submit"
                      onclick="img()"
                    >
                      <i class="fas fa-images"></i>
                    </button>
                  </li>
                  <li class="nav-item">
                    <button
                      class="btn btn-outline-dark my-2 my-sm-0"
                      type="submit"
                      onclick="attach()"
                    >
                      <i class="fas fa-paperclip"></i>
                    </button>
                  </li>
                </ul>
              </div>

              <div class="card-body">
                <div class="input-group mb-3">
                  <input
                    id="subject"
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
                <div class="input-group mb-3">
                  <input
                    id="tags"
                    type="text"
                    class="form-control"
                    placeholder="Tags"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
                <div class="input-group">
                  <textarea
                    id="post"
                    class="form-control"
                    placeholder="Post"
                    aria-label="With textarea"
                    rows="5"
                  ></textarea>
                </div>
                <br></br>
                <div class="card">
                  {/* style=background-color: "#ededed" */}
                  <div class="card-body">
                    <p id="preview" style={{ color: "#888" }}>
                      Preview
                    </p>
                  </div>
                </div>{" "}
                <br></br>
                <div
                  id="subject-error"
                  class="alert alert-warning  fade show"
                  role="alert"
                  style={{ display: "none" }}
                >
                  <strong>Error:</strong> Your subject must be between 8 and 50
                  characters.
                </div>
                <div
                  id="post-error"
                  class="alert alert-warning  fade show"
                  role="alert"
                  style={{ display: "none" }}
                >
                  <strong>Error:</strong> Your post must be between 8 and 10,000
                  characters.
                </div>
                <div
                  id="tag-error"
                  class="alert alert-warning fade show"
                  role="alert"
                  style={{ display: "none" }}
                >
                  <strong>Error:</strong> You may not include more than 5 tags.
                </div>
                <br></br>
                <button
                  style={{ float: "right" }}
                  type="button"
                  class="btn btn-secondary"
                >
                  Submit
                </button>
              </div>
            </div>
            <br></br>
            <div id="posts">
              <ForumPost
                totalDisplay={true}
                postDisplay={false}
                id={62}
                date={new Date()}
                title={"Prove that ABC"}
                postText={"hello test test"}
                author={"bob"}
              />
              <ForumPost
                totalDisplay={true}
                postDisplay={false}
                id={62}
                date={new Date()}
                title={"Prove that ABC"}
                postText={"hello test test"}
                author={"bob"}
              />
            </div>
          </div>
        </main>
      </>
    );
  }
}

class ForumPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalDisplay: true,
      postDisplay: false,
    };
  }
  render() {
    return (
      <>
        {this.state.totalDisplay ? (
          <div class="card">
            <div class="card-header alert-primary">
              <ul class="nav navbar nav-pills card-header-pills">
                <li class="nav-item">
                  <button
                    class="btn btn-link"
                    onClick={() =>
                      this.setState({
                        postDisplay: this.state.postDisplay ? false : true,
                      })
                    }
                  >
                    <h5 class="nav navbar-text">{this.props.title}</h5>
                  </button>
                </li>
                <li class="nav-item">
                  <PostHeader user={this.props.author} date={this.props.date} />
                </li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.postDisplay ? (
          <PostBody postText={this.props.postText} />
        ) : (
          ""
        )}
      </>
    );
  }
}

const content = (
  <>
    <Navbar />
    <Main />
  </>
);

ReactDOM.render(content, document.getElementById("root"));
