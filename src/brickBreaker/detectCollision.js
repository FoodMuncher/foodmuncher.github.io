export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  
  let centreOfBall = ball.position.x + ball.size / 2;

  let topOfObject = gameObject.position.y;
  let bottomOfObject = gameObject.position.y + gameObject.height;
  let leftSideOfObject = gameObject.position.x;
  let rightSideOfObject = gameObject.position.x + gameObject.width;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    centreOfBall >= leftSideOfObject && 
    centreOfBall <= rightSideOfObject
    ) {
      return true;
  } else {
    return false;
  }
}