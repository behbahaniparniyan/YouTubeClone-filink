import { Input } from "@mui/material";
import { useState } from "react";

const CommentForm = ({
  handleSubmit,
  submitLabel,
  hasCancelButton = false,
  handleCancel,
  initialText = "",
}) => {
  const [text, setText] = useState(initialText);
  const isTextareaDisabled = text.length === 0;
  const ariaLabel = { "aria-label": "description" };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(text);
    setText("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="Add a comment..."
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ color: "block" }}
      />
      {/* <Input
        placeholder="Add a comment..."
        inputProps={ariaLabel}
        style={{ width: "100%" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> */}
      <button className="comment-form-button" disabled={isTextareaDisabled}>
        {submitLabel}
      </button>
      {hasCancelButton && (
        <button
          type="button"
          className="comment-form-button comment-form-cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default CommentForm;
