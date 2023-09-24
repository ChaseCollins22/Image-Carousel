const LAST_PICTURE_NUM = 5;
const FIRST_PICTURE_NUM = 1;

const carouselMain = document.getElementById("carousel-main");
const [leftArrow, rightArrow] = carouselMain.querySelectorAll("i");

function decrementImgNumber(currImageNum) {
  if (currImageNum === FIRST_PICTURE_NUM) return LAST_PICTURE_NUM;
  else return (currImageNum -= 1);
}

function incrementImgNumber(currImageNum) {
  if (currImageNum === LAST_PICTURE_NUM) return FIRST_PICTURE_NUM;
  else return (currImageNum += 1);
}

function getCurrImgFileData(currImage) {
  let currImageFilePath = currImage.src.split("/").slice(-1)[0];
  let currImageFileName = currImageFilePath.split(".")[0];
  let currImageNum = Number(currImageFileName.split("-")[1]);

  return { currImageFilePath, currImageNum };
}

function getNextImgFileName(currImage, nextImgNumber) {
  const { currImageFilePath, currImageNum } = getCurrImgFileData(currImage);
  const nextImageFileName = currImageFilePath.replace(currImageNum, nextImgNumber(currImageNum));

  return nextImageFileName;
}

function selectNextImgCircle(currImage) {
  const { currImageNum } = getCurrImgFileData(currImage);
  const allImgCircles = document.getElementsByClassName("fa-circle");
  const currImgCircle = allImgCircles[currImageNum - 1];

  unselectAllImgCircles();
  currImgCircle.classList.add("is-selected");
}

function unselectAllImgCircles() {
  const allImgCircles = Array.from(document.getElementsByClassName("fa-circle"));
  allImgCircles.forEach((imgCircle) => {
    imgCircle.classList.remove("is-selected");
  });
}

function navArrowEventlisteners() {
  const currImage = document.getElementById("current-image");

  leftArrow.addEventListener("click", () => {
    currImage.src = getNextImgFileName(currImage, decrementImgNumber);
    selectNextImgCircle(currImage);
  });

  rightArrow.addEventListener("click", () => {
    currImage.src = getNextImgFileName(currImage, incrementImgNumber);
    selectNextImgCircle(currImage);
  });
}

navArrowEventlisteners();
