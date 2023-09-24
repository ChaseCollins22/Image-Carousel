const TOTAL_NUM_PICTURES = 5;
const FIRST_PICTURE = 1;

function increment(currImageNum) {}

function decrement(currImageNum) {
  if (currImageNum === FIRST_PICTURE) return TOTAL_NUM_PICTURES;
  else return (currImageNum -= 1);
}
