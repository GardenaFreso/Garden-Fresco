var images= [
    "img/youth agri.jpg",
    "img/tractor.jpg",
    "img/harvester.jpg",
    "img/land1.jpg",
    "img/land2.jpg",
    "img/seedlings.jpg",
    "img/seedlings1.jpg",
    "img/producepacked.jpg",
    "img/citrus.png",
    "img/farmer.jpg"
];

var captions= [
    "This is the time we ran program with one of the schools at Rustenburg",
    "Our tractor",
    "Our harvestor",
    "The time we worked with Jay Land Farm",
    "Our farm",
    "Seedilings we grow during a program",
    "Seedilings we grow during a program",
    "Produce we grew and offered to our locals at a village",
    "Citrus fruit grown by one of the people who took part in our program",
    "One of the farms we used in our journey"
];

var num=0;//num is a variable to hold the current image

function next()
{
  var slider =document.getElementById('slider');
  var captionslider = document.getElementById('caption-slider');
  num++;
  
  //checking whether the new position of image is greater or equal to the no. of images we use
  if(num>=images.length)//images is the defined arary
  {
    num=0;
    //if the condition is true num is defined to hold to first image of the slider
  }
  slider.src=images[num];
  captionslider.src=captions[num];
}

function previous()
{
  var slider =document.getElementById('slider');
  var captionslider = document.getElementById('caption-slider');
  num--;
  
  //checking whether the new position of image is before or after the first image 
  if(num<0)//images is the defined arary
  {
    num=images.length-1;
    num=captions.length-1;
    //if the condition is true num is defined to hold to last image of the slider
  }
  slider.src=images[num];
  captionslider.src=captions[num];
}