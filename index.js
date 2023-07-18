const imgArray = [
    {
        alt: "lion",
      src: "https://www.gesser-images.com/wp-content/uploads/2016/08/Lion-046-_DS30374-300x300.jpg"
    },
    {
        alt: "elephant",
      src: "https://globalelephants.org/wp-content/uploads/2014/05/Guida-Blog-Post-424-300x300.jpg"
    },
    {
        alt: "dog",
      src: "https://dickmanroadvet.com/wp-content/uploads/2016/07/dvm2-23-300x300.jpg"
    },
    ];





const imgList = document.querySelectorAll("img");

for(let i=0; i<imgList.length; i++){
    imgList[i].setAttribute("src", imgArray[i].src);
    imgList[i].setAttribute("alt", imgArray[i].alt);

};

// -----------------*task2*---------------

const arrayItem = ['Item 1', 'Item 2', 'Item 3'];

const listLi = document.querySelectorAll("li");

for(let j=0; j<arrayItem.length; j++){
  listLi[j].textContent= arrayItem[j];
}