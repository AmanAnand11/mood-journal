import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PostCardView = ({ post }) => {
  const { _id, title, content, date, sentiment } = post;
  const navigate = useNavigate();
  let sentimentDecimal = Number(sentiment.$numberDecimal);
  let dateObject = new Date(date);
  let variant = "Warning";
  if (sentimentDecimal > 0) variant = "Success";
  else if (sentimentDecimal < 0) variant = "Danger";

  const openPost = () => {
    navigate(`/dashboard/public-journals/${_id}`);
  };

  return (
    <>
      <Card
        bg={variant.toLowerCase()}
        key={_id}
        text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ cursor: "pointer" }}
        className="mb-2 post-card-view"
        onClick={openPost}
      >
        <Card.Header>{dateObject.toDateString()}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{content.slice(0, 100)}...</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default PostCardView;
