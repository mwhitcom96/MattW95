$(document).ready(function() {
	//$("img").click(function(){
       // $(this).hide();
      // });
	var images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg', 'image6.jpg', 'image7.jpg', 'image8.gif', 'image9.jpg', 'image10.jpg', 'image11.jpg', 'image12.jpg', 'image13.jpg', 'image14.jpg', 'image15.jpg', 'image16.jpg', 'image17.jpg', 'image18.jpg', 'image19.jpg', 'image20.jpg'];
	$('<img class="fade-in" src="images/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#banner-load');
});
