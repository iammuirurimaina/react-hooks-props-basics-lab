import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      <a href={props.githubURL}>{props.githubURL}</a>
      <a href={props.linkedinURL}>{props.linkedinURL}</a>
    </div>
  );
}

export default Links;